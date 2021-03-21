import { Modal } from "antd";
import { AddDefectForm } from "./AddDefectForm";

export const AddDefectModal = ({ isModalVisible, handleCancel, handleOk }) => {
    return (
        <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={700}
        >
            <AddDefectForm />
        </Modal>
    );
};
