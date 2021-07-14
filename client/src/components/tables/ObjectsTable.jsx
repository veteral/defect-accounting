import { useContext, useState } from "react";
import { ObjectContext } from "../../context/object/objectContext";
import { Table, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { DefectsTable } from "./DefectsTable";

export const ObjectsTable = ({ data, getDefects }) => {
    const { state } = useContext(ObjectContext);
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
        await getDefects(record._id);
    };

    const columns = [
        {
            title: "Пароль",
            dataIndex: "passwords",
            key: "passwords",
            // sorter: (a, b) => {
            //     if (a.name < b.name) {
            //         return -1;
            //     }
            //     if (a.name > b.name) {
            //         return 1;
            //     }
            //     return 0;
            // },
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
            // sorter: (a, b) => {
            //     if (a.name < b.name) {
            //         return -1;
            //     }
            //     if (a.name > b.name) {
            //         return 1;
            //     }
            //     return 0;
            // },
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

    return (
        <>
            <Table
                rowKey="_id"
                dataSource={data}
                columns={columns}
                expandedRowRender={(record) => (
                    <DefectsTable id={record._id} defects={state.defects} />
                )}
                onExpand={onExpand}
            />
        </>
    );
};
