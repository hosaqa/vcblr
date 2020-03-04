import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form UI', () => {
  describe('default props', () => {
    const form = shallow(
      <Form>
        <div className="tested-node"></div>
      </Form>
    );

    it('renders properly', () => {
      expect(form).toMatchSnapshot();
    });

    it('render form element', () => {
      expect(form.find('form')).toHaveLength(1);
    });

    it('render children', () => {
      expect(form.find('form .tested-node')).toHaveLength(1);
    });
  });

  describe('custom classname', () => {
    const form = shallow(<Form className="custom" />);

    it('renders properly', () => {
      expect(form).toMatchSnapshot();
    });

    it('form has custom classname', () => {
      expect(form.find('form').hasClass('custom')).toBeTruthy();
    });
  });

  describe('html attributes', () => {
    const formAutocomplete = 'off';

    const form = shallow(<Form autoComplete={formAutocomplete} />);

    it('renders properly', () => {
      expect(form).toMatchSnapshot();
    });

    it('form has autocomplete off attribute', () => {
      expect(form.find('form').prop('autoComplete')).toEqual(formAutocomplete);
    });
  });
});
