import React from 'react';
import SortProducts, { SortProductsProps } from './SortProducts';
import { mount } from 'enzyme';

const SORT_DATA = [
  {
    code: '1',
    sortField: '',
    sortOrder: '',
  },
];

const testProps: SortProductsProps = {
  sortDataDetails: SORT_DATA,
};

describe('SortProducts', () => {
  it('should render content', () => {
    const handleClickMock = jest.fn();
    const wrapper = mount(
      <SortProducts
        {...testProps}
        onSelectSortItems={handleClickMock}
      />
    );

    expect(wrapper).toBeTruthy();
  });
});
