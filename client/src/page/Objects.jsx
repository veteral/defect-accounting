import { Table } from "antd";
import data from "../objects.json";
import TableDefects from "../components/TableDefects";


const Objects = () => {
  const columnsFirst = [
    {
      title: "Arrow",
      dataIndex: "arrow",
      key: "arrow",      
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];  

  return (
    <>
      <Table
        dataSource={data}
        columns={columnsFirst}
        expandable={{
          expandedRowRender: record => <TableDefects data={record.defects} />,            
          rowExpandable: record => record.defects.length > 0,
        }}
      />
    </>
  );
};

export default Objects;
