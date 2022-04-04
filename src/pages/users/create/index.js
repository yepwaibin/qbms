import React, { memo } from "react";
import { Form, Input, Switch, Button, Breadcrumb } from "antd";

import { UserCreateWrapper } from "./style";
import { NavLink } from "react-router-dom";

const UserCreate = memo(() => {
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
        <Form layout="horizontal" {...formItemLayout}>
          <Form.Item label="姓名">
            <Input placeholder="名字" />
          </Form.Item>
          <Form.Item label="用户名">
            <Input placeholder="用户名" />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input placeholder="邮箱" />
          </Form.Item>
          <Form.Item label="职位">
            <Input placeholder="职位" />
          </Form.Item>
          <Form.Item label="学校">
            <Input placeholder="学校" />
          </Form.Item>
          <Form.Item name="switch" label="状态" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" className="btn">
              创建
            </Button>
            <Button type="default" className="btn">
              重置
            </Button>
          </Form.Item>
        </Form>
      </div>
    </UserCreateWrapper>
  );
});

export default UserCreate;
