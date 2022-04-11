import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";

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
const Button = styled.button`
  margin-left: 2em;
`;
function Component(props) {
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
      <Button>
        <Link to="login">登录</Link>
      </Button>
      <Button>
        <Link to="register">注册</Link>
      </Button>
      <Toggle src={logo2} onClick={() => props.toggle()} />
    </Wrapper>
  );
}

export default Component;
