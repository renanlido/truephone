import React from 'react';
import { FadeLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import { Title, Small } from '../shared/styles';

interface LoadingProps {
  handleLoading: () => void;
}

const Loading: React.FC<LoadingProps> = ({ handleLoading }) => {
  const { colors } = useTheme();

  return (
    <>
      <Title type="h1" variant="title">
        Estamos verificando todas as mensagens em seu arquivo...
      </Title>
      <FadeLoader color={colors.mutedGray} radius={0} />
      <Small type="small" variant="small">
        Você quer{' '}
        <button type="button" onClick={handleLoading}>
          cancelar e voltar ao início
        </button>
        ?
      </Small>
    </>
  );
};

export { Loading };
