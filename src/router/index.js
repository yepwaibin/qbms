import React from "react";
import { Redirect } from "react-router-dom";

import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";

import UserCreate from "../pages/users/create";
import UserQuery from "../pages/users/user-query";

import CourseQuery from "../pages/course/course-query";
import CourseCreate from "../pages/course/course-create";

import QuestionSearch from "../pages/question/question-search";
import Radio from "../pages/question/question-input/radio";
import MultipleChoice from "../pages/question/question-input/multiple-choice";
import Completion from "../pages/question/question-input/completion";
import Judge from "../pages/question/question-input/judge";
import AnswerQuestions from "../pages/question/question-input/answer-questions";

import PaperQuery from "../pages/paper/paper-query";
import AutoMerge from "../pages/paper/merge/auto-merge";
import MaualMerge from "../pages/paper/merge/manual-merge";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/login" />,
  },
  {
    path: "/register",
    exact: true,
    component: Register,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    routes: [
      {
        path: "/home/user/search",
        component: UserQuery,
      },
      {
        path: "/home/user/create",
        component: UserCreate,
      },
      {
        path: "/home/course/search",
        component: CourseQuery,
      },
      {
        path: "/home/course/create",
        component: CourseCreate,
      },
      {
        path: "/home/question/search",
        component: QuestionSearch,
      },
      {
        path: "/home/question/radio",
        component: Radio,
      },
      {
        path: "/home/question/multiplechoice",
        component: MultipleChoice,
      },
      {
        path: "/home/question/completion",
        component: Completion,
      },
      {
        path: "/home/question/judge",
        component: Judge,
      },
      {
        path: "/home/question/answerquestions",
        component: AnswerQuestions,
      },
      {
        path: "/home/paper/search",
        component: PaperQuery,
      },
      {
        path: "/home/paper/automerge",
        component: AutoMerge,
      },
      {
        path: "/home/paper/manualmerge",
        component: MaualMerge,
      },
    ]
  },
];

export default routes;
