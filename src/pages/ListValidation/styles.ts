import styled from 'styled-components';

import { Box } from 'src/components/infra';
import { Text } from 'src/components/ui';

export const Container = styled(Box)`
  padding: 40px;

  justify-content: start;
  min-height: 100%;
`;

export const Title = styled(Text)`
  text-align: center;

  max-width: 466px;

  span {
    font-size: 2.25rem;
    color: #12c223;
  }

  @media (max-width: 550px) {
    font-size: 2rem;
    line-height: 35px;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
    line-height: 35px;
  }
`;

export const List = styled.ul`
  display: flex;
  align-self: stretch;

  flex-direction: column;

  font-weight: 400;

  border-radius: 10px;

  border: 1px solid ${({ theme: { colors } }) => colors.mutedGray};
  width: 100%;

  font-size: 0.875rem !important;
`;

export const Header = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 40px;
  align-items: center;
  width: 100%;
  height: 48px;
  font-weight: 600;
  padding: 0 12px;

  box-shadow: inset 0px -1px 0px ${({ theme: { colors } }) => colors.mutedGray};

  &:last-child {
    border-bottom: 0;
  }

  div {
    font-size: 0.875rem;
  }
`;

export const Row = styled(Header)`
  font-weight: 400;

  box-shadow: none;

  & + li {
    border-top: 1px solid ${({ theme: { colors } }) => colors.mutedGray};
  }

  div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 30px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  gap: 24px;

  div {
    display: flex;
    gap: 20px;
  }
`;
