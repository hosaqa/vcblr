import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';
import AddWordForm from '../AddWordForm';

describe('Layout component', () => {
  describe('default params render', () => {
    const layout = shallow(<Layout />);

    it('renders properly', () => {
      expect(layout).toMatchSnapshot();
    });

    it('properly classnames', () => {
      expect(layout.find('main.Layout')).toHaveLength(1);
      expect(layout.find('.Layout__content')).toHaveLength(1);
    });

    it('render AddWordForm', () => {
      expect(layout.find(AddWordForm)).toHaveLength(1);
    });
  });
});
