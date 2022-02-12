import React from 'react';

import { CustomTag } from './styles';

import { TextBaseProps as TextProps } from './types';

const Text: React.FC<TextProps> = ({ children, type, variant, ...rest }) => (
  <CustomTag as={type} variant={variant} {...rest}>
    {children}
  </CustomTag>
);

export { Text };
