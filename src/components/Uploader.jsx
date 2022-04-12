import React, { useContext, useRef } from "react";
import context from "../stores";
import { observer } from "mobx-react";

const Component = observer(() => {
  const InputRef = useRef();
  const { ImageStore } = useContext(context);
  const bindChange = () => {
    for (let i = 0; i < InputRef.current.files.length; i++) {
      ImageStore.setFile(InputRef.current.files[i]);
      ImageStore.setName(InputRef.current.files[i].name);
    }
    ImageStore.upload().then(
      () => {
        console.log("上传成功");
      },
      (err) => {
        console.log("上传失败", err);
      }
    );
  };
  return (
    <div>
      <h1>文件上传</h1>
      <input
        type="file"
        multiple="multiple"
        onChange={bindChange}
        ref={InputRef}
      />
    </div>
  );
});

export default Component;
