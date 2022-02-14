import React, { ButtonHTMLAttributes, ChangeEvent, useRef } from 'react';
import { BeatLoader } from 'react-spinners';
import { Text, TextBaseProps } from 'src/components/ui';

import { Button as CustomButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textTypeVariant: TextBaseProps['variant'];
  handleFile?: (file: File) => void;
  as?: 'button' | 'input';
  variant?: 'outline' | 'solid';
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  textTypeVariant,
  handleFile,
  as = 'input',
  variant = 'solid',
  icon: Icon,
  loading,
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
          type="file"
          accept=".csv"
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
      {Icon && !loading ? (
        Icon
      ) : (
        <span style={{ display: 'flex', flex: 1, minWidth: 36 }}>
          <BeatLoader size={8} color="#aaa" />
        </span>
      )}
    </CustomButton>
  );
};

export { Button };
