import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  padding: 20px 30px;
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.pureWhite};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    ${({ theme }) => css`
      background-color: ${darken(0.2, theme.colors.purple)};
    `}

    cursor: pointer;
  }
`;
