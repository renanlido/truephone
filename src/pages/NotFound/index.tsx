import React from 'react';

import { ReactComponent as NotFoundBg } from 'src/assets/svg/notFoundImage.svg';
import { Text } from 'src/components/ui';

import { Container } from './styles';

const NotFound: React.FC = () => (
  <Container>
    <NotFoundBg width="100%" />

    <Text type="h1" variant="header">
      Alguem aí viu o estagiário?
    </Text>
  </Container>
);

export { NotFound };
