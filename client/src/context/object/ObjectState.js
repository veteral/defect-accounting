import { useReducer } from "react";
import { ObjectContext } from "./objectContext";
import { objectReducer } from "./objectReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_OBJECTS, ADD_OBJECT, ADD_DEFECT, GET_DUBLE } from "../actionsType";

export const ObjectState = ({ children }) => {
    const initialState = {
        objects: [],
        controls: [],
    };

    const [state, dispatch] = useReducer(objectReducer, initialState);

    const getAllObjects = async () => {
        const payload = await request(API_URL + "/objects");
        console.log("payload", payload);
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

        const payload = await request(API_URL + "/defect/add", "POST", values);

        //const duble = dubleObjects(objects);

        // const payload = {
        //     objects: [...objects],
        //     duble: [...duble],
        // };
        console.log("values posle", payload);
        //dispatch({ type: ADD_DEFECT, payload });
    };

    const getDuble = async () => {
        console.log("Start request");
        const objects = await request(API_URL + "/");
        //console.log("payload duble", objects);
        //const payload = dubleObjects(objects);
        console.log("payload duble", objects);
        //dispatch({ type: GET_DUBLE, payload });
    };

    // function dubleObjects(objects) {
    //     return objects.filter((el) => el.duble === true);
    // }

    return (
        <ObjectContext.Provider
            value={{ state, getAllObjects, addObject, addDefect, getDuble }}
        >
            {children}
        </ObjectContext.Provider>
    );
};
