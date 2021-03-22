import { Modal, Form } from "antd";
import { AddDefectForm } from "./AddDefectForm";

export const AddDefectModal = ({ isModalVisible, handleCancel, handleOk }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            title="Добавить срабатывание"
            visible={isModalVisible}
            width={700}
            okText="Сохранить"
            cancelText="Отмена"
            onCancel={handleCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        handleOk(values);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
        >
            <AddDefectForm />
        </Modal>
    );
};
