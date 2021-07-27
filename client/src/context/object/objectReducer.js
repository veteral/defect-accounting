import {
    GET_OBJECTS,
    ADD_OBJECT,
    GET_DEFECTS,
    GET_DUBLE,
    DELETE_DEFECT,
    EDIT_OBJECT,
    DELETE_OBJECT,
    ADD_DUBLE,
} from "../actionsType";

export const objectReducer = (state, action) => {
    switch (action.type) {
        case GET_OBJECTS:
            console.log("GET_OBJECTS", state);
            return { ...state, objects: [...action.payload] };

        case ADD_OBJECT:
            //console.log("ADD_OBJECT", action.payload);
            return { ...state, objects: [...state.objects, action.payload] };

        case EDIT_OBJECT:
            //console.log("EDIT_OBJECT", action.payload);

            return {
                ...state,
                objects: [
                    ...state.objects.map((item) => {
                        if (action.payload.id === item._id) {
                            console.log("Совпали");
                            return {
                                _id: action.payload.id,
                                ...action.payload.values,
                            };
                        } else {
                            return { ...item };
                        }
                    }),
                ],
            };

        case DELETE_OBJECT:
            //console.log("EDIT_OBJECT", action.payload);

            return {
                ...state,
                objects: [
                    ...state.objects.filter(
                        (item) => action.payload !== item._id
                    ),
                ],
            };

        case ADD_DUBLE:
            return {
                ...state,
                controls: [...state.controls, action.payload],
            };

        case GET_DEFECTS:
            // console.log("GET_DEFECTS", action.payload);
            // console.log("GET_DEFECTS-state", state.defects);
            const defects = state.defects.filter(
                (item) => item.id !== action.payload.id
            );
            //console.log("New Defects", defects);

            return {
                ...state,
                defects: [...defects, action.payload],
            };

        case DELETE_DEFECT:
            // console.log("Delete:");
            // console.log("state.defects:", state.defects);
            // console.log("action.payload:", action.payload);

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

        // case GET_DUBLE:
        //     return {
        //         ...state,
        //         controls: [...action.payload],
        //     };

        default:
            return state;
    }
};
