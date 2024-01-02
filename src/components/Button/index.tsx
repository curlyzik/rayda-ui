import React from 'react';
import {
  ButtonProps as MuiButtonProps,
  Button as MUIButton,
} from '@mui/material';
import StyleWrapper from '../StyleWrapper';

export interface ButtonProps extends MuiButtonProps {}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => (
  <StyleWrapper>
    <MUIButton {...props}>{props.children}</MUIButton>
  </StyleWrapper>
);

export default Button;
