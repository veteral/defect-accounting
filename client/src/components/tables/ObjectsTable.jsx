import { Table } from "antd";
import { DefectsTable } from "./DefectsTable";

export const ObjectsTable = ({ data }) => {
    const columns = [
        {
            title: "Пароль",
            dataIndex: "passwords",
            key: "passwords",
            sorter: (a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            },
            showSorterTooltip: false,
        },
        {
            title: "Телефон",
            dataIndex: "telefone",
            key: "telefone",
        },
        {
            title: "Наименование",
            dataIndex: "name",
            key: "name",
            sorter: (a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            },
            showSorterTooltip: false,
        },
        {
            title: "Адрес",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Прибор",
            dataIndex: "device",
            key: "device",
        },
    ];

    return (
        <>
            <Table
                rowKey="_id"
                dataSource={data}
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <DefectsTable objectId={record._id} />
                    ),
                    //rowExpandable: (record) => record.defects.length > 0,
                }}
            />
        </>
    );
};
