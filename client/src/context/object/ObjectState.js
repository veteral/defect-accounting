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
        console.log("payload getAllObjects", payload);
        //console.log("payload objects", payload);
        dispatch({ type: GET_OBJECTS, payload });
    };

    const addObject = async (values) => {
        const payload = await request(API_URL + "/add", "POST", values);
        //console.log(payload);
        dispatch({ type: ADD_OBJECT, payload });
    };

    const addDefect = async (values) => {
        //const id = values.object;

        // values = {
        //     ...values,
        //     date: values.date.format("DD-MM-YYYY"),
        //     time: values.time.format("HH:mm:ss"),
        // };

        const payload = await request(API_URL + "/defects/add", "POST", values);

        //const duble = dubleObjects(objects);

        // const payload = {
        //     objects: [...objects],
        //     duble: [...duble],
        // };
        //console.log("values posle", payload);
        //dispatch({ type: ADD_DEFECT, payload });
    };

    const getDefectsIdObject = async (objectId) => {
        //console.log("get defects - id", objectId);
        const defects = await request(API_URL + "/defects?id=" + objectId);

        let payload = {};
        payload.id = objectId;
        payload.values = [...defects];

        console.log("get defects", payload);

        //console.log("payload objects", payload);
        dispatch({ type: GET_DEFECTS, payload });
    };

    const getDuble = async () => {
        console.log("Start request");
        const objects = await request(API_URL + "/");
        //console.log("payload duble", objects);
        //const payload = dubleObjects(objects);
        console.log("payload duble", objects);
        //dispatch({ type: GET_DUBLE, payload });
    };

    /**
     * Удаляем срабатывание у объекта
     */
    const deleteDefect = async (defectId) => {
        console.log("Start request deleteDefect", defectId);

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

    // function dubleObjects(objects) {
    //     return objects.filter((el) => el.duble === true);
    // }

    return (
        <ObjectContext.Provider
            value={{
                state,
                getAllObjects,
                addObject,
                addDefect,
                getDuble,
                getDefectsIdObject,
                deleteDefect,
            }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
