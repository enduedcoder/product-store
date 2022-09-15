const { RESTDataSource } = require('apollo-datasource-rest');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://5fa0a1cfe21bab0016dfd30f.mockapi.io/';
  }

  async getProductPrice(productId) {
    const productPrice = await this.get(
      `products/${encodeURIComponent(productId)}/prices`
    );

    return productPrice.length > 0 ? productPrice[0] : null;
  }

  async getProductById(productId) {
    const product = await this.get(
      `products/${encodeURIComponent(productId)}`
    );

    return product;
  }

  async getAllProducts({
    filters,
    pageNumber,
    limit,
    sortField,
    sortOrder,
  }) {
    const { items, count } = await this.get(
      `products?search=${encodeURIComponent(
        filters
      )}&page=${pageNumber}&limit=${limit}&sortBy=${sortField}&order=${sortOrder}`
    );

    return { items, count };
  }
}

module.exports = { ProductAPI };
