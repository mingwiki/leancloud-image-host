import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  border-radius: 2rem 2rem 0 0;
  text-align: center;
  padding: 0.2rem 0;
  position: fixed;
  bottom: 0;
  left: 5vw;
  right: 5vw;
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
