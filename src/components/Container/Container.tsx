import React, { ReactNode } from 'react';
import './Container.css';

type TContainerProps = {
  children: ReactNode,
};

const Container = ({ children }:TContainerProps) => { 
  return (<div>{children}</div>);
};

export default Container;
