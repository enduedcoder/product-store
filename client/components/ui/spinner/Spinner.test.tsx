import React from 'react';
import { mount } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('should render content', () => {
    const wrapper = mount(<Spinner />);

    expect(wrapper).toBeTruthy();
  });
});
