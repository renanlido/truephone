import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { Button as InfraButton } from 'src/components/infra/Button';

interface ButtonProps {
  variant?: 'outline' | 'solid';
}

export const Button = styled(InfraButton)<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ variant, theme: { colors } }) =>
    variant === 'outline' &&
    css`
      background: transparent;
      border: 2px solid ${colors.gray};
      padding: clamp(8px, 1vw, 18px) clamp(13px, 2vw, 28px) !important;

      span {
        color: ${colors.gray};
      }

      &:hover {
        padding: clamp(8px, 1vw, 18px) clamp(13px, 2vw, 28px) !important;
        border: 2px solid ${lighten(0.2, colors.gray)};
        background: transparent;

        cursor: pointer;

        span {
          color: ${lighten(0.2, colors.gray)};
        }

        svg {
          color: ${lighten(0.2, colors.gray)};
        }
      }
    `}
  transition: all 0.2s ease;
`;
