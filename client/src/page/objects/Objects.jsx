import { useEffect, useState, useContext } from "react";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "./tables/ObjectsTable";
import { ObjectModal } from "./ObjectModal";
import { ObjectContext } from "../../context/object/objectContext";

export const Objects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { data, getAllObjects, setObject } = useContext(ObjectContext);

    useEffect(() => {
        getAllObjects();
        // eslint-disable-next-line
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        setObject(values);
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
            <ObjectsTable data={data} />
            <ObjectModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    );
};
