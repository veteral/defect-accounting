import { useReducer } from "react";
import { ObjectContext } from "./objectContext";
import { objectReducer } from "./objectReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import {
    GET_OBJECTS,
    ADD_OBJECT,
    GET_DEFECTS,
    GET_DUBLE,
    DELETE_DEFECT,
    DELETE_OBJECT,
    EDIT_OBJECT,
    ADD_DUBLE,
    DELETE_DUBLE,
} from "../actionsType";

export const ObjectState = ({ children }) => {
    const initialState = {
        objects: [],
        controls: [],
        defects: [],
    };

    const [state, dispatch] = useReducer(objectReducer, initialState);

    const getAllObjects = async () => {
        const payload = await request(API_URL + "/objects");
        //console.log("payload getAllObjects", payload);
        //console.log("payload objects", payload);
        dispatch({ type: GET_OBJECTS, payload });
    };

    const addObject = async (values) => {
        const payload = await request(API_URL + "/objects/add", "POST", values);
        //console.log(payload);
        dispatch({ type: ADD_OBJECT, payload });
    };

    const editObject = async (data) => {
        const response = await request(
            `${API_URL}/objects/edit/${data.id}`,
            "PUT",
            {
                ...data.values,
            }
        );

        const status = response.status;

        if (status === 200) {
            dispatch({ type: EDIT_OBJECT, payload: { ...data } });
            //console.log("status - edit object", data);
        }
        //dispatch({ type: DELETE_OBJECT, payload });
    };

    const deleteObject = async (id) => {
        const response = await request(
            `${API_URL}/objects/delete/${id}`,
            "DELETE"
        );

        const status = response.status;

        if (status === 200) {
            dispatch({ type: DELETE_OBJECT, payload: id });
        }
    };

    const addDefect = async (values) => {
        //console.log("add defect - ", values);
        const response = await request(
            API_URL + "/defects/add",
            "POST",
            values
        );

        console.log("isControl", response);
        if (response.control) {
            console.log("isControl - true");
            console.log("values - add-duble", values);
            dispatch({ type: ADD_DUBLE, payload: values });
        }
        //dispatch({ type: ADD_DEFECT, payload });
    };

    const getDefectsIdObject = async (objectId) => {
        //console.log("get defects - id", objectId);
        const defects = await request(API_URL + "/defects?id=" + objectId);

        let payload = {};
        payload.id = objectId;
        payload.values = [...defects];

        console.log("get defects", defects);

        //console.log("payload objects", payload);
        dispatch({ type: GET_DEFECTS, payload });
    };

    const getDuble = async () => {
        //console.log("Start request");
        const duble = await request(`${API_URL}/`);
        //console.log("payload duble", objects);
        //const payload = dubleObjects(objects);
        //console.log("payload duble", objects);
        dispatch({ type: GET_DUBLE, payload: duble });
    };

    const deleteDuble = async (id) => {
        //console.log("id deleteDuble", id);
        const response = await request(`${API_URL}/${id}`, "PUT");

        dispatch({ type: DELETE_DUBLE, payload: id });
    };

    /**
     * Удаляем срабатывание у объекта
     */
    const deleteDefect = async (defectId) => {
        ///console.log("Start request deleteDefect", defectId);

        const response = await request(
            `${API_URL}/defects/${defectId}`,
            "DELETE"
        );

        const status = await response.status;

        if (status === 200) {
            dispatch({ type: DELETE_DEFECT, payload: defectId });
        }

        //const payload = dubleObjects(objects);
        //console.log("payload duble", objects);
        //dispatch({ type: GET_DUBLE, payload });
    };

    return (
        <ObjectContext.Provider
            value={{
                state,
                getAllObjects,
                addObject,
                editObject,
                deleteObject,
                addDefect,
                getDuble,
                getDefectsIdObject,
                deleteDefect,
                deleteDuble,
            }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
