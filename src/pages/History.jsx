import React from "react";
import List from "../components/List";
import { Tips } from "../components/Styled";
import styled from "styled-components";
const HistoryWrapper = styled.main`
  padding: 0 2em 1em;
  display: flex;
  flex-direction: column;
`;
function Component() {
  return (
    <HistoryWrapper>
      <Tips>文件上传历史记录查询</Tips>
      <List />
    </HistoryWrapper>
  );
}

export default Component;
