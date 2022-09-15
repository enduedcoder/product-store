export const mockProductData = {
  product: {
    title: 'Gorgeous Metal Sausages',
    image: 'http://placeimg.com/640/480/technics',
    material: 'Plastic',
    color: 'Violet',
    description: 'Test description',
    release_date: '2022-01-03T13:22:22.202Z',
    id: '1',
    priceDetails: {
      id: '1',
      price: '674.00',
      productId: '1',
    },
  },
};

export const mockAllProductsData = {
  products: {
    items: [
      {
        title: 'Gorgeous Metal Sausages',
        image: 'http://placeimg.com/640/480/technics',
        id: '1',
        priceDetails: {
          price: '674.00',
        },
      },
    ],
    count: 1,
  },
};

export const mockVariables = {
  filters: '',
  pageNumber: 1,
  limit: 10,
  sortField: '',
  sortOrder: '',
};
