import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

export const menuTitle = [
  {
    title: "用户管理",
    icon: <MailOutlined />,
    child: [
      {
        title: "用户查询",
        link: "/home/user/search",
      },
      {
        title: "用户创建",
        link: "/home/user/create",
      },
    ],
  },
  {
    title: "课程管理",
    icon: <AppstoreOutlined />,
    child: [
      {
        title: "课程查询",
        link: "/home/course/search",
      },
      {
        title: "课程创建",
        link: "/home/course/create",
      },
    ],
  },
  {
    title: "试题管理",
    icon: <DesktopOutlined />,
    child: [
      {
        title: "试题录入",
        child: [
          {
            title: "单选题",
            link: "/home/question/radio",
          },
          {
            title: "不定项选择题",
            link: "/home/question/multiplechoice",
          },
          {
            title: "填空题",
            link: "/home/question/completion",
          },
          {
            title: "判断题",
            link: "/home/question/judge",
          },
          {
            title: "解答题",
            link: "/home/question/answerquestions",
          },
        ],
      },
      {
        title: "试题查询",
        link: "/home/question/search",
      },
    ],
  },
  {
    title: "试卷管理",
    icon: <PieChartOutlined />,
    child: [
      {
        title: "组卷",
        child: [
          {
            title: "自动组卷",
            link: "/home/paper/automerge",
          },
        ],
      },
      {
        title: "试卷查询",
        link: "/home/paper/search",
        icon: <PieChartOutlined />,
      },
    ],
  },
];

export const highSchoolGrade = [
  {
    grade: "小学一年级",
  },
  {
    grade: "小学二年级",
  },
  {
    grade: "小学三年级",
  },
  {
    grade: "小学四年级",
  },
  {
    grade: "小学五年级",
  },
  {
    grade: "小学六年级",
  },
  {
    grade: "初一",
  },
  {
    grade: "初二",
  },
  {
    grade: "初三",
  },
  {
    grade: "高一",
  },
  {
    grade: "高二",
  },
  {
    grade: "高三",
  },
];

export const courseType = [
  {
    course: "语文",
  },
  {
    course: "数学",
  },
  {
    course: "英语",
  },
  {
    course: "政治",
  },
  {
    course: "历史",
  },
  {
    course: "地理",
  },
  {
    course: "物理",
  },
  {
    course: "化学",
  },
  {
    course: "生物",
  },
];

export const knowledgePoint = [
  {
    point: "函数",
  },
  {
    point: "不等式",
  },
  {
    point: "解析几何",
  },
  {
    point: "概率",
  },
  {
    point: "三角函数",
  },
  {
    point: "数列",
  },
];

export const type = [
  {
    title: "单选题",
  },
  {
    title: "不定项选择题",
  },
  {
    title: "填空题",
  },
  {
    title: "判断题",
  },
  {
    title: "解答题",
  },
];
