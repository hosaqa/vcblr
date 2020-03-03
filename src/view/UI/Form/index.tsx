import React, { memo } from 'react';
import './Form.css';

interface IForm extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children?: React.ReactNode;
}

const Form: React.FC<IForm> = memo(({ className, children, ...props }) => (
  <form className={className} {...props}>
    {children}
  </form>
));

export default Form;
