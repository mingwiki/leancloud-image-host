import React from "react";
import { FooterWrapper, FooterLink } from "./Styled";

function Component() {
  return (
    <FooterWrapper>
      <FooterLink to="//github.com/mingwiki/image-host-demo">
        {document.title}
      </FooterLink>
      &nbsp;&copy;&nbsp;{new Date().getUTCFullYear()}
    </FooterWrapper>
  );
}

export default Component;
