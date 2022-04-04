import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import { MultipleChoiceWrapper } from "./style";
import BaseForm from "@/components/base-form";
import MultipleOption from "@/components/options/multiple-option";

const MultipleChoice = memo(() => {
  return (
    <MultipleChoiceWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/multiplechoice">不定项选择题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <BaseForm title="不定项题录入" option={<MultipleOption />} />
      </div>
    </MultipleChoiceWrapper>
  );
});

export default MultipleChoice;
