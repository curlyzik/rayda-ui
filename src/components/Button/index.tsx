import React from 'react';
import { ButtonProps, Button as MUIButton } from '@mui/material';
import '../../styles/tailwind.css';
import '../../styles/MuiOverrides/button.css';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => (
  <MUIButton {...props}>{props.children}</MUIButton>
);

export default Button;
