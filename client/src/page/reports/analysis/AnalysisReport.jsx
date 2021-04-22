import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ReportContext } from "../../../context/reports/reportContext";
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

export const AnalysisReport = () => {
    const history = useHistory();
    const { printAnalysis } = useContext(ReportContext);

    const onFinish = (values) => {
        console.log("Success:", values);

        printAnalysis(values);

        const location = {
            pathname: "/reports/analysis/print",
            state: {},
        };
        history.push(location);
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
                        name="startDate"
                        rules={[{ required: true, message: "Выберите дату!" }]}
                        style={{
                            display: "inline-block",
                            paddingRight: "30px",
                        }}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        name="endDate"
                        rules={[{ required: true, message: "Выберите время!" }]}
                        style={{ display: "inline-block" }}
                    >
                        <DatePicker />
                    </Form.Item>
                </Form.Item>

                <Form.Item name="period" label="период срабатывания:">
                    <Radio.Group>
                        <Radio value="1">2 месяца</Radio>
                        <Radio value="2">6 месяцев</Radio>
                        <Radio value="3">год</Radio>
                        <Radio value="4">все</Radio>
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
