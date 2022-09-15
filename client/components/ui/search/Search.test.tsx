import React from 'react';
import { mount } from 'enzyme';
import Search from './Search';

describe('Search', () => {
  it('should render content', () => {
    const handleSearchTermChange = jest.fn();
    const wrapper = mount(
      <Search onSearchTermChange={handleSearchTermChange} />
    );

    expect(wrapper).toBeTruthy();
  });
});
