import { useContext } from "react";
import { ObjectContext } from "../../context/object/objectContext";
import { Table } from "antd";
import { DefectsTable } from "./DefectsTable";

export const ObjectsTable = ({ data, getDefects }) => {
    const { state } = useContext(ObjectContext);
    //const [defects, setdefects] = useState([]);
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

    // const expandedRow = async (row) => {
    //     console.log("start expandedRow");
    //     await getDefects(row._id);
    //     console.log("end await expandedRow");
    //     // console.log("index", index);
    //     // console.log("indent", indent);
    //     // console.log("expanded", expanded);
    //     return <DefectsTable row={row} />;
    // };

    const onExpand = async (expanded, record) => {
        console.log("start onExpand");
        await getDefects(record._id);

        // const defect = state.defects.find((f) => row._id === f.id);

        // const v = [...defect.values];
        // let obj = {};
        // obj[record._id] = record;
        console.log("end await onExpand");
        // console.log("obj", obj);
        // console.log("expanded", expanded);

        // const expandedKeys = expanded
        //   ? keys.concat(key)
        //   : keys.filter((k) => k !== key);
        // console.log("expandedKeys", expandedKeys);
        // this.setState({ expandedKeys });
    };

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
