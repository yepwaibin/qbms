import React, { useState } from "react";
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
} from "antd";
import { courseData } from "@/common/course-data.js";

import { CourseQueryWrapper } from "./style";

const CourseQuery = () => {
  const usersColumns = [
    {
      title: "年级",
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: "科目",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "章节",
      dataIndex: "chapter",
      key: "chapter",
    },
    {
      title: "知识点",
      key: "point",
      render: ({ points }) => {
        return (
          <>
            {points.map((item) => {
              return (
                <Tag color="blue" key={item}>
                  {item}
                </Tag>
              );
            })}
          </>
        );
      },
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

  const [form] = Form.useForm();
  return (
    <CourseQueryWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/course/create">课程查询</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="header">
        <Form layout="inline" form={form}>
          <Form.Item label="年级">
            <Input placeholder="查询的年级" />
          </Form.Item>
          <Form.Item label="科目">
            <Input placeholder="查询的科目" />
          </Form.Item>
          <Form.Item label="章节">
            <Input placeholder="查询的章节" />
          </Form.Item>
          <Form.Item label="知识点">
            <Input placeholder="查询的知识点" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">查询</Button>
          </Form.Item>
        </Form>
      </div>
      <div className="content">
        <Table dataSource={courseData} columns={usersColumns}></Table>
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
    </CourseQueryWrapper>
  );
};

export default CourseQuery;
