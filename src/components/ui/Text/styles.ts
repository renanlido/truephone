import styled, { css } from 'styled-components';

import { Variants, VartiantTypes } from './types';

interface TextStyledProps {
  variant: keyof typeof VartiantTypes;
}

export const CustomTag = styled.h1<TextStyledProps>`
  ${({ variant }) => css`
    line-height: ${Variants[variant].lineHeight};
    font-weight: ${Variants[variant].fontWeight};
    font-size: ${Variants[variant].fontSize};
    color: ${Variants[variant].color};
  `}
`;
