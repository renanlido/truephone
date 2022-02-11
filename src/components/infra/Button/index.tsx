import React, { ButtonHTMLAttributes } from 'react';
import { Text, TextBaseProps } from 'src/components/ui';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TextBaseProps['variant'];
}

const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => (
  <Container {...rest}>
    <Text variant={variant}>{children}</Text>
  </Container>
);

export { Button };
