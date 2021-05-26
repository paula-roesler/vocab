import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --white: rgba(242,239,234, 1);
    --primary: rgba(145,214,242, 1);
    --secondary: rgba(135, 148, 222, 1);
    --orangeLight: rgba(242,148,94, 1);
    --orangeDisabeld: #f58223;
    --orangeDark: #fb713a;
    --disabled: grey;

    --border-width: 2px
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
    margin-bottom: 10px;
    padding: 10px;
    background-color: transparent;
    color: var(--orangeDark);
    border: var(--border-width) solid var(--orangeDark);
    
    ::placeholder { 
      color: ${(props) =>
				props.disabled ? 'var(--orangeLight)' : 'var(--orangeDark)'};
      font-size: 15px;
    }
    &:focus {
      outline: none;
      border-color: transparent;
      -webkit-appearance: none;
      box-shadow: 0px 0px 4px 1px var(--orangeDark);
      -webkit-box-shadow: 0px 0px 4px 1px var(--orangeDark);
    }
    outline: none !important;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: gesta, sans-serif;
    font-weight: 700;
    color: var(--orangeDark);}

`
