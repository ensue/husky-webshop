

import {createGlobalStyle} from "styled-components"
export const GlobalStyle = createGlobalStyle`

body {
    margin: 0;
    padding: 20px 40px;
    font-family: "Oswald";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    margin: 0 auto;
    min-width: 900px;
    max-width: 85%;
  }
  
`
