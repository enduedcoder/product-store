import { gql } from '@apollo/client';

const GET_PRODUCT_PRICE = gql`
  query GetProductPrice($productId: String!) {
    product(productId: $productId) {
      title
      image
      material
      color
      description
      release_date
      id
      priceDetails {
        id
        price
        productId
      }
    }
  }
`;

const PRODUCTS = gql`
  query GetProducts(
    $filters: String
    $pageNumber: Int
    $limit: Int
    $sortField: String
    $sortOrder: String
  ) {
    products(
      filters: $filters
      pageNumber: $pageNumber
      limit: $limit
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      items {
        title
        image
        id
        priceDetails {
          price
        }
      }
      count
    }
  }
`;

export { GET_PRODUCT_PRICE, PRODUCTS };
