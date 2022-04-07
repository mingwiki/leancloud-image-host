import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Footer = styled.footer`
  background-color: white;
  box-shadow: inherit;
  border-radius: 8px 8px 0 0;
  text-align: center;
`
function Component() {
  return (
    <Footer>
      <Link to='//github.com/mingwiki/image-host-demo'>Image Host Demo</Link> 
      &nbsp;&copy;&nbsp;2022
    </Footer>
  )
}

export default Component