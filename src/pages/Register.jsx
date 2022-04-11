import React, { useContext, useRef } from "react";
import { observer } from "mobx-react";
import context from "../stores/index";

const Component = observer(() => {
  const { AuthStore } = useContext(context);
  const bindChange = (e) => {
    // console.log(e.target.value);
    AuthStore.values.username = e.target.value;
  };
  return (
    <main>
      <h1>Register: {AuthStore.values.username}</h1>
      {/* <input onChange={bindChange} /> */}
    </main>
  );
});
export default Component;
