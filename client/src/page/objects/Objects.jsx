import { useEffect, useState, useContext } from "react";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { ObjectModal } from "./ObjectModal";
import { ObjectContext } from "../../context/object/objectContext";
import { Preloader } from "../../components/Preloader";

export const Objects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { state, getAllObjects, addObject } = useContext(ObjectContext);

    useEffect(() => {
        getAllObjects();
        // eslint-disable-next-line
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        addObject(values);
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
            {state.objects.length !== 0 ? (
                <ObjectsTable data={state.objects} />
            ) : (
                <Preloader />
            )}
            <ObjectModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    );
};
