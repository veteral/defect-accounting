import {
    Form,
    Input,
    Button,
    DatePicker,
    TimePicker,
    Radio,
    Select,
} from "antd";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 5,
        span: 16,
    },
};
const tailLayout1 = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Option } = Select;

export const ControlReport = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="reports">
            <h1>Отчет о сработавших объектах за период:</h1>
            <Form
                // {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item {...tailLayout}>
                    <Form.Item
                        name="dateStart"
                        rules={[{ required: true, message: "Выберите дату!" }]}
                        style={{
                            display: "inline-block",
                            paddingRight: "30px",
                        }}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="dateEnd"
                        rules={[{ required: true, message: "Выберите время!" }]}
                        style={{ display: "inline-block" }}
                    >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    name="time"
                    rules={[{ required: true, message: "Выберите время!" }]}
                    style={{ display: "inline-block" }}
                >
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        //onChange={handleChange}
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </Form.Item>

                <Form.Item name="radio-group" label="период срабатывания:">
                    <Radio.Group>
                        <Radio value="a">2 месяца</Radio>
                        <Radio value="b">6 месяцев</Radio>
                        <Radio value="c">год</Radio>
                        <Radio value="d">все</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item {...tailLayout1} style={{ marginBottom: 0 }}>
                    <Form.Item
                        name="print"
                        style={{
                            display: "inline-block",
                            paddingRight: "10px",
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Печать
                        </Button>
                    </Form.Item>
                    <Form.Item
                        name="cancel"
                        style={{ display: "inline-block" }}
                    >
                        <Button type="primary" htmlType="submit">
                            Отмена
                        </Button>
                    </Form.Item>
                </Form.Item>
            </Form>
        </div>
    );
};
