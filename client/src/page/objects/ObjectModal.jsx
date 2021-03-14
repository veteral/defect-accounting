import React, { useState } from "react";
import { Modal } from "antd";
import { ObjectForm } from "./ObjectForm";

export const ObjectModal = ({
  isModalVisible,  
  handleCancel,
  handleOk,
}) => {
  console.log('modal', isModalVisible);
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
