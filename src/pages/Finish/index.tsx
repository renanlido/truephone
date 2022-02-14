import React from 'react';
import { Box as Container } from 'src/components/infra';
import { useNavigate } from 'react-router-dom';

import { Title, SubTitle, Paragraph, Small } from './styles';

const Finish: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title type="h1" variant="header">
        É isso aí!
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/rocket_1f680.png"
          srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/rocket_1f680.png 2x"
          alt="Rocket on Apple iOS 14.6"
          width={35}
        />
      </Title>

      <SubTitle type="h2" variant="title">
        Sua lista está pronta para entrar em produção!
      </SubTitle>

      <Paragraph type="p" variant="paragraph">
        Já guardamos todos as mensagens válidas para que você possa usá-las em
        uma campanha no futuro.
      </Paragraph>

      <Small type="small" variant="small">
        <button type="button" onClick={() => navigate('/')}>
          Voltar ao início
        </button>
        para iniciar outra verificação ?
      </Small>
    </Container>
  );
};

export { Finish };
