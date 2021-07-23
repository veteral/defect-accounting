import { useEffect, useState, useContext } from "react";
import { Form } from "antd";
import { FixedHeader } from "../../components/FixedHeader";
import { ObjectsTable } from "../../components/tables/ObjectsTable";
import { ObjectModal } from "./ObjectModal";
import { ObjectContext } from "../../context/object/objectContext";
import { Preloader } from "../../components/Preloader";

export const Objects = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [object, setObject] = useState({});
    const { state, getAllObjects, addObject, getDefectsIdObject } = useContext(
        ObjectContext
    );
    const [form] = Form.useForm();

    useEffect(() => {
        getAllObjects();
        // eslint-disable-next-line
    }, []);

    const add = () => {
        setObject({ id: "-1", fields: [] });
        setIsModalVisible(true);
        console.log("Has Ok!", object);
    };

    const edit = (record) => {
        const fields = [
            {
                name: ["passwords"],
                value: record.passwords,
            },
            {
                name: ["telefone"],
                value: record.telefone,
            },
            {
                name: ["name"],
                value: record.name,
            },
            {
                name: ["address"],
                value: record.address,
            },
            {
                name: ["device"],
                value: record.device,
            },
        ];

        setObject({ id: record._id, fields: [...fields] });
        setIsModalVisible(true);
        console.log("Has Edit!", object);
    };

    const handleOk = (values) => {
        if (object.id === "-1") {
            console.log("Add new object", object);
            //addObject(values);
        } else {
            console.log("Editing object", object);
        }

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <>
            <FixedHeader
                title={"Список объектов"}
                buttonTitle={"Добавить объект"}
                handleOnClick={add}
            />
            {state.objects.length !== 0 ? (
                <ObjectsTable
                    data={state.objects}
                    //defects={state.defects}
                    getDefectsIdObject={getDefectsIdObject}
                    editingObject={edit}
                />
            ) : (
                <Preloader />
            )}
            <ObjectModal
                isModalVisible={isModalVisible}
                handleOk={handleOk}
                handleCancel={handleCancel}
                fields={object.fields}
                form={form}
            />
        </>
    );
};
