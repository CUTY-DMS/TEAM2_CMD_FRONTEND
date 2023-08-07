import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    font-family: inter;
    text-decoration-line: none;
  } input, textarea {
    resize: none;
    outline: none;
  } a { 
    font-weight: bolder; 
  } select {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: 2px solid black;
  }
`;
