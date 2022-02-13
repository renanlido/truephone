import React from 'react';

import { Button } from 'src/components/ui';

import { Paragraph, Small, Title } from '../shared/styles';

interface BodyProps {
  handleFiles: (file: File) => void;
}

const Body: React.FC<BodyProps> = ({ handleFiles }) => (
  <>
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

    <Button textTypeVariant="button" handleFile={handleFiles}>
      Selecione lista
    </Button>

    <Paragraph type="p" variant="paragraph">
      Selecione um arquivo CSV para iniciar a verificação de uma lista com
      números e mensagens de SMS.
    </Paragraph>

    <Small type="small" variant="small">
      Use nosso{' '}
      <a href="/assets/documents/modelo.csv" download="modelo.csv">
        modelo
      </a>{' '}
      de arquivo se você tem alguma dúvidas.
    </Small>
  </>
);

export { Body };
