import { turnsTypes } from "../types";
import { SCHEDULES } from '../../constants';

const { ADD_TURN, REMOVE_TURN, FILTER_TURN, GET_TURNS, NO_TURNS_RETRIEVED, REFRESH_DATE } = turnsTypes;


const initialState = {
    data: [],
    availableSchedules: [],
    selectedDate: null,
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
            };

        case FILTER_TURN:
            let availables = [];
            if (state.data) {
                const busySchedules = state.data.filter(({ item }) => item.fecha === action.fecha);
                availables = SCHEDULES.filter((schedule) => {
                    return !busySchedules.some(({ item }) => item.hora === schedule.name);
                });
            }

            return {
                ...state,
                availableSchedules: state.data ? availables : SCHEDULES,
                selectedDate: action.fecha
            };


        default:
            return state;
    }
};

export default TurnReducer;