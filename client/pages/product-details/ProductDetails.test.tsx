import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ReactRouterDom from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import { GET_PRODUCT_PRICE } from '../../graphql';
import ProductDetails from './ProductDetails';
import { actWait } from '../../utils';
import { mockProductData } from '../../data';

const IMAGE_SELECTOR = 'img';
const BUTTON_SELECTOR = 'button';

let wrapper: ReactWrapper;
const mockApolloClient = createMockClient();
const queryHandler = jest
  .fn()
  .mockResolvedValue({ data: mockProductData });
const mockHistoryData = {
  push: jest.fn(),
};

mockApolloClient.setRequestHandler(GET_PRODUCT_PRICE, queryHandler);

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual(
    'react-router-dom'
  ) as typeof ReactRouterDom),
  useParams: jest.fn().mockReturnValue({
    productId: '1',
  }),
  useHistory: jest.fn(() => mockHistoryData),
}));

describe('ProductDetails', () => {
  it('executes the query with the correct variables', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(queryHandler).toBeCalledWith({ productId: '1' });
  });

  it('should send query request', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(queryHandler).toBeCalledTimes(1);
  });

  it('renders the product image', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.find(IMAGE_SELECTOR).prop('src')).toContain(
      `${mockProductData.product.image}`
    );
  });

  it('renders the product title', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain(
      `${mockProductData.product.title}`
    );
  });

  it('renders the product description', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain(
      `${mockProductData.product.description}`
    );
  });

  it('renders the product color', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain(
      `${mockProductData.product.color}`
    );
  });

  it('renders the product material', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain(
      `${mockProductData.product.material}`
    );
  });

  it('renders the product release date', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain('Monday, January 3, 2022');
  });

  it('renders the product price', async () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    await actWait();

    expect(wrapper.text()).toContain(
      `${mockProductData.product.priceDetails.price}`
    );
  });

  it('should call callback on back button click', () => {
    wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductDetails />
      </ApolloProvider>
    );
    wrapper.find(BUTTON_SELECTOR).simulate('click');

    expect(mockHistoryData.push).toBeCalledWith('/');
  });
});
