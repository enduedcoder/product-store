import React from 'react';
import ProductCard, { ProductCardProps } from './ProductCard';
import { mount } from 'enzyme';
import ReactRouterDom from 'react-router-dom';
import { mockProductData } from '../../data';

const IMAGE_SELECTOR = 'img';
const PRODUCT_TITLE_SELECTOR = '.card-title';
const PRODUCT_PRICE_SELECTOR = '.card-text';
const CURRENCY = '$';

const testProps: ProductCardProps = mockProductData;

const mHistory = {
  push: jest.fn(),
};

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual(
    'react-router-dom'
  ) as typeof ReactRouterDom),
  useHistory: jest.fn(() => mHistory),
}));

describe('ProductCard', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render content', () => {
    const wrapper = mount(<ProductCard {...testProps} />);

    expect(wrapper).toBeTruthy();
  });

  it('should render image', () => {
    const wrapper = mount(<ProductCard {...testProps} />);

    expect(wrapper.find(IMAGE_SELECTOR).prop('src')).toContain(
      testProps.product.image
    );
  });

  it('should render product title', () => {
    const wrapper = mount(<ProductCard {...testProps} />);

    expect(wrapper.find(PRODUCT_TITLE_SELECTOR).text()).toEqual(
      testProps.product.title
    );
  });

  it('should render product price', () => {
    const wrapper = mount(<ProductCard {...testProps} />);

    expect(wrapper.find(PRODUCT_PRICE_SELECTOR).text()).toEqual(
      `${CURRENCY} ${testProps.product.priceDetails.price}`
    );
  });

  it('should call callback on click', () => {
    const wrapper = mount(<ProductCard {...testProps} />);

    wrapper.find('.card').simulate('click');

    expect(mHistory.push).toBeCalledWith(
      `/product/${testProps.product.id}`
    );
  });
});
