import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import context from "../stores/index";
import { AbsoluteTips, FlexWrapper } from "../components/Styled";

const Component = () => {
  const { AuthStore } = useContext(context);
  let navigate = useNavigate();
  const onFinish = (values) => {
    AuthStore.setPassword(values.password);
    AuthStore.setUsername(values.username);
    AuthStore.login()
      .then(() => {
        message.success("登录成功,跳转首页");
      })
      .catch((err) => {
        message.error("登录失败");
        console.log("登录失败", err);
      });
    navigate("/");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main>
      <FlexWrapper>
        <AbsoluteTips>登录页面</AbsoluteTips>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </FlexWrapper>
    </main>
  );
};

export default Component;
