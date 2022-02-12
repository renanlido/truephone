import React from 'react';
import { Container } from 'src/components/infra';

import { Content, Wrapper, Title, Paragraph, Button, Small } from './styles';

const Home: React.FC = () => {
  const handleFile = (file: File | null | undefined) => {
    // eslint-disable-next-line no-console
    console.log(file);
  };

  return (
    <Container>
      <Content>
        <Wrapper>
          <Title type="h1" variant="title">
            Verifique a validade de uma lista de mensagens
            <img
              alt="👍 thumbs up Emoji on Apple Platform"
              title="👍 thumbs up Emoji on Apple Platform"
              data-src="https://emojiguide.com/wp-content/uploads/platform/apple/44140.png"
              src="https://emojiguide.com/wp-content/uploads/platform/apple/44140.png"
              data-loaded="true"
              width={25}
            />
          </Title>

          <Button handleFile={handleFile} variant="button">
            Selecione lista
          </Button>

          <Paragraph type="p" variant="paragraph">
            Selecione um arquivo CSV para iniciar a verificação de uma lista com
            números e mensagens de SMS.
          </Paragraph>

          <Small type="small" variant="small">
            Use nosso <a href="http">modelo</a> de arquivo se você tem alguma
            dúvidas.
          </Small>
        </Wrapper>
      </Content>
    </Container>
  );
};

export { Home };
