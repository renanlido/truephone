import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: clamp(40px, 5vw, 85px) clamp(20px, 11vw, 188px);
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.pureWhite};
  border: 4px solid ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 10px 60px rgba(61, 58, 218, 0.15);

  width: min(max(100%), 842px);
`;
