import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../logo.svg'
import logo2 from '../logo2.svg'
import context from '../stores/index'
import { observer } from 'mobx-react'
import { HeaderWrapper, Logo, HeaderNav, HeaderNavLink, FlexButton } from './Styled'
// import { Button } from 'antd'

const Component = observer((props) => {
  const { AuthStore, UserStore } = useContext(context)
  let navigate = useNavigate()
  const HandleLogout = () => {
    AuthStore.logout()
  }
  const HandleLogin = () => {
    navigate('/login')
  }
  const HandleRegister = () => {
    navigate('/register')
  }
  React.useEffect(() => {
    UserStore.getCurrentUser()
  })
  return (
    <HeaderWrapper>
      <HeaderNav>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => (window.location.href = '/')}
        />
        <HeaderNavLink to="/">首页</HeaderNavLink>
        <HeaderNavLink to="history">历史</HeaderNavLink>
        <HeaderNavLink to="about">关于</HeaderNavLink>
      </HeaderNav>
      <FlexButton>
        {UserStore.currentUser ? (
          <>
            {UserStore.currentUser.attributes.username}
            <span type="dashed" onClick={HandleLogout}>
              <Link to="/">注销</Link>
            </span>
          </>
        ) : (
          <>
            <span type="dashed" onClick={HandleLogin}>
              <Link to="login">登录</Link>
            </span>
            <span type="dashed" onClick={HandleRegister}>
              <Link to="register">注册</Link>
            </span>
          </>
        )}
        <Logo src={logo2} onClick={() => props.toggle()} />
      </FlexButton>
    </HeaderWrapper>
  )
})

export default Component
