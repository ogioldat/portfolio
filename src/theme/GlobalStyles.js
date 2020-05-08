import {createGlobalStyle, withTheme} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Spartan', sans-serif;
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Spartan', sans-serif;
    color: rgb(45, 45, 45);
  }
  
  html {
    font-size: 62.5%;
  }
`;

export default withTheme(GlobalStyle);