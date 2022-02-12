import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

type BoxProps = HTMLAttributes<HTMLElement>;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => (
  <Container {...rest}>{children} </Container>
);

export { Box };
