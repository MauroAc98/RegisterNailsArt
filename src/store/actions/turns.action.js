import { turnsTypes } from "../types";

const { ADD_TURN, REMOVE_TURN } = turnsTypes


export const addTurn = (turn) => ({
    type: ADD_TURN,
    item: turn,
});

export const removeTurn = (id) => ({
    type: REMOVE_TURN,
    id,
});

