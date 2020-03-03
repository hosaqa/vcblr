import React from 'react';
import clsx from 'clsx';
import './Button.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IButton> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => (
  <button
    className={clsx('Button', `Button--${variant}`, className)}
    {...props}
  >
    {children}
  </button>
);

export default Button;
