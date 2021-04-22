import { useReducer } from "react";
import { reportReducer } from "./reportReducer";
import { ReportContext } from "./reportContext";
import { request } from "../request";
import { API_URL } from "../../config";
import { GET_LOG, GET_ANALYSIS } from "../actionsType";

export const ReportState = ({ children }) => {
    const initialState = {
        log: [],
        analysis: [],
    };

    const [state, dispatch] = useReducer(reportReducer, initialState);

    const printLog = async (values) => {
        const { startDate, endDate } = values;
        //console.log("dateS", startDate);
        const payload = await request(
            `${API_URL}/reports/log/${startDate}/${endDate}`
        );
        console.log("log state", payload);
        dispatch({ type: GET_LOG, payload });
    };

    const printAnalysis = async (values) => {
        const { startDate, endDate, period } = values;
        //console.log("dateS", startDate);
        const payload = await request(
            `${API_URL}/reports/analysis/${startDate}/${endDate}/${period}`
        );
        console.log("Analysis state", payload);
        dispatch({ type: GET_ANALYSIS, payload });
    };

    return (
        <ReportContext.Provider value={{ state, printLog, printAnalysis }}>
            {children}
        </ReportContext.Provider>
    );
};
