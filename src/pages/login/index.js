import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { LoginWrapper, PanelWrappear } from "./style";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = memo(() => {
  return (
    <LoginWrapper>
      <PanelWrappear>
        <Form className="form">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入你的用户名",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入你的密码",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="密码"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="remenber">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住我</Checkbox>
              </Form.Item>

              <a href="/todo">忘记密码</a>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              <NavLink to="/home/user/search">登录</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </PanelWrappear>
    </LoginWrapper>
  );
});

export default Login;
