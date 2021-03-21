import React, { useState } from "react";
import { Button } from "antd";
import { AddDefectModal } from "./AddDefectModal";

export const AddDefect = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

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
