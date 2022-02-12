import React, { ButtonHTMLAttributes, ChangeEvent, useRef } from 'react';
import { Text, TextBaseProps } from 'src/components/ui';
import Ripple from 'react-ripples';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: TextBaseProps['variant'];
  handleFile: (file: File | null | undefined) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  handleFile,
  ...rest
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    const file = target.files?.item(0);

    handleFile(file);
  };

  return (
    <Ripple>
      <Container onClick={handleClick} {...rest}>
        <Text variant={variant}>{children}</Text>
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
