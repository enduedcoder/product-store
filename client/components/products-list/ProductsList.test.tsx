import React from 'react';
import { PRODUCTS } from '../../graphql';
import ProductsList, { ProductsListProps } from './ProductsList';
import { mockAllProductsData, mockVariables } from '../../data';
import { createMockClient } from 'mock-apollo-client';
import { mount } from 'enzyme';
import { ApolloProvider } from '@apollo/client';
import { actWait } from '../../utils';

const mockApolloClient = createMockClient();
const queryHandler = jest.fn().mockResolvedValue({
  data: mockAllProductsData,
});

mockApolloClient.setRequestHandler(PRODUCTS, queryHandler);

const SortOrderTypeData = {
  code: '1',
  sortField: '',
  sortOrder: '',
};

const testProps: ProductsListProps = {
  searchTerm: '',
  pageNumber: 1,
  sortDetails: SortOrderTypeData,
};

describe('ProductsList', () => {
  it('should render content', async () => {
    const handleClickMock = jest.fn();
    const wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductsList
          {...testProps}
          onItemsCountChange={handleClickMock}
        />
      </ApolloProvider>
    );

    await actWait();

    expect(wrapper).toBeTruthy();
  });

  it('executes the query with the correct variables', async () => {
    const handleClickMock = jest.fn();
    const wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <ProductsList
          {...testProps}
          onItemsCountChange={handleClickMock}
        />
      </ApolloProvider>
    );

    await actWait();

    expect(queryHandler).toBeCalledWith(mockVariables);
  });
});
