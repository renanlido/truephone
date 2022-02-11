import React from 'react';

import { Container as CustomContainer } from './styles';

const Container: React.FC = ({ children }) => (
  <CustomContainer>{children}</CustomContainer>
);

export { Container };
