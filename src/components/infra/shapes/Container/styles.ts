import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin-top: clamp(96px, 7.2vw, 130px);

  align-items: center;

  padding: clamp(50px, 5vw, 90px) 20px;

  width: 100%;
  height: 100%;
`;
