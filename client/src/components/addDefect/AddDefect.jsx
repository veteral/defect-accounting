import React, { useState, useContext } from "react";
import { Button } from "antd";
import { AddDefectModal } from "./AddDefectModal";
import { ObjectContext } from "../../context/object/objectContext";

export const AddDefect = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { addDefect } = useContext(ObjectContext);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        addDefect(values);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button onClick={showModal} type="primary">
                Добавить срабатывание
            </Button>
            <AddDefectModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    );
};
