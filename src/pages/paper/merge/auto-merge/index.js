import React, { memo, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Form,
  Button,
  Breadcrumb,
  InputNumber,
  Select,
  Slider,
  Modal
} from "antd";
import { AutoMergeWrapper } from "./style";
import {
  getGrade,
  getCourse,
  getChapter,
  getKnowledge,
} from "@/services/paper";
import { getTask } from "@/services/task";

const AutoMerge = memo(() => {
  const { Option } = Select;
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

  const [grade, setGrade] = useState([]);
  const [course, setCourse] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [knowledge, setKnowledge] = useState([]);
  const [paperMessage, setPaperMessage] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleSubmit = (value) => {
    console.log(value);
    getTask(value).then(res => setPaperMessage([...res]));
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  }
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
        <Form layout="horizontal" {...formItemLayout} onFinish={handleSubmit}>
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

          <Form.Item label="单选题数量">
            <Form.Item name="radioNum" noStyle>
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="单选题难度" name="radioDifficulty">
            <Slider defaultValue={10} min={0} max={5} />
          </Form.Item>

          <Form.Item label="多选题数量">
            <Form.Item name="multiNum" noStyle>
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="多选题难度" name="multiDifficulty">
            <Slider defaultValue={10} min={0} max={5} />
          </Form.Item>

          <Form.Item label="判断题数量">
            <Form.Item name="judgeNum" noStyle>
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="判断题难度" name="judgeDifficulty">
            <Slider defaultValue={10} min={0} max={5} />
          </Form.Item>

          <Form.Item label="填空题数量">
            <Form.Item name="comNum" noStyle>
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="填空题难度" name="comDifficulty">
            <Slider defaultValue={10} min={0} max={5} />
          </Form.Item>

          <Form.Item label="解答题数量">
            <Form.Item name="simpleNum" noStyle>
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Form.Item>
          <Form.Item label="解答题难度" name="simpleDifficulty">
            <Slider defaultValue={10} min={0} max={5} />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button type="primary" className="btn" htmlType="submit">
              自动组卷
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal title="试卷信息" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
    </AutoMergeWrapper>
  );
});

export default AutoMerge;
