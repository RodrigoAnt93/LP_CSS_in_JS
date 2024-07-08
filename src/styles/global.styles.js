import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
  }

`
