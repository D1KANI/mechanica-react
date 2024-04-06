import { createGlobalStyle } from "styled-components";
import { SFProDisplay } from "./fonts";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors["greyscale-1000"]};
  }

  button, input, textarea {
    outline: none;
    ${SFProDisplay.style}
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
