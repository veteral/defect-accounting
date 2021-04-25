import { useReducer } from "react";
import { reportReducer } from "./reportReducer";
import { ReportContext } from "./reportContext";
import { request } from "../request";
import { API_URL } from "../../config";
import {
    GET_LOG,
    GET_ANALYSIS,
    SHOW_PRELOADER,
    HIDE_PRELOADER,
} from "../actionsType";

export const ReportState = ({ children }) => {
    const initialState = {
        log: [],
        analysis: [],
        isPreloader: false,
    };

    const [state, dispatch] = useReducer(reportReducer, initialState);

    const printLog = async (values) => {
        const { startDate, endDate } = values;

        const payload = await request(
            `${API_URL}/reports/log/${startDate}/${endDate}`
        );

        dispatch({ type: GET_LOG, payload });
    };

    const printAnalysis = async (values) => {
        dispatch({ type: SHOW_PRELOADER, payload: true });

        const { startDate, endDate, period } = values;

        const payload = await request(
            `${API_URL}/reports/analysis/${startDate}/${endDate}/${period}`
        );

        dispatch({ type: HIDE_PRELOADER, payload: false });
        dispatch({ type: GET_ANALYSIS, payload });
    };

    return (
        <ReportContext.Provider value={{ state, printLog, printAnalysis }}>
            {children}
        </ReportContext.Provider>
    );
};
