import { hoursTypes } from "../types";

const { ADD_HOUR, GET_HOURS } = hoursTypes;


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
        // case REMOVE_TURN:
        //     const filteredTurn = state.data.filter((item) => item.id !== action.id)
        //     return {
        //         ...state,
        //         data: filteredTurn,
        //     };
        default:
            return state;
    }
};

export default HoursReducer;