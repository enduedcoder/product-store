import React from 'react';
import { mount } from 'enzyme';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import Home from './Home';

const mockApolloClient = createMockClient();

describe('Home', () => {
  it('renders content', async () => {
    let wrapper = mount(
      <ApolloProvider client={mockApolloClient}>
        <Home />
      </ApolloProvider>
    );

    expect(wrapper).toBeTruthy();
  });
});
