import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { RegisterWrapper, PanelWrappear } from "./style";
import { Form, Input, Button, message } from "antd";
import { register } from "../../services/users";

const Register = memo(() => {
  const [form] = Form.useForm();
  const success = () => {
    message.success("注册成功");
  };
  const error = () => {
    message.error('注册失败');
  };
  const registerUser = (value) => {
    // onRest();
    register(value).then((res) => {
      if (res === "Created") {
        success();
        onRest();
      } else {
        error()
      }
    });
  };

  const onRest = () => {
    form.resetFields();
  };

  return (
    <RegisterWrapper>
      <PanelWrappear>
        <h2 className="title">用户注册</h2>
        <Form className="form" form={form} onFinish={registerUser}>
          <Form.Item label="真实姓名" name="Urealname">
            <Input placeholder="真实姓名" />
          </Form.Item>
          <Form.Item label="用户名" name="Uname">
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="Uemail">
            <Input placeholder="邮箱" />
          </Form.Item>
          <Form.Item label="密码" name="Upassword">
            <Input.Password type="密码" placeholder="Password" />
          </Form.Item>
          <Form.Item label="职位" name="Ujob">
            <Input placeholder="职位" />
          </Form.Item>
          <Form.Item label="学校" name="Uschool">
            <Input placeholder="学校" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="btn" htmlType="submit">
              创建
            </Button>
            <Button className="btn" htmlType="button" type="primary">
              <NavLink to="/login">返回登录页</NavLink>
            </Button>
          </Form.Item>
        </Form>
      </PanelWrappear>
    </RegisterWrapper>
  );
});

export default Register;
