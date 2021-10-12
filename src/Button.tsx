import React from 'react';

interface Props {
  size: string;
}

const Button: React.FC<Props> = ({ size }) => {
  size = 5;

  return <button>{size}</button>;
};
