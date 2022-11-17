import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Nunito Sans', sans-serif;
  }
  
  button {
    cursor: pointer;
    border: none;
  }

  :root {
    --grey-1: #5e5e5e;
    --grey-2: #363636;
    --blue: #1E90FF;
    --black-1: #00000;
    --black-2: rgba(0,0,0,.1);
  } 
`;