import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import { Button as InfraButton, Text } from 'src/components/ui';

import theme from 'src/global/themes';
import { Box } from 'src/components/infra';

interface ContainerProps {
  isValid: boolean | null;
  isProcessing?: boolean;
}

interface GetColorProps extends ContainerProps {
  colors: typeof theme.colors;
}

const getColor = ({ isValid, colors }: GetColorProps) => {
  if (isValid === null) {
    return colors.purple;
  }

  if (isValid) {
    return '#00e676';
  }

  if (!isValid) {
    return '#ff1744';
  }

  return colors.purple;
};

export const Container = styled(Box)<ContainerProps>`
  ${({ isValid, theme: { colors } }) =>
    css`
      border-color: ${getColor({
        isValid,
        colors
      })};
    `}

  ${({ isProcessing }) =>
    isProcessing &&
    css`
      justify-content: center;
      gap: 30px;
    `}

  transition: all 1s ease;
`;

export const Title = styled(Text)`
  text-align: center;

  @media (max-width: 550px) {
    font-size: 2rem;
    line-height: 35px;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
    line-height: 35px;
  }
`;

export const Paragraph = styled(Text)`
  text-align: center;
  max-width: 409px;

  @media (max-width: 550px) {
    font-size: calc(1.25rem - 20%);
  }

  @media (max-width: 375px) {
    font-size: calc(1.25rem - 20%);
    line-height: calc(21px - 10%);
  }
`;

export const Small = styled(Text)`
  text-align: center;

  button {
    color: ${({ theme: { colors } }) => colors.purple};
    font-size: 0.885rem;
    background: none;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      ${({ theme: { colors } }) => css`
        color: ${lighten(0.2, colors.purple)};
      `}
    }

    transition: all 0.5s ease;
  }

  a {
    font-size: 0.875rem;
    color: ${({ theme: { colors } }) => colors.purple};
    font-weight: 500;
  }

  @media (max-width: 375px) {
    margin-top: 10px;
  }
`;

export const Button = styled(InfraButton)`
  @media (max-width: 550px) {
    margin: 10px 0;
    width: 100%;
  }
`;
