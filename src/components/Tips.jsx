import React, { useContext } from "react";
import context from "../stores/index";
import { observer } from "mobx-react";
import styled from "styled-components";

const Tips = styled.div`
  padding: 1em 2em;
  font-size: 1.2rem;
  text-align: center;
`;
const RedTips = styled.div`
  color: red;
  padding: 1em 2em;
  font-size: 1.2rem;
  text-align: center;
`;
const Component = observer(({ children }) => {
  const { UserStore } = useContext(context);
  return UserStore.currentUser ? (
    <Tips>欢迎回来, {UserStore.currentUser.attributes.username}</Tips>
  ) : (
    <RedTips>请先登录再上传, {children}</RedTips>
  );
});
export default Component;
