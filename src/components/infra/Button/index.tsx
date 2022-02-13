import React, { ButtonHTMLAttributes } from 'react';

import { Container, Ripple } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Ripple>
    <Container {...rest}>{children}</Container>
  </Ripple>
);

export { Button };
