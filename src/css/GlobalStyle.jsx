import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: inter;
    text-decoration-line: none;
  }
  a {
    font-weight: bolder;
  }
  input, textarea {
    border: none;
    resize: none;
    outline: none;
  }
  button {
    border: none;
  }
`;
