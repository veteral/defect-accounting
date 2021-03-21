import { Modal, Form } from "antd";
import { ObjectForm } from "./ObjectForm";

export const ObjectModal = ({ isModalVisible, handleCancel, handleOk }) => {
    const [form] = Form.useForm();
    return (
        <>
            <Modal
                title="Basic Modal"
                visible={isModalVisible}
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
                <ObjectForm form={form} />
            </Modal>
        </>
    );
};
