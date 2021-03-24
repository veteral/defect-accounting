import { useReducer } from "react";
import { ObjectContext } from "./objectContext";
import { objectReducer } from "./objectReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_OBJECTS, SET_OBJECT } from "../actionsType";

export const ObjectState = ({ children }) => {
    const initialState = [];

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
        console.log("values do id", id);
        console.log("values do", values);

        values = {
            ...values,
            date: values.date.format("DD.MM.YYYY"),
            time: values.time.format("HH:mm:ss"),
        };
        const payload = await request(
            API_URL + "/objects/defect/" + id,
            "POST",
            values
        );

        console.log("values posle", values);
        dispatch({ type: GET_OBJECTS, payload });
    };

    return (
        <ObjectContext.Provider
            value={{ objects: state, getAllObjects, setObject, addDefect }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
