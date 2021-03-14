import {useEffect, useState} from "react";
import dataj from "../../objects.json";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "./tables/ObjectsTable";
import { ObjectModal } from "./ObjectModal";

export const Objects = () => { 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataj);
  },[]);

  const showModal = () => {    
    setIsModalVisible(true);    
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <FixedHeader
        title={"Список объектов"}
        buttonTitle={"Добавить объект"}   
        handleOnClick={showModal}     
      />
      <ObjectsTable data={data}/>
      <ObjectModal 
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};


