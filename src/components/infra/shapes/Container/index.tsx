import React, { HTMLAttributes } from 'react';

import { Container as CustomContainer } from './styles';

type ContainerProps = HTMLAttributes<HTMLElement>;

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => (
  <CustomContainer {...rest}>{children}</CustomContainer>
);

export { Container };
