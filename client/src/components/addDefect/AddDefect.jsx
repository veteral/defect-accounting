import React, { useState, useEffect, useContext } from "react";
import { Button } from "antd";
import { AddDefectModal } from "./AddDefectModal";
import { ObjectContext } from "../../context/object/objectContext";
import moment from "moment";

export const AddDefect = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { addDefect } = useContext(ObjectContext);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = (values) => {
        //console.log("values", values);

        //const dd = values.date;
        //moment.lang("ru");
        //console.log("date", dd.format("DD.MM.YYYY"));
        //console.log("time", dd.format("HH:mm:ss"));
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
