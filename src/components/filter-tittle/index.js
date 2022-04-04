import React, { memo } from "react";
import { Form, Button, Select, Divider, Card, Table, Tag, Space } from "antd";
import { FilterTittleWrapper } from "./style";
import {
  highSchoolGrade,
  courseType,
  knowledgePoint,
  type,
} from "@/common/local-data";

const FilterTittle = memo(() => {
  const { Option } = Select;
  const columns = [
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
      title: "题型",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "分值",
      dataIndex: "point",
      key: "point",
    },
    {
      title: "难度",
      dataIndex: "hard",
      key: "hard",
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
      render: (text, record) => (
        <Space size="middle">
          <a href="/#">查看</a>
          <a href="/#">修改</a>
          <a href="/#">删除</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      grade: "高一",
      type: "单选题",
      course: "数学",
      point: 5,
      hard: "4星",
      tags: ["函数", "不等式"],
    },
    {
      key: "2",
      grade: "高一",
      type: "单选题",
      course: "数学",
      point: 5,
      hard: "3星",
      tags: ["语法"],
    },
    {
      key: "3",
      grade: "高二",
      type: "填空题",
      course: "数学",
      point: 5,
      hard: "5星",
      tags: ["三角函数", "概率"],
    },
  ];
  return (
    <FilterTittleWrapper>
      <Form className="filter">
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
        <Table columns={columns} dataSource={data} />
      </Card>
      ,
    </FilterTittleWrapper>
  );
});

export default FilterTittle;
