import React, { useState, useContext } from "react";
import context from "../stores";
import { observer } from "mobx-react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const genUID = (() => {
  let uid = 0;
  return () => {
    return uid++;
  };
})();
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const Component = observer(() => {
  const { ImageStore } = useContext(context);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFilelist] = useState([]);

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
    ImageStore.upload().then(
      (img) => {
        setFilelist((fileList) => [
          ...fileList,
          {
            uid: "-" + genUID(),
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
            uid: "-" + genUID(),
            name: file.name,
            status: "error",
          },
        ]);
        console.log("文件上传失败", err);
      }
    );
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={onPreview}
        onRemove={onRemove}
        customRequest={customRequest}
        multiple={true}
      >
        {/* {console.log("fileList", fileList)} */}
        {uploadButton}
      </Upload>
      {fileList.length == 0 ? null : <h2>上传结果</h2>}
      {fileList.length == 0
        ? null
        : fileList.map((file) => (
            <>
              <div>
                <a href={file.url}>{file.name}</a>
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
    </>
  );
});

export default Component;
