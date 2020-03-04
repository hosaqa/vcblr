import React, { memo } from 'react';
import clsx from 'clsx';
import './TextField.css';

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const TextField: React.FC<ITextField> = memo(({ className, ...props }) => (
  <div className={clsx('TextField', className)}>
    <input className="TextField__input" {...props} />
  </div>
));

export default TextField;
