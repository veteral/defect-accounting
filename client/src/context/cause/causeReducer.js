import { GET_CAUSE } from "../actionsType";

export const causeReducer = (state, action) => {
    switch (action.type) {
        case GET_CAUSE:
            return [...action.payload];

        // case SET_OBJECT:
        //     return [...state, { ...action.payload }];

        default:
            return state;
    }
};
