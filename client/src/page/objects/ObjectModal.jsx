import React, { useState } from "react";
import { Modal, Button } from "antd";
import { ObjectForm } from "./ObjectForm";

export const ObjectModal = ({
  isModalVisible,  
  handleCancel,
  handleOk,
}) => {
  return (
    <>      
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <ObjectForm /> 
      </Modal>
    </>
  );
};
