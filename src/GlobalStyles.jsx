import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    scroll-behavior: smooth;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
  }
  
  main {
    flex-grow: 1;
  }
  
  img {
    vertical-align: middle;
    object-fit: cover;
  }
  
  ul,
  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }

  .container {
    width: 100% !important;
    max-width: 1300px !important;
    padding: 0 20px !important;
  }
`;
