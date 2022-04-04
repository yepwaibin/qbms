import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";

import BaseForm from "@/components/base-form";
import CompletionOption from "@/components/options/completion-option";
import { CompletionWrapper } from "./style";

const Completion = memo(() => {
  return (
    <CompletionWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/completion">填空题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <BaseForm title="填空题" option={<CompletionOption />} />
      </div>
    </CompletionWrapper>
  );
});

export default Completion;
