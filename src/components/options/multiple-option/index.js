import React, { memo } from 'react'
import { Form, Checkbox, Input, Space } from "antd";

const MultipleOption = memo(() => {
  return (
    <>
      <Form.Item label="选项">
        <Checkbox.Group>
          <Space direction="vertical">
            <Checkbox value={1}>
              <Input />
            </Checkbox>
            <Checkbox value={2}>
              <Input />
            </Checkbox>
            <Checkbox value={3}>
              <Input />
            </Checkbox>
            <Checkbox value={4}>
              <Input />
            </Checkbox>
          </Space>
        </Checkbox.Group>
      </Form.Item>
    </>
  )
})

export default MultipleOption
