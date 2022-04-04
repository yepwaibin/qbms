import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Breadcrumb } from "antd";
import { AutoMergeWrapper } from "./style";

const AutoMerge = memo(() => {
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
    <AutoMergeWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/paper/automerge">自动组卷</NavLink>
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
          <Form.Item label="题型数目">
            <Input placeholder="知识点" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" className="btn">
              自动组卷
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AutoMergeWrapper>
  );
});

export default AutoMerge;
