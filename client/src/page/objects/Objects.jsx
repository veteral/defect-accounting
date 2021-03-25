import { useEffect, useState, useContext } from "react";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { ObjectModal } from "./ObjectModal";
import { ObjectContext } from "../../context/object/objectContext";
import { Preloader } from "../../components/Preloader";

export const Objects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { objects, getAllObjects, setObject } = useContext(ObjectContext);

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

    if (objects.length === 0) return <Preloader />;

    return (
        <>
            <FixedHeader
                title={"Список объектов"}
                buttonTitle={"Добавить объект"}
                handleOnClick={showModal}
            />
            <ObjectsTable data={objects} />
            <ObjectModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    );
};