import { Table } from "antd";

export const CauseTable = ({ data }) => {
    const columns = [
        {
            title: "Наименование (длинное)",
            dataIndex: "Name_L",
            key: "Name_L",
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
            dataIndex: "Name_S",
            key: "Name_S",
        },
        {
            title: "Наименование (короткое)",
            dataIndex: "Nm_chars",
            key: "Nm_chars",
        },
    ];

    return (
        <>
            <Table dataSource={data} columns={columns} />
        </>
    );
};
