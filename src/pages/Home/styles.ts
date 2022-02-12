import styled from 'styled-components';

import { Button as InfraButton, Text } from 'src/components/ui';

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

  a {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.purple};
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
