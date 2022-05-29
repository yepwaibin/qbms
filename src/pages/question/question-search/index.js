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
import { FilterTittleWrapper } from "./style";
import { type } from "@/common/local-data";

import {
  getGrade,
  getCourse,
  getChapter,
  getList,
  remove,
  search
} from "@/services/paper";

const ExamSearch = memo(() => {
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
      title: "题型",
      dataIndex: "Ttype",
      key: "Ttype",
    },
    {
      title: "分值",
      dataIndex: "Tpoint",
      key: "Tpoint",
    },
    {
      title: "难度",
      dataIndex: "Tdifficulty",
      key: "Tdifficulty",
    },
    {
      title: "涉及知识点",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <button onClick={() => showQuestion(record.number)}>查看</button>
            <button onClick={() => showModalModify(record.number)}>修改</button>
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
  const [searchList, setSearchList] = useState([]);

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

  const handleSearch = (value) => {
    search(value).then(res => {
      res.map((item, index) => {
        item.tags = item.Tknowledge.split(",");
      });
      setSearchList([...res])
    })
  };
  return (
    <FilterTittleWrapper>
      <Form className="filter" onFinish={handleSearch}>
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

        <Form.Item name="type" label="题型" hasFeedback>
          <Select placeholder="请选择题型">
            {type.map((item, index) => {
              return (
                <Option key={item.title} value={item.title}>
                  {item.title}
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

      <Divider orientation="left">试题信息</Divider>

      <Card className="card">
        <Table dataSource={searchList.length === 0 ? testList : searchList} columns={columns}></Table>
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
    </FilterTittleWrapper>
  );
});

export default ExamSearch;
