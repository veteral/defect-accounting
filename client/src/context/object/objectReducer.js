import { GET_OBJECTS, ADD_DEFECT } from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            return { objects: [...action.payload] };

        case ADD_DEFECT:
            return {
                objects: [...action.payload.objects],
                duble: [...action.payload.duble],
            };
        default:
            return state;
    }
};
