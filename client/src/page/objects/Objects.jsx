import data from "../../objects.json";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "./tables/ObjectsTable";

export const Objects = () => { 

  return (
    <>
      <FixedHeader
        title={"Список объектов"}
        buttonTitle={"Добавить объект"}        
      />
      <ObjectsTable data={data}/>
    </>
  );
};


