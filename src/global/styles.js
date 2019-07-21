// External Modules
import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  button {
    outline: none;
    border: none;
  }

  .add-border {
    border-radius: 4px;
  }

  .add-bigger-fonts {
    font-size: 16px;
    font-size: 1.6rem;
    font-weight: 400;
    border-radius: 4px;
  }
`;

export const colors = {
  blue: "#039BE5",
  blue_dark: "#0288d1",
  gray_light: "#F1F3F4",
  gray_border: "#DADCE0",
  gray: "#777777",
  gray_dark: "#5F6368",
  gray_black: "#202124"
}

export const zIndices = {
  level1: 1, // App
  level2: 2, // Backdrop,
  level3: 3, // Modal, Appbar
}

export const material = {
  shadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)"
}

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  background-color: ${colors.gray_light};
  color: ${colors.gray};
  outline: none;
  border: none;

  :focus {
    background-color: white;
    box-shadow: ${material.shadow};
    color: ${colors.gray_black};
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 400;
  outline: none;
  border: none;
  padding: 8px;
  color: white;
  background-color: ${colors.blue};
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: ${colors.blue_dark};
  }
`;