import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const DefectsTable = ({ data }) => {
    const columns = [
        { title: "шлейф", dataIndex: "train", key: "train" },
        { title: "дата", dataIndex: "date", key: "date" },
        { title: "время", dataIndex: "time", key: "time" },
        { title: "срабатывание", dataIndex: "key_cause", key: "key_cause" },
        {
            title: "действие",
            dataIndex: "action",
            key: "action",
            render: () => <DeleteOutlined />,
        },
    ];

    return (
        <>
            <Table dataSource={data} columns={columns} pagination={false} />
        </>
    );
};
