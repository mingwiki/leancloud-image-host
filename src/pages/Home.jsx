import React, { useContext } from "react";
import context from "../stores";
import { observer } from "mobx-react";
import Uploader from "../components/Uploader";
const Component = observer(() => {
  const { UserStore } = useContext(context);
  return (
    <main>
      <h1 style={{textAlign: "center"}}>
        {UserStore.currentUser ? (
          <>欢迎登录， {UserStore.currentUser.attributes.username}</>
        ) : (
          "用户未登录"
        )}
      </h1>
      <Uploader />
    </main>
  );
});

export default Component;
