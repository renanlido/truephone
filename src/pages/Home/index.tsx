import React from 'react';
import { Box } from 'src/components/infra';

import { Button, Container, Title } from './styles';

const Home: React.FC = () => (
  <Container>
    <Box>
      <Title>
        Verifique a validade de uma lista de mensagens
        <img
          alt="👍 thumbs up Emoji on Apple Platform"
          title="👍 thumbs up Emoji on Apple Platform"
          data-src="https://emojiguide.com/wp-content/uploads/platform/apple/44140.png"
          src="https://emojiguide.com/wp-content/uploads/platform/apple/44140.png"
          data-loaded="true"
          width={30}
        />
      </Title>
      <Button>Selecione lista</Button>
    </Box>
  </Container>
);

export { Home };
