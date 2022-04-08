import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  box-shadow: inherit;
  border-radius: 8px 8px 0 0;
  text-align: center;
  padding: 10px 0;
`;
const TheLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
function Component() {
  return (
    <Wrapper>
      <TheLink to="//github.com/mingwiki/image-host-demo">
        Image Host Demo
      </TheLink>
      &nbsp;&copy;&nbsp;2022
    </Wrapper>
  );
}

export default Component;
