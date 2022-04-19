import { createGlobalStyle } from 'styled-components'

export const light = {
  body: 'white',
  text: 'black',
  boxshadow: 'rgba(0, 0, 0, 0.5) 0px 0px 8px 4px',
}

export const dark = {
  body: 'black',
  text: 'white',
  boxshadow: 'rgba(255, 255, 255, 0.8) 0px 0px 8px 4px',
}

export const GlobalStyles = createGlobalStyle`
  main {
    flex: 1;
    /* margin: 5em 10vw 4em; */
    border-radius: 1rem;
    box-shadow: inherit;
    overflow: scroll;
  } 
  header, main, footer { 
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.boxshadow};
    transition: all 0.25s linear;
    min-width: 400px;
    width: 80vw;
  }
  header{
    font-size: 15px;
  }
  a{
    padding: 0;
  }
`

