import { Modal } from "antd";
import { ObjectForm } from "./ObjectForm";

export const ObjectModal = ({
    isModalVisible,
    handleCancel,
    handleOk,
    fields,
    form,
}) => {
    // const [form] = Form.useForm();
    return (
        <>
            <Modal
                title="Добавить/изменить объект"
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
                <ObjectForm form={form} fields={fields} />
            </Modal>
        </>
    );
};
