import React, { ButtonHTMLAttributes, ChangeEvent, useRef } from 'react';
import { Text, TextBaseProps } from 'src/components/ui';
import Ripple from 'react-ripples';

import { HandleFileProps, useFileValidation } from 'src/shared/hooks';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textTypeVariant: TextBaseProps['variant'];
  handleFile: (props: HandleFileProps) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  textTypeVariant,
  handleFile,
  ...rest
}) => {
  const { handleValidateFile } = useFileValidation();
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const file = target.files?.item(0);

    const validFile = handleValidateFile(file);

    handleFile(validFile);
  };

  return (
    <Ripple>
      <Container onClick={handleClick} {...rest}>
        <Text variant={textTypeVariant}>{children}</Text>
      </Container>
      <input
        accept=".csv"
        type="file"
        style={{ display: 'none' }}
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </Ripple>
  );
};

export { Button };
