import React, { memo } from "react";
import { Form, Radio, Input, Space } from "antd";

const RadioOption = memo(() => {
  return (
    <>
      <Form.Item className="radioOptions" label="选项">
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>
              <Input />
            </Radio>
            <Radio value={2}>
              <Input />
            </Radio>
            <Radio value={3}>
              <Input />
            </Radio>
            <Radio value={4}>
              <Input />
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
});

export default RadioOption;
