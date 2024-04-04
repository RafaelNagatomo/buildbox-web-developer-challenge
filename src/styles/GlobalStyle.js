import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    font-size: 100%;
    box-sizing: border-box;
    border: 0 none;
    /* background-color: #343434; */
} 

.App {
    display: flex;
    flex-direction: column;
    align-items: center;
} 



html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: "Ubuntu", sans-serif;

}

html {
    font-size: 62.5%;
    background-color: #343434;
}

`;

export default GlobalStyle;
