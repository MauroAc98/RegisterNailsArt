import { hoursTypes } from "../types";

const { ADD_HOUR, GET_HOURS, DELETE_HOUR } = hoursTypes;


const initialState = {
    data: [],
};

const HoursReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_HOUR:
            return {
                ...state,
            };

        case GET_HOURS:

            return {
                ...state,
                data: action.result,
            };
        case DELETE_HOUR:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default HoursReducer;