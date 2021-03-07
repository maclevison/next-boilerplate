import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 7200px) {
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

body {
    // Define your font family
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`
export default GlobalStyles
