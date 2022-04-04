import React, { memo } from "react";
import { Form, Radio, Space } from "antd";

const JudgeOption = memo(() => {
  return (
    <div>
      <Form.Item label="选项">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>
              <span>正确</span>
            </Radio>
            <Radio value={1}>
              <span>错误</span>
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </div>
  );
});

export default JudgeOption;
