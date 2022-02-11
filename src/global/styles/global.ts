import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => `${theme.font.Roboto}, sans-serif`};
    font-size: ${({ theme }) => theme.font.fontSize};

    /* Works on Firefox */
      scrollbar-width: thin;
      scrollbar-color: blue orange;
  };

    /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 12px;
  };

  *::-webkit-scrollbar-track {
    background: none;
  };

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 20px;
  };

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background} !important;
    background: ${({ theme }) => theme.colors.background}!important;
  };

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${({ theme }) => `${theme.font.Roboto}, sans-serif`};
  };

  h1 {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.purple};
    font-weight: 700;
  }

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black}
  }

  p {
    font-size: 1.142rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray}
  }

  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  };

  ul,
  ol {
    list-style: none;
  };

  a {
    text-decoration: none;
    color: inherit;
  };
`;
