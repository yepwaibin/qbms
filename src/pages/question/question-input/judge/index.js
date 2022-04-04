import React, { memo } from "react";
import { JudgeWrapper } from "./style";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import BaseForm from "@/components/base-form";
import JudgeOption from "@/components/options/judge-option";

const Judge = memo(() => {
  return (
    <JudgeWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/judge">判断题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <BaseForm title="判断题录入" option={<JudgeOption />} />
      </div>
    </JudgeWrapper>
  );
});

export default Judge;
