import React from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField';

describe('Textfield UI', () => {
  describe('default props', () => {
    const textfield = shallow(<TextField />);

    it('renders properly', () => {
      expect(textfield).toMatchSnapshot();
    });

    it('renders div element', () => {
      expect(textfield.find('.TextField')).toHaveLength(1);
    });

    it('renders input element', () => {
      expect(textfield.find('.TextField .TextField__input')).toHaveLength(1);
    });
  });

  describe('custom class', () => {
    const textfield = shallow(<TextField className="custom" />);

    it('renders properly', () => {
      expect(textfield).toMatchSnapshot();
    });

    it('div element has custom class', () => {
      expect(textfield.find('.TextField')).toHaveLength(1);
      expect(textfield.find('.TextField').hasClass('custom')).toBeTruthy();
    });
  });

  describe('html attributes on input', () => {
    const inputAriaLabel = 'enter text';
    const inputValue = 'default text';

    const textfield = shallow(
      <TextField aria-label={inputAriaLabel} value={inputValue} />
    );

    it('renders properly', () => {
      expect(textfield).toMatchSnapshot();
    });

    it('renders div element', () => {
      expect(textfield.find('.TextField')).toHaveLength(1);
    });

    it('input attributes', () => {
      expect(
        textfield.find('.TextField .TextField__input').prop('aria-label')
      ).toEqual(inputAriaLabel);
      expect(
        textfield.find('.TextField .TextField__input').prop('value')
      ).toEqual(inputValue);
    });
  });
});
