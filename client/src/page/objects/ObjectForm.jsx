import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

export const ObjectForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
