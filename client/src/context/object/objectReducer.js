import { GET_OBJECTS, ADD_DEFECT, GET_DUBLE } from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            return { ...state, objects: [...action.payload] };

        case ADD_DEFECT:
            return {
                objects: [...action.payload.objects],
                duble: [...action.payload.duble],
            };

        case GET_DUBLE:
            return {
                ...state,
                duble: [...action.payload],
            };

        default:
            return state;
    }
};
