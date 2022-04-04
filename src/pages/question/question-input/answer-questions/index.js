import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";

import BaseForm from "@/components/base-form";
import { AnswerQuestionsWrapper } from "./style";

const AnswerQuestions = memo(() => {
  return (
    <AnswerQuestionsWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/answerquestions">解答题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <BaseForm title="解答题录入" />
      </div>
    </AnswerQuestionsWrapper>
  );
});

export default AnswerQuestions;
