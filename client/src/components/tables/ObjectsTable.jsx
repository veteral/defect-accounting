import { useContext, useState } from "react";
import { ObjectContext } from "../../context/object/objectContext";
import { Table, Input, Button, Space, Popconfirm } from "antd";
import {
    SearchOutlined,
    DeleteOutlined,
    FormOutlined,
    PrinterOutlined,
} from "@ant-design/icons";
import { DefectsTable } from "./DefectsTable";

export const ObjectsTable = ({
    data,
    getDefectsIdObject,
    editingObject,
    duble,
}) => {
    const { state, deleteObject, deleteDuble } = useContext(ObjectContext);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setsearchedColumn] = useState("");

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    // ref={(node) => {
                    //     searchInput = node;
                    // }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{ width: 188, marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Поиск
                    </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Очистить
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{ color: filtered ? "#1890ff" : undefined }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex]
                      .toString()
                      .toLowerCase()
                      .includes(value.toLowerCase())
                : "",
        onFilterDropdownVisibleChange: (visible) => {
            // if (visible) {
            //     setTimeout(() => this.searchInput.select(), 100);
            // }
            console.log("onFilterDropdownVisibleChange");
        },
    });

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        // this.setState({
        //     searchText: selectedKeys[0],
        //     searchedColumn: dataIndex,
        // });
        setSearchText(selectedKeys[0]);
        setsearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        // this.setState({ searchText: "" });
        setSearchText("");
    };

    const onExpand = async (expanded, record) => {
        await getDefectsIdObject(record._id);
    };

    const columns = [
        {
            title: "Пароль",
            dataIndex: "passwords",
            key: "passwords",
            showSorterTooltip: false,
            ...getColumnSearchProps("passwords"),
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
            showSorterTooltip: false,
            ...getColumnSearchProps("name"),
        },
        {
            title: "Адрес",
            dataIndex: "address",
            key: "address",
            ...getColumnSearchProps("address"),
        },
        {
            title: "Прибор",
            dataIndex: "device",
            key: "device",
        },
    ];

    const defectColumns = [
        {
            title: "Дата повтора",
            dataIndex: "date",
            key: "date",
            showSorterTooltip: false,
        },
        {
            title: "Шлейф",
            dataIndex: "train",
            key: "train",
            showSorterTooltip: false,
        },
    ];

    const actionColumn = {
        title: "действие",
        dataIndex: "action",
        key: "action",
        render: (_, record) => {
            return !duble ? (
                <Space size="small">
                    <a
                        //href="javascript:;"
                        href="#"
                        onClick={() => editingObject(record)}
                    >
                        <FormOutlined style={{ color: "#ff0000" }} />
                    </a>

                    <Popconfirm
                        title={`Удалить объект: "${record.passwords}"?`}
                        okText="Да"
                        cancelText="Нет"
                        onConfirm={() => deleteObject(record._id)} //this.handleDelete(record.key)}
                    >
                        <DeleteOutlined />
                    </Popconfirm>
                </Space>
            ) : (
                <Space size="small">
                    <Popconfirm
                        title={`Удалить повтор: "${record.passwords}"?`}
                        okText="Да"
                        cancelText="Нет"
                        onConfirm={() => deleteDuble(record._id)} //this.handleDelete(record.key)}
                    >
                        <DeleteOutlined />
                        <PrinterOutlined
                            style={
                                record.isNewRecord
                                    ? { color: "#ff0000" }
                                    : { color: "#ff55ff" }
                            }
                        />
                    </Popconfirm>
                </Space>
            );
        },
    };

    return (
        <>
            <Table
                rowKey="_id"
                dataSource={data}
                columns={
                    !duble
                        ? [...columns, actionColumn]
                        : [...columns, ...defectColumns, actionColumn]
                }
                expandedRowRender={(record) => (
                    <DefectsTable id={record._id} defects={state.defects} />
                )}
                onExpand={onExpand}
                // onRow={(record, rowIndex) => {
                //     console.log("onRow");
                //     return {
                //         onClick: (event) => {
                //             console.log("onClick - rowIndex", rowIndex);
                //             console.log("onClick - record", record);
                //         }, // click row
                //         onDoubleClick: (event) => {}, // double click row
                //         onContextMenu: (event) => {}, // right button click row
                //         onMouseEnter: (event) => {}, // mouse enter row
                //         onMouseLeave: (event) => {}, // mouse leave row

                //     };
                // }}
                //onRow = () => state.dubles.isNewRecord && {className: "expand-parent"}
                onHeaderRow={(columns, index) => {
                    return {
                        onClick: () => {
                            console.log("onHeaderRow", columns);
                            console.log("onHeaderRow", index);
                        }, // click header row
                    };
                }}
            />
        </>
    );
};
