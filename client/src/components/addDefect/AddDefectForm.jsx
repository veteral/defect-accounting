import { useContext, useEffect } from "react";
import { CauseContext } from "../../context/cause/causeContext";
import { ObjectContext } from "../../context/object/objectContext";
import { Form, Input, DatePicker, TimePicker, Select } from "antd";

const { Option } = Select;

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};

export const AddDefectForm = ({ form }) => {
    const { objects, getAllObjects } = useContext(ObjectContext);
    const { cause, getAllCause } = useContext(CauseContext);

    useEffect(() => {
        getAllObjects();
        getAllCause();
        // eslint-disable-next-line
    }, []);

    return (
        <Form form={form} {...layout} name="basic" fields={[]}>
            <Form.Item
                label="Объект"
                name="object"
                rules={[
                    {
                        required: true,
                        message: "Выберите объект!",
                    },
                ]}
            >
                <Select
                    showSearch
                    name="object"
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {objects.map((el) => (
                        <Option key={el.key} value={el.key}>
                            {`${el.passwords} : ${el.name} : ${el.address}`}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Номер шлейфа"
                name="train"
                rules={[
                    {
                        required: true,
                        message: "Введите номер шлейфа!",
                    },
                ]}
            >
                <Input style={{ width: "100px" }} />
            </Form.Item>
            <Form.Item label="Время срабатывания" style={{ marginBottom: 0 }}>
                <Form.Item
                    name="date"
                    rules={[{ required: true, message: "Выберите дату!" }]}
                    style={{ display: "inline-block", paddingRight: "10px" }}
                >
                    <DatePicker placeholder="дата" />
                </Form.Item>
                <Form.Item
                    name="time"
                    rules={[{ required: true, message: "Выберите время!" }]}
                    style={{ display: "inline-block" }}
                >
                    <TimePicker placeholder="время" format={"HH:mm"} />
                </Form.Item>
            </Form.Item>
            <Form.Item
                label="Срабатывание"
                name="key_cause"
                rules={[
                    {
                        required: true,
                        message: "Выберите причину срабатывния!",
                    },
                ]}
            >
                <Select
                    showSearch
                    name="cause"
                    filterOption={(input, option) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {cause.map((el) => (
                        <Option key={el.key} value={el.key}>
                            {el.Name_L}
                        </Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};
