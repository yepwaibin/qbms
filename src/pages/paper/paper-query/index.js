import React, { memo, useState, useEffect } from "react";
import {
  Form,
  Button,
  Select,
  Divider,
  Card,
  Table,
  Tag,
  Space,
  Modal,
} from "antd";
import { PaperQueryWrapper } from "./style";

import {
  getGrade,
  getCourse,
  getChapter,
  getList,
  remove,
} from "@/services/paper";

import {
  paper
} from '@/common/course-data'

const PaperQuery = memo(() => {
  const { Option } = Select;
  const columns = [
    {
      title: "年级",
      dataIndex: "Tgrade",
      key: "Tgrade",
    },
    {
      title: "科目",
      dataIndex: "Tcourse",
      key: "Tcourse",
    },
    {
      title: "出卷人",
      dataIndex: "Tuser",
      key: "Tuser",
    },
    {
      title: "分值",
      dataIndex: "Tpoint",
      key: "Tpoint",
    },
    {
      title: "平均难度系数",
      dataIndex: "Tdifficulty",
      key: "Tdifficulty",
    },
    {
      title: "组卷时间",
      dataIndex: "Ttime",
      key: "Ttime",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <button onClick={() => showQuestion(record.number)}>查看</button>
            <button onClick={() => handleDelete(record.number)}>删除</button>
          </Space>
        );
      },
    },
  ];

  const [grade, setGrade] = useState([]);
  const [course, setCourse] = useState([]);
  const [chapter, setChapter] = useState([]);
  const [testList, setTestList] = useState([]);
  const [question, setQuestion] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [removeId, setRemoveId] = useState(0);

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
    getList().then((res) => {
      res.map((item, index) => {
        item.tags = item.Tknowledge.split(",");
      });
      setTestList([...res]);
    });
  }, [removeId]);
  useEffect(() => {
    let data = [
      {
        Tgrade: '高一',
        Tcourse: '数学',
        Tuser: '2',
        Tpoint: '100',
        Tdifficulty: '3',
        Ttime: '1',
      }
    ]
    setTestList([...data])
  }, [])
  const showQuestion = (key) => {
    const temp = testList.filter((item, index) => item.number === key);
    setQuestion(...temp);
    setIsModalVisible(true);
  };
  const showModalModify = (key) => {};
  const handleDelete = (key) => {
    setRemoveId(key);
    remove(key).then((res) => {
      console.log(res);
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <PaperQueryWrapper>
      <Form className="filter">
        <Form.Item name="Tgrade" label="年级" hasFeedback>
          <Select placeholder="请选择年级">
            {grade.map((item, index) => {
              return (
                <Option key={item.Cgrade} value={item.Cgrade}>
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
          <Select placeholder="请选择章节">
            {chapter.map((item) => {
              return (
                <Option key={item.Cchapter} value={item.Cchapter}>
                  {item.Cchapter}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>

      <Divider orientation="left">试卷信息</Divider>

      <Card className="card">
        <Table columns={columns} dataSource={paper} />
      </Card>

      <Modal
        title="试题信息"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: question.Tdesc && question.Tdesc.replace(/\n/g, "<br/>"),
          }}
        ></div>
      </Modal>
    </PaperQueryWrapper>
  );
});

export default PaperQuery;
