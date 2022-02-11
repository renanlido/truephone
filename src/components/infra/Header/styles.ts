import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 42px;
  gap: 10px;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.pureWhite};

  h1 {
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 900;
    font-size: 2.25rem;
  }
`;
