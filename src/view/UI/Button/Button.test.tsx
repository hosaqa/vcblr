import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const button = shallow(<Button>button text</Button>);

  it('renders correctly', () => {
    expect(button.find('button')).toHaveLength(1);
    expect(button.find('button').text()).toEqual('button text');
    expect(button.find('button').hasClass('Button')).toEqual(true);
    expect(button.find('button').hasClass('Button--primary')).toEqual(true);
  });
});
