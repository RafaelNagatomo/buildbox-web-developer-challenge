import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    font-size: 100%;
    box-sizing: border-box;
    border: 0 none;
    font-family: 'Roboto', sans-serif;
} 

.App {
    display: flex;
    flex-direction: column;
    align-items: center;
} 

html {
    font-size: 62.5%;
    background-color: #343434;
}

`;

export default GlobalStyle;
