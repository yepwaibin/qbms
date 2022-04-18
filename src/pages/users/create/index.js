import React, { memo } from "react";
import { Form, Input, Switch, Button, Breadcrumb, Select, message } from "antd";

import { register } from "../../../services/users";

import {
  nameRule,
  userRule,
  emailRule,
  passwordRule,
  jobnRule,
  schoolRule,
  permissionRule,
} from "./rules";
import { UserCreateWrapper } from "./style";
import { NavLink } from "react-router-dom";

const UserCreate = memo(() => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };
  const success = () => {
    message.success("创建成功");
  };
  const error = () => {
    message.error("创建失败");
  };
  const handlesubmit = (value) => {
    if (value.Ustatus) {
      value.Ustatus = 1;
    } else {
      value.Ustatus = 0;
    }
    register(value).then((res) => {
      if (res === "Created") {
        success();
        onRest();
      } else {
        error();
      }
    });
  };

  const onRest = () => {
    form.resetFields();
  };
  return (
    <UserCreateWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/user/create">用户创建</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <Form
          form={form}
          layout="horizontal"
          {...formItemLayout}
          onFinish={handlesubmit}
        >
          <Form.Item label="真实名字" name="Urealname" rules={nameRule}>
            <Input placeholder="真实名字" />
          </Form.Item>
          <Form.Item label="用户名" name="Uname" rules={userRule}>
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="Uemail" rules={emailRule}>
            <Input placeholder="邮箱" />
          </Form.Item>
          <Form.Item label="密码" name="Upassword" rules={passwordRule}>
            <Input placeholder="密码" />
          </Form.Item>
          <Form.Item label="职位" name="Ujob" rules={jobnRule}>
            <Input placeholder="职位" />
          </Form.Item>
          <Form.Item label="学校" name="Uschool" rules={schoolRule}>
            <Input placeholder="学校" />
          </Form.Item>
          <Form.Item label="权限" name="Urole" rules={permissionRule}>
            <Select placeholder="权限" allowClear>
              <Option value="0">老师</Option>
              <Option value="1">管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" name="Ustatus">
            <Switch />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" className="btn" htmlType="submit">
              创建
            </Button>
            <Button className="btn" htmlType="button" onClick={onRest}>
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserCreateWrapper>
  );
});

export default UserCreate;
