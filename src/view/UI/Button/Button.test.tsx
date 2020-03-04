import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button UI', () => {
  const props = {
    children: 'button text',
  };

  describe('default params and text', () => {
    const button = shallow(<Button {...props} />);

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('text renders properly', () => {
      expect(button.find('button').text()).toEqual(props.children);
    });

    it('properly classnames', () => {
      expect(button.find('button').hasClass('Button')).toEqual(true);
      expect(button.find('button').hasClass('Button--primary')).toEqual(true);
    });
  });

  describe('secondary type and custom classname', () => {
    const button = shallow(
      <Button className="custom" variant="secondary" {...props} />
    );

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('text renders properly', () => {
      expect(button.find('button').text()).toEqual(props.children);
    });

    it('properly classnames', () => {
      expect(button.find('button').hasClass('Button')).toEqual(true);
      expect(button.find('button').hasClass('Button--secondary')).toEqual(true);
      expect(button.find('button').hasClass('custom')).toEqual(true);
    });
  });

  describe('html attributes', () => {
    const ariaLabelText = 'Menu button';

    const button = shallow(
      <Button disabled aria-label={ariaLabelText} {...props} />
    );

    it('renders properly', () => {
      expect(button).toMatchSnapshot();
    });

    it('text renders properly', () => {
      expect(button.find('button').text()).toEqual(props.children);
    });

    it('aria-label renders properly', () => {
      expect(button.find('button').prop('aria-label')).toEqual(ariaLabelText);
    });

    it('disabled attribute', () => {
      expect(button.find('button').prop('disabled')).toBeTruthy();
    });
  });
});
