import { Modal } from "antd";
import { AddDefectForm } from "./AddDefectForm";

export const AddDefectModal = ({ isModalVisible, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Добавить срабатывание"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={700}
      okText="Сохранить"
      cancelText="Отмена"
    >
      <AddDefectForm />
    </Modal>
  );
};
