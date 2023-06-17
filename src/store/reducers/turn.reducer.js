import { turnsTypes } from "../types";

const { ADD_TURN, REMOVE_TURN } = turnsTypes;

const initialState = {
    data: [],
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
        default:
            return state;
    }
};

export default TurnReducer;