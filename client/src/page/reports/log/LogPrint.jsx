import { useContext } from "react";
import { Table } from "antd";
import { ReportContext } from "../../../context/reports/reportContext";

export const LogPrint = () => {
    const { state } = useContext(ReportContext);

    const columns = [
        {
            title: "Пароль",
            dataIndex: "passwords",
            key: "passwords",
        },
        {
            title: "Наименование",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Адрес",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Шлейф",
            dataIndex: "train",
            key: "train",
        },
        {
            title: "Дата",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Время",
            dataIndex: "time",
            key: "time",
        },
        {
            title: "срабатывание",
            dataIndex: "cause",
            key: "cause",
        },
    ];
    return state.log ? (
        <div>
            <h1>ЖУРНАЛ СРАБАТЫВАНИЙ</h1>
            {/* <h3>
                c {location.state.start} по {location.state.end}
            </h3> */}
            <Table rowKey="_id" dataSource={state.log} columns={columns} />;
        </div>
    ) : (
        <>Нет данных</>
    );
};
