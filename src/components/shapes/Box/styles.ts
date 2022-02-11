import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 85px;

  background-color: ${({ theme }) => theme.colors.pureWhite};

  border: 4px solid ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 10px 60px rgba(61, 58, 218, 0.15);
  border-radius: 10px;

  width: 100%;
  max-width: 842px;
`;
