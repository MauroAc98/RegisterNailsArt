import { turnsTypes } from "../types";

const { ADD_TURN, REMOVE_TURN, FILTER_TURN, GET_TURNS, NO_TURNS_RETRIEVED, REFRESH_DATE, GET_IMAGE } = turnsTypes;


const initialState = {
    data: [],
    availableSchedules: [],
    selectedDate: null,
    schedules: [],
    image: null
};

const TurnReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TURN:
            return {
                ...state,
            };

        case GET_TURNS:
            return {
                ...state,
                data: action.turns,
                noTurnsRetrieved: false,
            };

        case GET_IMAGE:
            return {
                ...state,
                image: action.result.length !== 0 ? action.result[0].image : null
            };
        case REMOVE_TURN:
            return {
                ...state,
                data: state.data.filter((turn) => turn.id !== action.id),
            };

        case NO_TURNS_RETRIEVED:
            return {
                ...state,
            };

        case REFRESH_DATE:
            return {
                selectedDate: null,
                schedules: action.data
            };

        case FILTER_TURN:
            let availables = [];
            if (state.data) {
                const busySchedules = state.data.filter(({ item }) => item.fecha === action.fecha);
                availables = state.schedules.filter(({ hour }) => {
                    return !busySchedules.some(({ item }) => item.hora === hour);
                });
            }

            return {
                ...state,
                availableSchedules: state.data ? availables : state.schedules,
                selectedDate: action.fecha
            };
        default:
            return state;
    }
};

export default TurnReducer;