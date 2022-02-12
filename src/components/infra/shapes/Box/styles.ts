import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: clamp(20px, 4vw, 85px) clamp(144px, 4vw, 188px);
  border-radius: 10px;
  margin-top: 90px;

  background-color: ${({ theme }) => theme.colors.pureWhite};
  border: 4px solid ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 10px 60px rgba(61, 58, 218, 0.15);

  width: min(max(100%), 842px);

  height: min(max(100%), 466px);

  @media (max-width: 550px) {
    margin-top: calc(90px - 5%);
  }

  @media (max-width: 375px) {
    margin-top: calc(90px - 10%);
  }
`;
