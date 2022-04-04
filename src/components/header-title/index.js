import React, { memo } from "react";
import { HeaderTitleWrapper } from "./style";

import { Avatar } from "antd";

const HeaderTitle = memo(() => {
  return (
    <HeaderTitleWrapper>
      <div className="title">题库管理系统</div>
      <Avatar className="avatar" src={require("@/assets/img/avatar.jpg")} />
    </HeaderTitleWrapper>
  );
});

export default HeaderTitle;
