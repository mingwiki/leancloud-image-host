import { createGlobalStyle } from 'styled-components'

export const light = {
  body: 'white',
  text: 'black',
}

export const dark = {
  body: 'black',
  text: 'white',
}

export const GlobalStyles = createGlobalStyle`
  header, main, footer { 
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
`

