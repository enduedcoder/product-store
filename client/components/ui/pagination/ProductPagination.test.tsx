import React from 'react';
import { mount } from 'enzyme';
import ProductPagination, {
  ProductPaginationProps,
} from './ProductPagination';

const testProps: ProductPaginationProps = {
  activePage: 1,
  itemsPerPage: 1,
  totalProducts: 1,
};

describe('ProductPagination', () => {
  it('should render content', () => {
    const handlePageClick = jest.fn();
    const wrapper = mount(
      <ProductPagination
        {...testProps}
        onPageNumClick={handlePageClick}
      />
    );

    expect(wrapper).toBeTruthy();
  });
});
