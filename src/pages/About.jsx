import React from "react";
import { Tips } from "../components/Styled";
import context from "../stores";
import { observer } from "mobx-react";
const Component = observer(() => {
  const { UserStore } = React.useContext(context);
  React.useEffect(() => UserStore.getTotal());
  return (
    <main>
      <Tips>关于此账户</Tips>
      {UserStore.currentUser ? (
        <ul>
          <li>用户名：{UserStore.currentUser.attributes.username}</li>
          <li>
            创建日期：{UserStore.currentUser.createdAt.toLocaleString("zh-CN")}
          </li>
          <li>已上传图片：{UserStore.imgNumber} 张</li>
        </ul>
      ) : null}
    </main>
  );
});

export default Component;
