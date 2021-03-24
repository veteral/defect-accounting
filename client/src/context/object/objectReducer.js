import { GET_OBJECTS, SET_OBJECT } from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            action.payload.sort(function (a, b) {
                if (a.passwords > b.passwords) {
                    return 1;
                }
                if (a.passwords < b.passwords) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            return [...action.payload];

        case SET_OBJECT:
            return [...state, { ...action.payload }];

        default:
            return state;
    }
};
