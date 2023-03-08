import React from 'react';
import './Center.css';
type IProps = {
  children: React.ReactNode;
};
const Center = ({ children }: IProps) => {
  return <div className='center'>{children}</div>;
};

export default Center;
