import { useReducer } from "react";
import { DubleContext } from "./dubleContext";
import { dubleReducer } from "./dubleReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_DUBLE } from "../actionsType";

export const DubleState = ({ children }) => {
    const [state, dispatch] = useReducer(dubleReducer, []);

    const getDuble = async () => {
        const payload = await request(API_URL + "/");
        console.log("duble", payload);
        //dispatch({ type: GET_DUBLE, payload });
    };

    return (
        <DubleContext.Provider value={{ duble: state, getDuble }}>
            {children}
        </DubleContext.Provider>
    );
};
