import {
    GET_OBJECTS,
    ADD_OBJECT,
    GET_DEFECTS,
    GET_DUBLE,
    DELETE_DEFECT,
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
            console.log("GET_DEFECTS-state", state.defects);
            return {
                ...state,
                defects: [...state.defects, action.payload],
            };

        case DELETE_DEFECT:
            console.log("Delete:");
            console.log("state.defects:", state.defects);
            console.log("action.payload:", action.payload);

            for (let element of state.defects) {
                const el = element.values.filter(
                    (item) => item._id !== action.payload
                );

                element.values = [...el];
            }

            return {
                ...state,
                defects: [...state.defects],
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
