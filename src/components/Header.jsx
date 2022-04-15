import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import logo2 from "../logo2.svg";
import { Button } from "antd";
import context from "../stores/index";
import { observer } from "mobx-react";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 2rem 2rem;
  position: fixed;
  top: 0;
  left: 5vw;
  right: 5vw;
`;
const Logo = styled.img`
  width: 4em;
  height: 2em;
`;
const TheNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-right: 1em;
  &.active {
    border-bottom: 0.1em solid;
  }
`;
const StyledButton = styled(Button)`
  margin-left: 1em;
`;
const Component = observer((props) => {
  const { AuthStore, UserStore } = useContext(context);
  let navigate = useNavigate();
  const HandleLogout = () => {
    AuthStore.logout();
  };
  const HandleLogin = () => {
    navigate("/login");
  };
  const HandleRegister = () => {
    navigate("/register");
  };
  React.useEffect(() => {
    UserStore.getCurrentUser();
  });
  return (
    <Wrapper>
      <nav>
        <Logo
          src={logo}
          alt="logo"
          onClick={() => (window.location.href = "/")}
        />
        <TheNavLink to="/">首页</TheNavLink>
        <TheNavLink to="history">历史</TheNavLink>
        <TheNavLink to="about">关于</TheNavLink>
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
    </Wrapper>
  );
});

export default Component;
