import styled from 'styled-components';

import { Box } from 'src/components/infra';
import { Text } from 'src/components/ui';

export const Container = styled(Box)`
  padding: 40px !important;

  justify-content: start;
  min-height: 100%;

  @media (max-width: 768px) {
    padding: 20px 10px !important;
  }

  @media (max-width: 500px) {
    padding: 20px 10px !important;
  }

  @media (max-width: 375px) {
    padding: 20px 10px !important;
  }
`;

export const Title = styled(Text)`
  text-align: center;

  max-width: 466px;

  span {
    font-size: 3.6rem;
    color: #12c223;
  }
  /*
  @media (max-width: 550px) {
    font-size: 2rem;
    line-height: 35px;
  }

  @media (max-width: 375px) {
    font-size: 1.8rem;
    line-height: 35px;
  } */
`;

export const List = styled.ul`
  display: flex;
  align-self: stretch;

  flex-direction: column;

  font-weight: 400;

  border-radius: 10px;

  border: 1px solid ${({ theme: { colors } }) => colors.mutedGray};
  width: 100%;

  font-size: 1.4rem !important;
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

  @media (max-width: 700px) {
    grid-template-columns: 1fr 2fr 1fr;
    height: auto !important;
    padding: 10px;
    gap: 20px;
  }

  @media (max-width: 625px) {
    grid-template-columns: 1fr 1fr 1fr;
    height: auto !important;
    padding: 10px;
    gap: 10px;
  }

  &:last-child {
    border-bottom: 0;
  }

  p.validText {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 30px;

    @media (max-width: 700px) {
      gap: 20px;
    }

    @media (max-width: 625px) {
      gap: 5px;
    }
  }
`;

export const Row = styled(Header)`
  font-weight: 400;

  box-shadow: none;

  & + li {
    border-top: 1px solid ${({ theme: { colors } }) => colors.mutedGray};
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

export const Background = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;

  height: 108%;
  width: 100%;

  background: rgba(0, 0, 0, 0.3);

  @media (max-width: 720px) {
    height: 118%;
  }
`;
