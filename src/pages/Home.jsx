import React from "react";
import { observer } from "mobx-react";
import Uploader from "../components/Uploader";
import Tips from "../components/Tips";
const Component = observer(() => {
  return (
    <main>
      <Tips>用户未登录</Tips>
      <Uploader />
    </main>
  );
});

export default Component;
