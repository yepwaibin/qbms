import React, { memo } from "react";
import { Form, Input, Button, Breadcrumb } from "antd";

import { CourseCreateWrapper } from "./style";
import { NavLink } from "react-router-dom";

const CourseCreate = memo(() => {
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
    <CourseCreateWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/course/create">课程创建</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <Form layout="horizontal" {...formItemLayout}>
          <Form.Item label="学校">
            <Input placeholder="学校" />
          </Form.Item>
          <Form.Item label="年级">
            <Input placeholder="年级" />
          </Form.Item>
          <Form.Item label="科目">
            <Input placeholder="科目" />
          </Form.Item>
          <Form.Item label="章节">
            <Input placeholder="章节" />
          </Form.Item>
          <Form.Item label="知识点">
            <Input placeholder="知识点" />
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
    </CourseCreateWrapper>
  );
});

export default CourseCreate;
