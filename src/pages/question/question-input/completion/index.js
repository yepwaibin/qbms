import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Breadcrumb,
  Form,
  Input,
  Select,
  Button,
  InputNumber,
  Slider,
} from "antd";

import { CompletionWrapper } from "./style";

import {
  getGrade,
  getCourse,
  getChapter,
  getKnowledge,
  createQuestion,
} from "@/services/paper";

const Completion = memo(() => {
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

  const [grade, setGrade] = useState([]);
  const [course, setCourse] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [knowledge, setKnowledge] = useState([]);

  useEffect(() => {
    getGrade().then((res) => {
      setGrade([...res]);
    });
    getCourse().then((res) => {
      setCourse([...res]);
    });
    getChapter().then((res) => {
      setChapter([...res]);
    });
    getKnowledge().then((res) => {
      setKnowledge([...res]);
    });
  }, []);

  const onFinish = (value) => {
    const data = {
      Tuse: 0,
      Tgrade: value.Tgrade,
      Tcourse: value.Tcourse,
      Ttype: 3,
      Tchapter: value.Tchapter,
      Tknowledge: [...value.Tknowledge].join(","),
      Tpoint: value.Tpoint,
      Tdifficulty: value.Tdifficulty,
      Tdesc: `
      ${value.Ttopic}`,
      Tanswer: value.Tanswer,
    };
    console.log(data);
    createQuestion(data).then((res) => {
      console.log(res);
    });
  };
  return (
    <CompletionWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/completion">填空题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Form {...formItemLayout} onFinish={onFinish}>
        <Form.Item label="单选题"></Form.Item>
        <Form.Item name="Tgrade" label="年级" hasFeedback>
          <Select placeholder="请选择年级">
            {grade.map((item, index) => {
              return (
                <Option key={index} value={item.Cgrade}>
                  {item.Cgrade}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item name="Tcourse" label="科目" hasFeedback>
          <Select placeholder="请选择科目">
            {course.map((item, index) => (
              <Option key={item.Ccourse} value={item.Ccourse}>
                {item.Ccourse}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="Tchapter" label="章节" hasFeedback>
          <Select placeholder="请选择所属章节">
            {chapter.map((item, index) => (
              <Option key={item.Cchapter} value={item.Cchapter}>
                {item.Cchapter}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="Tknowledge" label="涉及知识点">
          <Select mode="multiple" placeholder="涉及知识点">
            {knowledge.map((item) => (
              <Option key={item.Cknowledge} value={item.Cknowledge}>
                {item.Cknowledge}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="题目分值">
          <Form.Item name="Tpoint" noStyle>
            <InputNumber min={1} max={100} />
          </Form.Item>
        </Form.Item>

        <Form.Item label="难度" name="Tdifficulty">
          <Slider defaultValue={10} min={0} max={5} />
        </Form.Item>

        <Form.Item label="题目" name="Ttopic">
          <Input />
        </Form.Item>

        <Form.Item label="答案" name="Tanswer">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={buttonWrapperCol}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </CompletionWrapper>
  );
});

export default Completion;
