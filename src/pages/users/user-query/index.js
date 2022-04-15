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
  message,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

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

import { getUserList, updateUser, removeUser, searchUser } from "../../../services/users";

const UserQuery = () => {
  const [isModifyVisible, setIsModifyVisible] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState({});
  const [uid, setUid] = useState(0);
  const [selectUser, SetSelectUser] = useState([]);

  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const { Option } = Select;
  const { confirm } = Modal;
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
  });

  const success = () => {
    message.success("删除成功");
  };
  const success2 = () => {
    message.success("修改成功");
  };

  const showModalModify = (key) => {
    const temp = usersData.filter((value, index) => value.Uid === key);
    temp[0].Upassword = "";
    temp[0].Uid = key;
    setUid(Number(key));
    setUser(temp[0]);
    console.log(user, uid);
    setIsModifyVisible(true);
  };

  const handleModifyOk = () => {
    form2.submit();
    setIsModifyVisible(false);
  };
  const submitModify = (value) => {
    value.Uid = uid;
    console.log(value);
    updateUser(value).then((res) => {
      success2()
    });
    setUser({});
  };

  const handleModifyCancel = () => {
    form2.resetFields();
    setIsModifyVisible(false);
  };
  const handleDelete = (key) => {
    confirm({
      title: "你想删除这个用户吗",
      icon: <ExclamationCircleOutlined />,
      okText: "确认",
      cancelText: "取消",
      onOk() {
        const date = {
          Uid: key,
        };
        console.log(date);
        removeUser(date).then((res) => {
          console.log(res);
        });
        success();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleSearch = (value) => {
    searchUser(value).then(res => {
      SetSelectUser([...res]);
    }).then(() => {
      console.log(selectUser)
    })
    // form.resetFields();
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
          <Form.Item label="姓名" name="Urealname">
            <Input placeholder="查询的名字" />
          </Form.Item>
          <Form.Item label="用户名" name="Uname">
            <Input placeholder="查询的用户名" />
          </Form.Item>
          <Form.Item label="邮箱" name="Uemail">
            <Input placeholder="查询的邮箱" />
          </Form.Item>
          <Form.Item label="职位" name="Ujob">
            <Input placeholder="查询的职位" />
          </Form.Item>
          <Form.Item label="学校" name="Uschool">
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
        <Table dataSource={selectUser.length === 0 ? usersData : selectUser} columns={usersColumns}></Table>
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
          // initialValues={user}
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
            <Select allowClear>
              <Option value={0}>老师</Option>
              <Option value={1}>管理员</Option>
            </Select>
          </Form.Item>
          <Form.Item label="状态" name="Ustatus">
            <Switch />
          </Form.Item>
        </Form>
      </Modal>
    </UserQueryWrapper>
  );
};

export default UserQuery;
