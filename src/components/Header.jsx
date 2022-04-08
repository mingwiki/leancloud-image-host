import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 0 0 8px 8px;
  box-shadow: inherit;
`;
const Logo = styled.img`
  height: 30px;
`;
const TheNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  margin-left: 5px;
  &.active {
    border-bottom: 2px solid;
  }
`;
function Component() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <nav>
        <TheNavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          首页
        </TheNavLink>
        <TheNavLink
          to="upload"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          上传
        </TheNavLink>
        <TheNavLink
          to="history"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          历史
        </TheNavLink>
        <TheNavLink
          to="about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          关于
        </TheNavLink>
      </nav>
    </Wrapper>
  );
}

export default Component;
