import { Form, Button, DatePicker, Select } from "antd";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { ReportContext } from "../../../context/reports/reportContext";

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
        //span: 16,
    },
};
const tailLayout1 = {
    wrapperCol: {
        offset: 8,
        //span: 16,
    },
};

export const LogReport = () => {
    const { printLog } = useContext(ReportContext);
    const history = useHistory();

    const onFinish = (values) => {
        //console.log("Success:", values);

        printLog(values);

        const location = {
            pathname: "/reports/log/print",
            state: {},
        };

        history.push(location);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="reports">
            <h1>ЖУРНАЛ СРАБАТЫВАНИЙ</h1>
            <Form
                // {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item>
                    <Form.Item
                        name="startDate"
                        rules={[{ required: true, message: "Выберите дату!" }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="endDate"
                        rules={[{ required: true, message: "Выберите время!" }]}
                    >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>

                <Form.Item
                    name="print"
                    style={{
                        display: "inline-block",
                        paddingRight: "10px",
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Сформировать
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
