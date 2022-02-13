import React, { forwardRef, HTMLAttributes } from 'react';

import { Container } from './styles';

type BoxProps = HTMLAttributes<HTMLElement>;

const CustomBox: React.ForwardRefRenderFunction<any, BoxProps> = (
  { children, ...rest },
  ref
) => (
  <Container ref={ref} {...rest}>
    {children}
  </Container>
);

const Box = forwardRef(CustomBox);
export { Box };
