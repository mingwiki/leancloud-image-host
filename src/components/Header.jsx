import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
import { Button } from "antd";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 2rem 2rem;
  position: fixed;
  top: 0;
  left: 5vw;
  right: 5vw;
`;
const Logo = styled.img`
  width: 4em;
  height: 2em;
  margin-left: 10vw;
  margin-right: auto;
`;
const TheNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-left: 1em;
  &.active {
    border-bottom: 0.1em solid;
  }
`;
const Toggle = styled.img`
  width: 4em;
  height: 2em;
  margin-left: auto;
  margin-right: 10vw;
`;
const StyledButton = styled(Button)`
  margin-left: 2em;
`;
function Component(props) {
  const [isLogin, login] = useState(false);
  return (
    <Wrapper>
      <Logo
        src={logo}
        alt="logo"
        onClick={() => (window.location.href = "/")}
      />
      <nav>
        <TheNavLink to="/">首页</TheNavLink>
        <TheNavLink to="upload">上传</TheNavLink>
        <TheNavLink to="history">历史</TheNavLink>
        <TheNavLink to="about">关于</TheNavLink>
      </nav>
      {isLogin ? (
        <>
          fuming
          <StyledButton type="dashed" onClick={() => login(false)}>
            <Link to="logout">注销</Link>
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton type="dashed" onClick={() => login(true)}>
            <Link to="login">登录</Link>
          </StyledButton>
          <StyledButton type="dashed">
            <Link to="register">注册</Link>
          </StyledButton>
        </>
      )}
      <Toggle src={logo2} onClick={() => props.toggle()} />
    </Wrapper>
  );
}

export default Component;
