import { DropzoneRootProps } from 'react-dropzone';

import { Box } from 'src/components/infra';
import styled, { css } from 'styled-components';

import theme from 'src/global/themes';

interface ContainerProps extends DropzoneRootProps {
  isValid: boolean;
}

interface GetColorProps extends ContainerProps {
  colors: typeof theme.colors;
}

const getColor = ({ isFocused, isValid, colors }: GetColorProps) => {
  if (isValid) {
    return '#00e676';
  }
  if (!isValid) {
    return '#ff1744';
  }

  if (isValid === undefined) {
    return colors.purple;
  }

  if (isFocused) {
    return '#2196f3';
  }
  return colors.purple;
};

export const Container = styled(Box)<ContainerProps>`
  ${({ isDragAccept, isDragReject, isFocused, isValid, theme: { colors } }) =>
    (isValid || isDragAccept || isDragReject || isFocused) &&
    css`
      border-color: ${getColor({
        isFocused,
        isValid,
        colors
      })};
    `}
`;
