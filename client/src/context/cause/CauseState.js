import { useReducer } from "react";
import { CauseContext } from "./causeContext";
import { causeReducer } from "../cause/causeReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_ALL_CAUSE } from "../actionsType";

export const CauseState = ({ children }) => {
    const [state, dispatch] = useReducer(causeReducer, []);

    const getAllCause = async () => {
        const payload = await request(API_URL + "/cause");
        dispatch({ type: GET_ALL_CAUSE, payload });
    };

    return (
        <CauseContext.Provider value={{ cause: state, getAllCause }}>
            {children}
        </CauseContext.Provider>
    );
};
