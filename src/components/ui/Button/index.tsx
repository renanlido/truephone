import React, { ButtonHTMLAttributes, ChangeEvent, useRef } from 'react';
import { Text, TextBaseProps } from 'src/components/ui';

import { Button as CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textTypeVariant: TextBaseProps['variant'];
  handleFile?: (file: File) => void;
  as?: 'button' | 'input';
  variant?: 'outline' | 'solid';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  textTypeVariant,
  handleFile,
  as = 'input',
  variant = 'solid',
  icon: Icon,
  ...rest
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const file = target.files?.item(0) as File;

    if (handleFile) {
      handleFile(file);
    }
  };

  if (as === 'input') {
    return (
      <>
        <CustomButton onClick={handleClick} {...rest}>
          <Text variant={textTypeVariant} type="span">
            {children}
          </Text>
        </CustomButton>
        <input
          accept=".csv"
          type="file"
          style={{ display: 'none' }}
          ref={hiddenFileInput}
          onChange={handleChange}
        />
      </>
    );
  }

  return (
    <CustomButton variant={variant} {...rest}>
      <Text variant={textTypeVariant} type="span">
        {children}
      </Text>
      {Icon && Icon}
    </CustomButton>
  );
};

export { Button };
