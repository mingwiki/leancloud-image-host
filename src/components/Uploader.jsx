import React, { useState, useContext } from "react";
import context from "../stores";
import { observer } from "mobx-react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em;
`;
const Copy = styled.button`
  margin-left: 1em;
  &:active {
    background-color: red;
  }
`;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Component = observer(() => {
  const { ImageStore, UserStore } = useContext(context);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFilelist] = useState([]);
  const [copyText, setCopyText] = useState({});

  let onCancel = () => setPreviewVisible(false);
  let onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  let onRemove = (file) => {
    setFilelist(fileList.filter((v) => v != file));
  };

  let customRequest = ({ file }) => {
    ImageStore.setFile(file);
    ImageStore.setName(file.name);
    if (!UserStore.currentUser) {
      message.error("请先登录再上传");
      return;
    }
    ImageStore.upload().then(
      (img) => {
        setFilelist((fileList) => [
          ...fileList,
          {
            uid: file.uid,
            name: file.name,
            status: "done",
            url: img.attributes.url.attributes.url,
          },
        ]);
        console.log("文件上传成功");
      },
      (err) => {
        setFilelist((fileList) => [
          ...fileList,
          {
            uid: file.uid,
            name: file.name,
            status: "error",
          },
        ]);
        console.log("文件上传失败", err);
      }
    );

    if (!copyText[file.uid]) {
      setCopyText((copyText) => ({
        ...copyText,
        [file.uid]: "点击复制链接",
      }));
    }
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <Wrapper>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={onPreview}
        onRemove={onRemove}
        customRequest={customRequest}
        multiple={true}
      >
        {uploadButton}
      </Upload>
      {fileList.length == 0 ? null : <h2>上传结果</h2>}
      {fileList.length == 0
        ? null
        : fileList.map((file) => (
            <>
              <div>
                <a href={file.url} target="_blank">
                  {file.name}
                </a>
                &nbsp;&nbsp;
                <Copy
                  onClick={() => {
                    navigator.clipboard.writeText(file.url);
                    setCopyText((copyText) => ({
                      ...copyText,
                      [file.uid]: "已复制",
                    }));
                  }}
                >
                  {copyText[file.uid]}
                </Copy>
              </div>
            </>
          ))}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={onCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </Wrapper>
  );
});

export default Component;
