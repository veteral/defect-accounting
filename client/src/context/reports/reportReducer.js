import { GET_LOG, GET_ANALYSIS } from "../actionsType";

export const reportReducer = (state, action) => {
    switch (action.type) {
        case GET_LOG:
            console.log("GET_LOG");
            return { log: [...action.payload] };
        case GET_ANALYSIS:
            console.log("GET_ANALYSIS");
        default:
            return state;
    }
};
