import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import styled from "styled-components";
import context from "../stores/index";

const Title = styled.div`
  position: absolute;
  font-size: 2em;
  top: 5em;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
      <Wrapper>
        <Title>登录页面</Title>
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
      </Wrapper>
    </main>
  );
};

export default Component;
