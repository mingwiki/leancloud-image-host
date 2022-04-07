import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px 20px;
  background-color:white; 
  border-radius: 0 0 8px 8px;
  box-shadow: inherit;
`
const Logo = styled.img`
  height: 30px;
`
const TheNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-left: 5px;
  &.active{
    border-bottom: 1px solid black;
  }
`

function Component() {
  return (
    <Header>
     <Link to='/'><Logo src={logo} alt="logo"/></Link>
      <nav>
        <TheNavLink to='/' activeClassName='active'>首页</TheNavLink>
        <TheNavLink to='upload'>上传</TheNavLink>
        <TheNavLink to='history'>历史</TheNavLink>
        <TheNavLink to='about'>关于</TheNavLink>
      </nav>
    </Header>
  )
}

export default Component