import React from 'react';
import './Button.css';

type IProps = { variant?: string; children: React.ReactNode; res?: any; onClick?: () => void };

function Button(props: IProps) {
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
