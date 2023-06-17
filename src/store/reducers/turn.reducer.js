import { turnsTypes } from "../types";
import { SCHEDULES } from '../../constants';

const { ADD_TURN, REMOVE_TURN, FILTER_TURN } = turnsTypes;


const initialState = {
    data: [],
    availableSchedules: []
};

const TurnReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TURN:
            const newItem = { ...action.item };
            const updatedData = [...state.data, newItem];
            return {
                ...state,
                data: updatedData,
            };
        case REMOVE_TURN:
            const filteredTurn = state.data.filter((item) => item.id !== action.id)
            return {
                ...state,
                data: filteredTurn,
            };

        case FILTER_TURN:
            const busySchedules = state.data.filter((item) => item.fecha === action.fecha)
            const availables = SCHEDULES.filter((schedule) => {
                // Verificar si el horario actual no está presente en busySchedules
                return !busySchedules.some((busySchedule) => busySchedule.hora === schedule.name);
            });

            return {
                ...state,
                availableSchedules: availables,
            };
        default:
            return state;
    }
};

export default TurnReducer;