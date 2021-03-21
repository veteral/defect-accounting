import { GET_ALL_OBJECTS, SET_OBJECT } from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_OBJECTS:
            return [...action.payload];

        case SET_OBJECT:
            return [...state, { ...action.payload }];

        default:
            return state;
    }
};
