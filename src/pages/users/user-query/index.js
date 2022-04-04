import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Table, Space, Tag, Modal, Switch, Breadcrumb } from "antd";

import { UserQueryWrapper } from "./style";
import { usersData } from "@/common/users-data.js";

const UserQuery = () => {
  const usersColumns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "用户名",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "状态",
      key: "status",
      render: () => <Tag color="green">启用</Tag>,
    },
    {
      title: "学校",
      dataIndex: "school",
      key: "school",
    },
    {
      title: "职位",
      key: "job",
      dataIndex: "job",
    },
    {
      title: "操作",
      key: "action",
      render: () => (
        <Space size="middle">
          <button onClick={showModalModify}>修改</button>
          <button onClick={showModalModify}>删除</button>
        </Space>
      ),
    },
  ];

  const [isModifyVisible, setIsModifyVisible] = useState(false);

  const showModalModify = () => {
    setIsModifyVisible(true);
  };

  const handleModifyOk = () => {
    setIsModifyVisible(false);
  };

  const handleModifyCancel = () => {
    setIsModifyVisible(false);
  };

  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const handleSubmit = (value) => {
    console.log(value);
  }

  const [form] = Form.useForm();
  return (
    <UserQueryWrapper>
    <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/user/create">用户查询</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="header">
        <Form layout="inline" form={form} onFinish={handleSubmit}>
          <Form.Item label="姓名">
            <Input placeholder="查询的名字" />
          </Form.Item>
          <Form.Item label="用户名">
            <Input placeholder="查询的用户名" />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input placeholder="查询的邮箱" />
          </Form.Item>
          <Form.Item label="职位">
            <Input placeholder="查询的职位" />
          </Form.Item>
          <Form.Item label="学校">
            <Input placeholder="要查询的学校" />
          </Form.Item>
          <Form.Item>
            <Button type="primary"  htmlType="submit">查询</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="content">
        <Table dataSource={usersData} columns={usersColumns}></Table>
      </div>
      <Modal
        title="编辑用户"
        visible={isModifyVisible}
        onOk={handleModifyOk}
        onCancel={handleModifyCancel}
      >
        <Form layout="horizontal" form={form} {...formItemLayout}>
          <Form.Item label="姓名">
            <Input placeholder="查询的名字" />
          </Form.Item>
          <Form.Item label="用户名">
            <Input placeholder="查询的用户名" />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input placeholder="查询的邮箱" />
          </Form.Item>
          <Form.Item label="职位">
            <Input placeholder="查询的职位" />
          </Form.Item>
          <Form.Item label="学校">
            <Input placeholder="要查询的学校" />
          </Form.Item>
          <Form.Item name="switch" label="状态" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </UserQueryWrapper>
  );
};

export default UserQuery;
