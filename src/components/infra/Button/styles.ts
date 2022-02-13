import styled, { css } from 'styled-components';
import { darken } from 'polished';

import ClickRipple from 'react-ripples';

export const Container = styled.button`
  padding: clamp(10px, 3vw, 20px) clamp(15px, 2vw, 30px);
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    ${({ theme }) => css`
      background-color: ${darken(0.2, theme.colors.purple)};
    `}

    cursor: pointer;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Ripple = styled(ClickRipple)`
  @media (max-width: 550px) {
    margin: 10px 0;
    width: 100%;
  }
`;
