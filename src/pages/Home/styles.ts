import styled from 'styled-components';
import {
  Container as CustomContainer,
  Button as InfraButton
} from 'src/components/infra';

export const Container = styled(CustomContainer)`
  gap: 24px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;

  max-width: 466px;

  text-align: center;
`;

export const Button = styled(InfraButton)``;
