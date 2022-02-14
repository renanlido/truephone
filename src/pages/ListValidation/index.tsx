import React, { useState } from 'react';
import { useData } from 'src/shared/hooks';

import { ReactComponent as Valid } from 'src/assets/icons/valid.svg';
import { ReactComponent as Invalid } from 'src/assets/icons/invalid.svg';
import { Button, Text } from 'src/components/ui';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { postFileService } from 'src/shared/services/api';

import { Container, Footer, Header, List, Row, Title } from './styles';

const ListValidation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { data } = useData();
  const { colors } = useTheme();
  const navigate = useNavigate();

  const { contactsList, name, date } = data;

  const dataValidCount = contactsList.filter(
    item => item.fileIsValid === true
  ).length;

  const isValid = (value: boolean) =>
    value ? (
      <Text
        variant="small"
        type="p"
        style={{ color: '#000' }}
        className="validText"
      >
        Válida <Valid color="#12C223" width={27} height={27} />
      </Text>
    ) : (
      <Text
        variant="small"
        type="p"
        style={{ color: '#000' }}
        className="validText"
      >
        Inválida{' '}
        <Valid
          color="#EE5454
    "
          width={27}
          height={27}
        />
      </Text>
    );

  const handleSaveData = async () => {
    setLoading(true);
    const newContacts = contactsList.map(item => ({
      phone: item.phone,
      message: item.message,
      status: item.fileIsValid
    }));

    const response = await postFileService({
      name,
      date,
      contactsList: newContacts
    });

    if (response) {
      setLoading(false);
      navigate('/finish');
      return;
    }

    setLoading(false);
    setError(true);
  };

  return (
    <Container>
      {error && (
        <Text variant="small" type="h3" style={{ color: 'red' }}>
          Tivemos um erro, tente novamente mais tarde.
        </Text>
      )}

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
          <Text
            variant="small"
            type="p"
            style={{ color: '#000', fontWeight: 600 }}
          >
            Número
          </Text>
          <Text
            variant="small"
            type="p"
            style={{ color: '#000', fontWeight: 600 }}
          >
            Prévia da mensagem
          </Text>
          <Text
            variant="small"
            type="p"
            style={{ color: '#000', fontWeight: 600 }}
          >
            Resultado
          </Text>
        </Header>

        {contactsList.map(item => (
          <Row key={item.id}>
            <Text variant="small" type="p" style={{ color: '#000' }}>
              {item.phone}
            </Text>
            <Text variant="small" type="p" style={{ color: '#000' }}>
              {item.message.substring(0, 40)}...
            </Text>
            <>{isValid(item.fileIsValid)}</>
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
            onClick={() => navigate('/')}
          >
            Cancelar
          </Button>
          <Button
            icon={<Valid color={colors.pureWhite} width={20} height={20} />}
            variant="solid"
            as="button"
            textTypeVariant="button"
            onClick={handleSaveData}
            loading={loading}
          >
            Salvar
          </Button>
        </div>
      </Footer>
    </Container>
  );
};

export { ListValidation };
