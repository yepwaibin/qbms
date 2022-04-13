import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Table,
  Space,
  Tag,
  Modal,
  Switch,
  Breadcrumb,
  Select,
} from "antd";

import {
  nameRule,
  userRule,
  emailRule,
  passwordRule,
  jobnRule,
  schoolRule,
  permissionRule,
} from "./rules";

import { UserQueryWrapper } from "./style";

import { getUserList, modifyUser } from "../../../services/users";

const UserQuery = () => {
  const [isModifyVisible, setIsModifyVisible] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState({});

  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const { Option } = Select;
  const usersColumns = [
    {
      title: "姓名",
      dataIndex: "Urealname",
      key: "Urealname",
    },
    {
      title: "用户名",
      dataIndex: "Uname",
      key: "Uname",
    },
    {
      title: "邮箱",
      dataIndex: "Uemail",
      key: "Uemail",
    },
    {
      title: "状态",
      key: "Ustatus",
      render: (text, record) => {
        if (record.Ustatus) {
          return <Tag color="green">启用</Tag>;
        } else {
          return <Tag color="red">禁用</Tag>;
        }
      },
    },
    {
      title: "学校",
      dataIndex: "Uschool",
      key: "Uschool",
    },
    {
      title: "职位",
      key: "Ujob",
      dataIndex: "Ujob",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <button onClick={() => showModalModify(record.Uid)}>修改</button>
            <button onClick={() => handleDelete(record.Uid)}>删除</button>
          </Space>
        );
      },
    },
  ];
  const formItemLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };

  useEffect(() => {
    getUserList().then((res) => {
      setUsersData([...res]);
    });
  }, []);
  

  const showModalModify = (key) => {
    const temp = usersData.filter((value, index) => value.Uid === key);
    temp[0].Upassword = "";
    temp[0].Uid = key;
    setUser(temp[0]);
    setIsModifyVisible(true);
  };

  const handleModifyOk = () => {
    form2.submit();
    setIsModifyVisible(false);
  };
  const submitModify = (value) => {
    console.log(value);
    modifyUser(value).then(res => {
      console.log(res)
    })
    setUser({});
  };

  const handleModifyCancel = () => {
    form2.resetFields();
    setIsModifyVisible(false);
  };
  const handleDelete = (key) => {
    console.log(key);
  };

  const handleSearch = (value) => {
    console.log(value);
    form.resetFields();
  };

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
        <Form layout="inline" form={form} onFinish={handleSearch}>
          <Form.Item label="姓名" name="name">
            <Input placeholder="查询的名字" />
          </Form.Item>
          <Form.Item label="用户名" name="user">
            <Input placeholder="查询的用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input placeholder="查询的邮箱" />
          </Form.Item>
          <Form.Item label="职位" name="job">
            <Input placeholder="查询的职位" />
          </Form.Item>
          <Form.Item label="学校" name="school">
            <Input placeholder="要查询的学校" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="content">
        <Table dataSource={usersData} columns={usersColumns}></Table>
      </div>

      <Modal
        title="编辑用户"
        visible={isModifyVisible}
        okText="修改用户"
        cancelText="取消修改"
        onOk={handleModifyOk}
        onCancel={handleModifyCancel}
      >
        <Form
          layout="horizontal"
          form={form2}
          {...formItemLayout}
          onFinish={submitModify}
          initialValues={user}
        >
          <Form.Item label="真实名字" name="Urealname" rules={nameRule}>
            <Input />
          </Form.Item>
          <Form.Item label="用户名" name="Uname" rules={userRule}>
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name="Uemail" rules={emailRule}>
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="Upassword" rules={passwordRule}>
            <Input />
          </Form.Item>
          <Form.Item label="职位" name="Ujob" rules={jobnRule}>
            <Input />
          </Form.Item>
          <Form.Item label="学校" name="Uschool" rules={schoolRule}>
            <Input />
          </Form.Item>
          <Form.Item label="权限" name="Urole" rules={permissionRule}>
            <Select defaultValue={user.Urole} allowClear>
              <Option value={0}>老师</Option>
              <Option value={1}>管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" name="Ustatus">
            <Switch checked={user.Ustatus} />
          </Form.Item>
        </Form>
      </Modal>
    </UserQueryWrapper>
  );
};

export default UserQuery;
