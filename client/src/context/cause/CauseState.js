import { useReducer } from "react";
import { CauseContext } from "./causeContext";
import { causeReducer } from "../cause/causeReducer";
import { API_URL } from "../../config";
import { request } from "../request";
import { GET_CAUSE } from "../actionsType";

export const CauseState = ({ children }) => {
    const [state, dispatch] = useReducer(causeReducer, []);

    const getCause = async () => {
        const payload = await request(API_URL + "/cause");
        dispatch({ type: GET_CAUSE, payload });
    };

    return (
        <CauseContext.Provider value={{ cause: state, getCause }}>
            {children}
        </CauseContext.Provider>
    );
};
