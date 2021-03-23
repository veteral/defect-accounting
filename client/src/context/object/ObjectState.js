import { useReducer } from "react";
import { ObjectContext } from "./objectContext";
import { objectReducer } from "./objectReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_ALL_OBJECTS, SET_OBJECT } from "../actionsType";

export const ObjectState = ({ children }) => {
    const initialState = [];

    const [state, dispatch] = useReducer(objectReducer, initialState);

    const getAllObjects = async () => {
        const payload = await request(API_URL + "/objects");
        dispatch({ type: GET_ALL_OBJECTS, payload });
    };

    const setObject = async (values) => {
        const payload = await request(API_URL + "/objects", "POST", values);
        dispatch({ type: SET_OBJECT, payload });
    };

    return (
        <ObjectContext.Provider
            value={{ objects: state, getAllObjects, setObject }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
