import React from 'react';
import './Input.css';

type IProps = {
  size?: string;
  rest?: any;
};

function Input(props: IProps) {
  const { size = 'medium', ...rest } = props;
  return <input className={`input ${size}`} {...rest} />;
}

export default Input;
