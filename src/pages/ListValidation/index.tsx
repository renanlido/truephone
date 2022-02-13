import React from 'react';
import { useData } from 'src/shared/hooks';

import { ReactComponent as Valid } from 'src/assets/icons/valid.svg';
import { ReactComponent as Invalid } from 'src/assets/icons/invalid.svg';
import { Button, Text } from 'src/components/ui';
import { useTheme } from 'styled-components';
import { Container, Footer, Header, List, Row, Title } from './styles';

const ListValidation: React.FC = () => {
  const { data } = useData();
  const { colors } = useTheme();

  const dataValidCount = data.filter(item => item.fileIsValid === true).length;

  const isValid = (value: boolean) =>
    value ? (
      <>
        Válida <Valid color="#12C223" width={27} height={27} />
      </>
    ) : (
      <>
        Inválida{' '}
        <Valid
          color="#EE5454
    "
          width={27}
          height={27}
        />
      </>
    );

  return (
    <Container>
      <Title type="h1" variant="title">
        Encontramos <span>{dataValidCount}</span> mensagens válidas em sua lista{' '}
        <img
          title="🎉 thumbs up Emoji on Apple Platform"
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/285/party-popper_1f389.png"
          srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/285/party-popper_1f389.png 2x"
          alt="🎉Party Popper on Apple iOS 14.6"
          data-loaded="true"
          width={35}
        />
      </Title>

      <List>
        <Header>
          <div>Número</div>
          <div>Prévia da mensagem</div>
          <div>Resultado</div>
        </Header>

        {data.map(item => (
          <Row key={item.id}>
            <div>{item.phone}</div>
            <div>{item.message.substring(0, 40)}...</div>
            <div>{isValid(item.fileIsValid)}</div>
          </Row>
        ))}
      </List>

      <Footer>
        <Text
          type="h2"
          variant="subtitle"
          style={{ display: 'flex', alignItems: 'center', gap: 10 }}
        >
          Está pronto para prosseguir?{' '}
          <img
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/thinking-face_1f914.png"
            srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/thinking-face_1f914.png 2x"
            alt="Thinking Face on Apple iOS 14.6"
            width="24"
            height="24"
          />
        </Text>

        <div>
          <Button
            icon={<Invalid color={colors.gray} width={20} height={20} />}
            variant="outline"
            as="button"
            textTypeVariant="button"
          >
            Cancelar
          </Button>
          <Button
            icon={<Valid color={colors.pureWhite} width={20} height={20} />}
            variant="solid"
            as="button"
            textTypeVariant="button"
          >
            Salvar
          </Button>
        </div>
      </Footer>
    </Container>
  );
};

export { ListValidation };
