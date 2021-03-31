import { useReducer } from "react";
import { ObjectContext } from "./objectContext";
import { objectReducer } from "./objectReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_OBJECTS, ADD_DEFECT } from "../actionsType";

export const ObjectState = ({ children }) => {
    const initialState = {
        objects: [],
        duble: [],
    };

    const [state, dispatch] = useReducer(objectReducer, initialState);

    const getAllObjects = async () => {
        const payload = await request(API_URL + "/objects");
        //console.log("payload", payload);
        dispatch({ type: GET_OBJECTS, payload });
    };

    const setObject = async (values) => {
        const payload = await request(API_URL + "/objects", "POST", values);
        dispatch({ type: GET_OBJECTS, payload });
    };

    const addDefect = async (values) => {
        const id = values.object;

        values = {
            ...values,
            date: values.date.format("DD.MM.YYYY"),
            time: values.time.format("HH:mm:ss"),
        };

        const objects = await request(
            API_URL + "/objects/defect/" + id,
            "POST",
            values
        );

        const duble = objects.filter((el) => el.duble === true);

        const payload = {
            objects: [...objects],
            duble: [...duble],
        };
        console.log("values posle", values);
        dispatch({ type: ADD_DEFECT, payload });
    };

    return (
        <ObjectContext.Provider
            value={{ state, getAllObjects, setObject, addDefect }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
