import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  html {
    font-size: 62.5%;
  }

  body {
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.background} !important;
    background: ${({ theme }) => theme.colors.background}!important;
    font-family: ${({ theme }) => `${theme.font.Roboto}, sans-serif`};
    overflow-x: hidden;
    overflow: overlay;
    font-size: 1.6rem;

  };

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${({ theme }) => `${theme.font.Roboto}, sans-serif`};
  };

  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.6rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  };

  ul,
  ol {
    font-family: ${({ theme }) => `${theme.font.Poppins}, sans-serif`};
    font-weight: 400;
    list-style: none;
  };

  a {
    text-decoration: none;
    color: inherit;
  };
`;
