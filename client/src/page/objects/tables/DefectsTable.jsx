import { Table } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

export const DefectsTable = ({ data }) => {
  const columns = [
    
    { title: "Train", dataIndex: "train", key: "train" },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: () => <DeleteOutlined />,
      }
  ];

  return (
    <>
      <Table dataSource={data} columns={columns} pagination={false} />
    </>
  );
};

