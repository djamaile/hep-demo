import React from 'react';

interface Props {
  size: string;
}

export const Button: React.FC<Props> = ({ size }) => {
  const rightSize = size ? 'big' : 'small';
  return <button type="button">{rightSize}</button>;
};
