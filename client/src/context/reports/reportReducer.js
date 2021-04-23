import {
    GET_LOG,
    GET_ANALYSIS,
    SHOW_PRELOADER,
    HIDE_PRELOADER,
} from "../actionsType";

export const reportReducer = (state, action) => {
    switch (action.type) {
        case GET_LOG:
            return { log: [...action.payload] };
        case GET_ANALYSIS:
            return { analysis: [...action.payload] };
        case SHOW_PRELOADER:
            return { analysis: [], isPreloader: true };
        case HIDE_PRELOADER:
            return { ...state, isPreloader: false };
        default:
            return state;
    }
};
