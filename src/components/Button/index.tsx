import React from 'react';
import {
  ButtonProps as MuiButtonProps,
  Button as MUIButton,
} from '@mui/material';
import StyleWrapper from '../StyleWrapper';

export interface ButtonProps extends MuiButtonProps {
  children: string;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <StyleWrapper>
    <MUIButton {...rest}>{children}</MUIButton>
  </StyleWrapper>
);

export default Button;
