import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: rgba(242,239,234, 1);
    --primary: rgba(145,214,242, 1);
    --secondary: rgba(135, 148, 222, 1);
    --orangeLight: rgba(242,148,94, 1);
    --orangeDark: rgba(242,80,65, 1);

    --border-width: 1px
  }

  * {
    box-sizing: border-box
  }

  body {
    margin: 0 auto;
    padding: 10px;
    font-family: gesta, sans-serif;
    font-size: 112.5%;
    line-height: 1.5;
    background-color: var(--white);
    width: 375px;
    height: 667px;

  }
  
  input, textarea {
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    color: var(--primary);
    border: var(--border-width) solid var(--primary);
    padding: 10px;
    background-color: transparent;
    ::placeholder { 
      color: var(--primary);
      font-size: 15px;
    }
    &:focus {
      outline: none;
      border-color: transparent;
      -webkit-appearance: none;
      box-shadow: 0px 0px 4px 1px var(--primary);
      -webkit-box-shadow: 0px 0px 4px 1px var(--primary);
    }
    outline: none !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: gesta, sans-serif;
    font-weight: 700;
    color: var(--orangeDark);}

`
