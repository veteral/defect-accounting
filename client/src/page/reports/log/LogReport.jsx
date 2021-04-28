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
        offset: 9,
        //span: 16,
    },
};
const tailLayout1 = {
    wrapperCol: {
        offset: 9,
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
                className="reports__log"
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item {...tailLayout}>
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

                <Form.Item {...tailLayout1} name="print">
                    <Button
                        style={{
                            width: "135px",
                        }}
                        type="primary"
                        htmlType="submit"
                    >
                        Сформировать
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
