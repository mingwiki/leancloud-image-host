import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../logo.svg'
import logo2 from '../logo2.svg'
import context from '../stores/index'
import { observer } from 'mobx-react'
import { HeaderWrapper, Logo, HeaderNavLink, StyledButton } from './Styled'

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
      <nav>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => (window.location.href = '/')}
        />
        <HeaderNavLink to="/">首页</HeaderNavLink>
        <HeaderNavLink to="history">历史</HeaderNavLink>
        <HeaderNavLink to="about">关于</HeaderNavLink>
      </nav>
      <div>
        {UserStore.currentUser ? (
          <>
            {UserStore.currentUser.attributes.username}
            <StyledButton type="dashed" onClick={HandleLogout}>
              <Link to="/">注销</Link>
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton type="dashed" onClick={HandleLogin}>
              <Link to="login">登录</Link>
            </StyledButton>
            <StyledButton type="dashed" onClick={HandleRegister}>
              <Link to="register">注册</Link>
            </StyledButton>
          </>
        )}
        <Logo src={logo2} onClick={() => props.toggle()} />
      </div>
    </HeaderWrapper>
  )
})

export default Component
