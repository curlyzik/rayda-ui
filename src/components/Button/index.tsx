import React from 'react';

export interface ButtonProps {
  color: string;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  color,
  children,
}) => {
  return <button style={{ color: color }}>{children}</button>;
};

export default Button;
