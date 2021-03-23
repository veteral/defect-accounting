import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd";
import { AddDefectModal } from "./AddDefectModal";
import { CauseContext } from "../../context/cause/causeContext";

export const AddDefect = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    //const { data, getAllCause } = useContext(CauseContext);

    useEffect(() => {
        // getAllCause();
        // const cause = data.map((el) => ({
        //     label: el.Name_L,
        //     value: el.key,
        // }));
        // console.log("use effect cause");
        // //setOptions(cause);
    }, []);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        console.log("values", values);
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
