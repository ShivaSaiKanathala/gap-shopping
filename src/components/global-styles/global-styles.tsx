import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "typeface-roboto";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
    font-size: 14px;
    background-color: #f5f5f5;
    color: #404040;
  }
`;

export default GlobalStyles;
