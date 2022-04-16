import React, { memo } from "react";
import { Form, Input, Button, Breadcrumb, message } from "antd";

import { CourseCreateWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { gradeRule, courseRule, chapterRule, konwledgeRule } from "./rules";
import { createCourse } from "@/services/course";

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
  const success = () => {
    message.success("添加成功");
  };
  const error = () => {
    message.error("添加失败，已有数据");
  };
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    createCourse(value).then((res) => {
      if (res === "OK") {
        success();
        onRest()
      } else {
        error();
      }
    });
  };
  const onRest = () => {
    form.resetFields();
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
        <Form form={form} layout="horizontal" {...formItemLayout} onFinish={handleSubmit}>
          <Form.Item label="年级" name="Cgrade" rules={gradeRule}>
            <Input placeholder="年级" />
          </Form.Item>
          <Form.Item label="科目" name="Ccourse" rules={courseRule}>
            <Input placeholder="科目" />
          </Form.Item>
          <Form.Item label="章节" name="Cchapter" rules={chapterRule}>
            <Input placeholder="章节" />
          </Form.Item>
          <Form.Item label="知识点" name="Cknowledge" rules={konwledgeRule}>
            <Input placeholder="知识点" />
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
    </CourseCreateWrapper>
  );
});

export default CourseCreate;
