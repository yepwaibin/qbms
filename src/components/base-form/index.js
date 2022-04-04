import React, { memo } from "react";
import { BaseFormWrapper } from "./style";

import {
  highSchoolGrade,
  courseType,
  knowledgePoint,
} from "@/common/local-data";

import { Form, Select, InputNumber, Button, Input, Slider } from "antd";

const BaseForm = memo((props) => {
  const { title, option } = props;
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const buttonWrapperCol = {
    span: 12,
    offset: 6,
  };

  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <BaseFormWrapper>
      <Form {...formItemLayout} onFinish={onFinish}>
        <Form.Item label={title}></Form.Item>
        <Form.Item name="grade" label="年级" hasFeedback>
          <Select placeholder="请选择年级">
            {highSchoolGrade.map((item, index) => {
              return (
                <Option key={item.grade} value={item.grade}>
                  {item.grade}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name="course" label="科目" hasFeedback>
          <Select placeholder="请选择科目">
            {courseType.map((item, index) => (
              <Option key={item.course} value={item.course}>
                {item.course}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="knowledgePoint" label="涉及知识点">
          <Select mode="multiple" placeholder="涉及知识点">
            {knowledgePoint.map((item) => (
              <Option key={item.point} value={item.point}>
                {item.point}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="题目分值">
          <Form.Item name="point" noStyle>
            <InputNumber min={1} max={100} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="难度" name="difficulty">
          <Slider defaultValue={10} min={0} max={5} />
        </Form.Item>

        <Form.Item label="题目" name="topic">
          <Input />
        </Form.Item>

        {/* <Form.List name="radioOptions" className="form-list">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  label={`选项${index + 1}`}
                  key={field.key}
                  className="radioOptions"
                >
                  <Radio className="radio">
                    <Input className="radioOptionsItem" />
                  </Radio>
                  <Button
                    onClick={() => remove(field.name)}
                    className="deleteButton"
                  >
                    删除
                  </Button>
                </Form.Item>
              ))}
              <Form.Item wrapperCol={buttonWrapperCol}>
                <Button onClick={() => add()} icon={<PlusOutlined />}>
                  增加选项
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List> */}

        {option}

        <Form.Item wrapperCol={buttonWrapperCol}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </BaseFormWrapper>
  );
});

export default BaseForm;
