import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


* {
margin:0;
padding: 0;
box-sizing: border-box;
background: ${props => props.theme['gray-700']};
-webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
font-family: "Roboto", sans-serif;
}

`;