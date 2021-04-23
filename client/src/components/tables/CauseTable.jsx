import { Table } from "antd";

export const CauseTable = ({ data }) => {
    const columns = [
        {
            title: "Наименование (длинное)",
            dataIndex: "nameL",
            key: "nameL",
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
            title: "Наименование (среднее)",
            dataIndex: "nameS",
            key: "nameS",
        },
        {
            title: "Наименование (короткое)",
            dataIndex: "nameC",
            key: "nameC",
        },
    ];

    return (
        <>
            <Table dataSource={data} columns={columns} pagination={false} />
        </>
    );
};
