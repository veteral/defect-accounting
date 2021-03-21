import { Form, Input, DatePicker, TimePicker } from "antd";
import { SearchSelect } from "./SearchSelect";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

export const AddDefectForm = ({ form }) => {
  return (
    <Form form={form} {...layout} name="basic" fields={[]}>
      <Form.Item
        label="Объект"
        name="object"
        rules={[
          {
            required: true,
            message: "Пожалуйста, выберите объект!",
          },
        ]}
      >
        <SearchSelect />
      </Form.Item>
      <Form.Item
        label="Номер шлейфа"
        name="train"
        rules={[
          {
            required: true,
            message: "Пожалуйста, введите номер шлейфа!",
          }          
        ]}        
      >
        <Input style={{ width: '100px'}} />
      </Form.Item>      

      <Form.Item label="Время срабатывания" style={{ marginBottom: 0 }}>
        <Form.Item
          name="year"
          rules={[{ required: true }]}
          style={{ display: "inline-block", paddingRight: "10px" }}
        >
          <DatePicker placeholder="дата" />
        </Form.Item>
        <Form.Item
          name="month"
          rules={[{ required: true }]}
          style={{ display: "inline-block" }}
        >
          <TimePicker placeholder="время" format={"HH:mm"} />
        </Form.Item>
      </Form.Item>
      <Form.Item
        label="Срабатывание"
        name="cause"
        rules={[
          {
            required: true,
            message: "Пожалуйста, выберите причину срабатывния!",
          },
        ]}
      >
        <SearchSelect />
      </Form.Item>
    </Form>
  );
};
