import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";
import { ObjectContext } from "../../context/object/objectContext";

export const DefectsTable = ({ objectId }) => {
    const { state, getDefects } = useContext(ObjectContext);
    const columns = [
        { title: "шлейф", dataIndex: "train", key: "train" },
        { title: "дата", dataIndex: "date", key: "date" },
        { title: "время", dataIndex: "time", key: "time" },
        { title: "срабатывание", dataIndex: "cause", key: "cause" },
        {
            title: "действие",
            dataIndex: "action",
            key: "action",
            render: () => <DeleteOutlined />,
        },
    ];

    //const defects = [];
    useEffect(() => {
        getDefects(objectId);
    }, []);

    return (
        <>
            <Table
                rowKey="_id"
                dataSource={state.defects}
                columns={columns}
                pagination={false}
            />
        </>
    );
};
