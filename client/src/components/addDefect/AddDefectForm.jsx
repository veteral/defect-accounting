import { Form, Input, TimePicker } from "antd";

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
        <Form
            form={form}
            {...layout}
            name="basic"
            fields={[
                {
                    name: ["passwords"],
                    value: "1-1-8",
                },
                {
                    name: ["telefone"],
                    value: "35-84-01",
                },
                {
                    name: ["name"],
                    value: "Магазин 'Смакота'",
                },
            ]}
        >
            <Form.Item
                label="Пароль"
                name="passwords"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите пароль!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Телефон"
                name="telefone"
                rules={[
                    {
                        required: false,
                        message: "Пожалуйста, введите телефон!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Наименование"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите наименование объекта!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Адрес"
                name="address"
                rules={[
                    {
                        required: true,
                        message: "Пожалуйста, введите адрес объекта!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Прибор"
                name="device"
                rules={[
                    {
                        required: false,
                        message: "Пожалуйста, введите прибор!",
                    },
                ]}
            >
                <Input />
                <TimePicker />
            </Form.Item>
        </Form>
    );
};
