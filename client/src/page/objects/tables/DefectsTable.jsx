import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

export const DefectsTable = ({ data }) => {
    const columns = [
        { title: "train", dataIndex: "train", key: "train" },
        { title: "date", dataIndex: "date", key: "date" },
        { title: "time", dataIndex: "time", key: "time" },
        { title: "key_cause", dataIndex: "key_cause", key: "key_cause" },
        {
            title: "Action",
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
