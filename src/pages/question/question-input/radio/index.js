import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "antd";
import { RadioWrapper } from "./style";
import BaseForm from "@/components/base-form";
import RadioOption from "@/components/options/radio-option";

const Radio = memo(() => {
  return (
    <RadioWrapper>
      <div className="breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/home/user/search">Home</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/home/question/judge">单选题录入</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="content">
        <BaseForm title="单选题录入" option={<RadioOption />} />
      </div>
    </RadioWrapper>
  );
});

export default Radio;
