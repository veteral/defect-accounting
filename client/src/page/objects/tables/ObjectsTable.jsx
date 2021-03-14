import { Table } from "antd";
import {DefectsTable} from "./DefectsTable";

export const ObjectsTable = ({ data }) => {
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
          expandedRowRender: (record) => <DefectsTable data={record.defects} />,
          rowExpandable: (record) => record.defects.length > 0,
        }}
      />
    </>
  );
};


