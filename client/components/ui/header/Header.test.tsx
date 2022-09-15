import React from 'react';
import Header from './Header';
import { mount } from 'enzyme';

const HEADER_TEXT = 'Product Store';

const LINK_SELECTOR = 'a';

describe('Header', () => {
  it('should render heading', () => {
    const wrapper = mount(<Header />);

    expect(wrapper.find(LINK_SELECTOR).text()).toEqual(HEADER_TEXT);
  });
});
