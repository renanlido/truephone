import React from 'react';

import { ReactComponent as Phone } from 'src/assets/icons/phone.svg';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <Phone width="46px" height="46px" />
    <h1>Truephone</h1>
  </Container>
);

export { Header };
