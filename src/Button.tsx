import React from 'react';

interface Props {
  size: string;
}

const Button: React.FC<Props> = ({ size }) => {
  size = 'small';

  return <button>{size}</button>;
};
