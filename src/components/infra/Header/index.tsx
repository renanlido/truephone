import React from 'react';

import { ReactComponent as Phone } from 'src/assets/icons/phone.svg';
import { Text } from 'src/components/ui';
import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <Phone width="46px" height="46px" />
    <Text variant="header">Truephone</Text>
  </Container>
);

export { Header };
