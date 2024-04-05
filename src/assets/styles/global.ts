import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  button, input, textarea {
    outline: none;
  }

  a, button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    width: 100%;
    max-width: 100%;
    padding: 0 80px;
  }
`;
