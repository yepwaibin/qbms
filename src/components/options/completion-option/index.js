import React, { memo } from "react";
import { Form, Input } from "antd";

const CompletionOption = memo(() => {
  return (
    <div>
      <Form.Item label="填空答案">
        <Input />
      </Form.Item>
    </div>
  );
});

export default CompletionOption;
