import { turnsTypes } from "../types";

const { ADD_TURN, REMOVE_TURN, FILTER_TURN, GET_TURNS, NO_TURNS_RETRIEVED, REFRESH_DATE, LOADED_HOURS } = turnsTypes;


const initialState = {
    data: [],
    availableSchedules: [],
    selectedDate: null,
    schedules: []
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
        case REMOVE_TURN:
            const filteredTurn = state.data.filter((item) => item.id !== action.id)
            return {
                ...state,
                data: filteredTurn,
            };

        case NO_TURNS_RETRIEVED:
            return {
                ...state,
            };

        case REFRESH_DATE:
            return {
                selectedDate: null,
                schedules:action.data
            };

        case FILTER_TURN:
            let availables = [];
            if (state.data) {
                const busySchedules = state.data.filter(({ item }) => item.fecha === action.fecha);
                availables = state.schedules.filter(({hour}) => {
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