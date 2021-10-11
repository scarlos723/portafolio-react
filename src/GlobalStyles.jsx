
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html{
    box-sizing:border-box;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:white;
  }

  *, *:after, *:before{
    box-sizing: inherit;
  }

  body{
    background-color: #0A0F13;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none; //evita que nuestra app haga rebotes cuando usamos scroll
  }
`
