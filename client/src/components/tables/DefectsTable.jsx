import { Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
// import { useContext, useEffect } from "react";
// import { ObjectContext } from "../../context/object/objectContext";

export const DefectsTable = ({ id, defects }) => {
    // const { state } = useContext(ObjectContext);
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

    //console.log("state.defects - defects", defects);
    //console.log("state.defects - state.defects", state.defects);
    let def = [];
    if (defects.length !== 0) {
        const element = defects.find((f) => id === f.id);
        //console.log("element", element);
        if (element !== undefined && element.length !== 0) {
            //console.log("id", id);
            def = [...element.values];
        }
    }

    return (
        <>
            {def.length > 0 ? (
                <Table
                    rowKey="_id"
                    dataSource={def}
                    columns={columns}
                    pagination={false}
                />
            ) : null}
        </>
    );
};
