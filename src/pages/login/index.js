import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { LoginWrapper, PanelWrappear } from "./style";
import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginUser } from "../../services/users";

const Login = memo(() => {
  const history = useHistory()
  const handleLogin = (value) => {
    const { Uname, Upassword } = value;
    const data = {
      Uname,
      Upassword,
    };
    const success = () => {
      message.success("登录成功");
    };
    const error = () => {
      message.error('登录失败');
    };
    loginUser(data).then((res) => {
      if (res.token) {
        success();
        sessionStorage.setItem("token", res.token);
        history.push('/home')
      } else {
        error()
      }
    });
  };
  return (
    <LoginWrapper>
      <PanelWrappear>
        <h2>题库管理系统登录界面</h2>
        <Form className="form" onFinish={handleLogin}>
          <Form.Item
            name="Uname"
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
            name="Upassword"
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
            登录
              {/* <NavLink to="/home">登录</NavLink> */}
            </Button>
          </Form.Item>
        </Form>
      </PanelWrappear>
    </LoginWrapper>
  );
});

export default Login;
