import { Table } from "antd";
import data from "../objects.json";
import TableDefects from "../components/TableDefects";

const Objects = () => {
  const columns = [
    {
      title: "Arrow",
      dataIndex: "arrow",
      key: "arrow",
    },
    {
      title: "Name",
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
  ];

  return (
    <>
      <Table
        dataSource={data}
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <TableDefects data={record.defects} />,
          rowExpandable: (record) => record.defects.length > 0,
        }}
      />
    </>
  );
};

export default Objects;
