import React, { useState, useContext } from "react";
import context from "../stores";
import { observer } from "mobx-react";
import { Upload, Modal, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em;
`;
const UploadResultHeader = styled.div`
  font-size: 1.5em;
  margin: 2em;
  padding: 0 2em;
  text-align: center;
  border: 1px solid;
  border-radius: 10px;
`;
const UploadResult = styled.div`
  border: 4px groove;
  border-top: none;
  border-radius: 1em;
  padding: 1em 3em;
`;
const UploadResultLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
  padding: 0 1em;
`;
const Copy = styled.button`
  border-style: solid;
  background: none;
  &.active {
    border-style: dashed;
  }
  &:active {
    color: red;
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
      {fileList.length == 0 ? null : (
        <>
          <UploadResultHeader>上传结果</UploadResultHeader>
          <UploadResult>
            {fileList.map((file) => (
              <UploadResultLine>
                <a href={file.url} target="_blank">
                  {file.name}
                </a>
                <Copy
                  onClick={(e) => {
                    navigator.clipboard.writeText(file.url);
                    setCopyText((copyText) => ({
                      ...copyText,
                      [file.uid]: "(链接已复制)",
                    }));
                  }}
                  className={
                    copyText[file.uid] == "(链接已复制)" ? "active" : ""
                  }
                >
                  {copyText[file.uid]}
                </Copy>
              </UploadResultLine>
            ))}
          </UploadResult>
        </>
      )}
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
