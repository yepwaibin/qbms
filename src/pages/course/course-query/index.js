import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Table,
  Space,
  Tag,
  Modal,
  Breadcrumb,
  message,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { getCourseList, removeCourse, searchCourse } from "@/services/course";
import { CourseQueryWrapper } from "./style";
import { CgradeRule, CcourseRule, CchapterRule, CknowledgeRule } from "./rules";

const CourseQuery = () => {
  const usersColumns = [
    {
      title: "年级",
      dataIndex: "Cgrade",
      key: "Cgrade",
    },
    {
      title: "科目",
      dataIndex: "Ccourse",
      key: "Ccourse",
    },
    {
      title: "章节",
      dataIndex: "Cchapter",
      key: "Cchapter",
    },
    {
      title: "知识点",
      key: "Cknowledge",
      render: (text, record) => {
        return <Tag color="green">{record.Cknowledge}</Tag>;
      },
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <button onClick={() => showModalModify(record.Cid)}>修改</button>
            <button onClick={() => handleDelete(record.Cid)}>删除</button>
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
  const success = () => {
    message.success("删除成功");
  };
  const [courseData, setCourseData] = useState([]);
  const [course, setCourse] = useState([]);
  const [id, setId] = useState();
  const [form] = Form.useForm();
  const [form2] = Form.useForm();
  const { confirm } = Modal;
  useEffect(() => {
    getCourseList().then((res) => {
      setCourseData([...res]);
    });
  }, []);
  const [isModifyVisible, setIsModifyVisible] = useState(false);

  const showModalModify = (key) => {
    setId(key);
    setIsModifyVisible(true);
  };

  const handleModifyOk = () => {
    form2.submit();
    setIsModifyVisible(false);
  };
  const submitModify = (value) => {
    console.log(value);
  };

  const handleModifyCancel = () => {
    setIsModifyVisible(false);
  };

  const handleDelete = (key) => {
    confirm({
      title: "你想删除这个科目信息吗",
      icon: <ExclamationCircleOutlined />,
      okText: "确认",
      cancelText: "取消",
      onOk() {
        removeCourse(key).then();
        success();
      },
      onCancel() {},
    });
  };

  const handleSearch = (value) => {
    searchCourse(value).then(res => {
      setCourse([...res])
    })
  }
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
        <Form layout="inline" form={form} onFinish={handleSearch}>
          <Form.Item label="年级" name="Cgrade">
            <Input placeholder="年级" />
          </Form.Item>
          <Form.Item label="科目" name="Ccourse">
            <Input placeholder="科目" />
          </Form.Item>
          <Form.Item label="章节" name="Cchapter">
            <Input placeholder="章节" />
          </Form.Item>
          <Form.Item label="知识点" name="Cknowledge">
            <Input placeholder="知识点" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="content">
        <Table dataSource={course.length === 0 ? courseData : course} columns={usersColumns}></Table>
      </div>

      <Modal
        title="修改科目"
        visible={isModifyVisible}
        okText="修改课程"
        cancelText="取消修改"
        onOk={handleModifyOk}
        onCancel={handleModifyCancel}
      >
        <Form
          layout="horizontal"
          form={form2}
          {...formItemLayout}
          onFinish={submitModify}
        >
          <Form.Item label="年级" name="Cgrade" rules={CgradeRule}>
            <Input placeholder="年级" />
          </Form.Item>
          <Form.Item label="科目" name="Ccourse" rules={CcourseRule}>
            <Input placeholder="科目" />
          </Form.Item>
          <Form.Item label="章节" name="Cchapter" rules={CchapterRule}>
            <Input placeholder="章节" />
          </Form.Item>
          <Form.Item label="知识点" name="Cknowledge" rules={CknowledgeRule}>
            <Input placeholder="知识点" />
          </Form.Item>
        </Form>
      </Modal>
    </CourseQueryWrapper>
  );
};

export default CourseQuery;
