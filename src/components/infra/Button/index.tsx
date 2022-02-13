import React, { ButtonHTMLAttributes } from 'react';
import Ripple from 'react-ripples';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Ripple>
    <Container {...rest}>{children}</Container>
  </Ripple>
);

export { Button };
