import styled, { css } from 'styled-components';

import { Text as UiText } from 'src/components/ui';
import { lighten } from 'polished';

export const Text = styled(UiText)`
  color: ${({ theme: { colors } }) => colors.purple};
`;

export const Title = styled(UiText)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SubTitle = styled(UiText)`
  text-align: center;
`;

export const Paragraph = styled(UiText)`
  text-align: center;
`;

export const Small = styled(UiText)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
    color: ${({ theme: { colors } }) => colors.purple};
    font-size: clamp(0.4rem, 1rem + 0.7450771687067589vw, 1.4rem);
    background: none;
    font-weight: 600;
    text-decoration: underline;
    margin-right: 4px;
    cursor: pointer;

    &:hover {
      ${({ theme: { colors } }) => css`
        color: ${lighten(0.2, colors.purple)};
      `}
    }

    transition: all 0.5s ease;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }
`;
