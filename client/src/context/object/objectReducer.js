import {
    GET_OBJECTS,
    ADD_OBJECT,
    GET_DEFECTS,
    GET_DUBLE,
} from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            console.log("GET_OBJECTS", action.payload);
            return { ...state, objects: [...action.payload] };

        case ADD_OBJECT:
            console.log("ADD_OBJECT", action.payload);
            return { ...state, objects: [...state.objects, action.payload] };

        case GET_DEFECTS:
            console.log("GET_DEFECTS", action.payload);
            return {
                ...state,
                defects: [...action.payload],
            };

        case GET_DUBLE:
            return {
                ...state,
                controls: [...action.payload],
            };

        default:
            return state;
    }
};
