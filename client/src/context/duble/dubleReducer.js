import { GET_DUBLE } from "../actionsType";

export const dubleReducer = (state, action) => {
    switch (action.type) {
        case GET_DUBLE:
            return [...action.payload];

        // case SET_OBJECT:
        //     return [...state, { ...action.payload }];

        default:
            return state;
    }
};
