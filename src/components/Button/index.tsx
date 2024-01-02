import React from 'react';
import { ButtonProps, Button as MUIButton } from '@mui/material';
import StyleWrapper from '../StyleWrapper';

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => (
  <StyleWrapper>
    <MUIButton {...props}>{props.children}</MUIButton>
  </StyleWrapper>
);

export default Button;
