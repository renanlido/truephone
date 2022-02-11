import React from 'react';

import { CustomTag } from './styles';

import { TextBaseProps as TextProps } from './types';

const Text: React.FC<TextProps> = ({ children, as, variant, ...rest }) => (
  <CustomTag as={as} variant={variant} {...rest}>
    {children}
  </CustomTag>
);

export { Text };
