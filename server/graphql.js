const { ApolloServer, gql } = require('apollo-server-express');
const { ProductAPI } = require('./datasources/productsApi');

const typeDefs = gql`
  type Product {
    title: String
    image: String
    material: String
    color: String
    description: String
    release_date: String
    id: String
    priceDetails: ProductPrice
  }

  type ProductPrice {
    price: String
    id: String
    productId: String
  }

  type ProductCollection {
    items: [Product]
    count: Int
  }

  type Query {
    product(productId: String!): Product
    products(
      filters: String
      pageNumber: Int
      limit: Int
      sortField: String
      sortOrder: String
    ): ProductCollection
  }
`;

const resolvers = {
  Query: {
    products: async (_, args, { dataSources }) => {
      const {
        items,
        count,
      } = await dataSources.productsAPI.getAllProducts(args);

      return { items, count };
    },

    product: async (_, { productId }, { dataSources }) => {
      const product = await dataSources.productsAPI.getProductById(
        productId
      );

      return { ...product, productId };
    },
  },

  Product: {
    priceDetails: async (product, _, { dataSources }) => {
      const priceDetails = await dataSources.productsAPI.getProductPrice(
        product.id
      );
      return priceDetails;
    },
  },
};

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      productsAPI: new ProductAPI(),
    };
  },
});
