import { useState } from "react";
import { Affix, Button } from "antd";
import { ObjectModal } from "../page/objects/ObjectModal";

export const FixedHeader = ({ title, buttonTitle }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <Affix offsetTop={0}>
        <div
          style={{
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ margin: "0px" }}> {title} </h1>
          <Button type="primary" onClick={showModal}>
            {buttonTitle}
          </Button>
        </div>
      </Affix>            
           
    </>
  );
};
