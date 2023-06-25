import { turnsTypes } from "../types";
import { FIREBASE_REAL_TIME_URL_DB } from '../../constants/index'

const { ADD_TURN, REMOVE_TURN, FILTER_TURN, REFRESH_DATE, GET_TURNS,NO_TURNS_RETRIEVED } = turnsTypes


export const addTurn = (turn) => {

    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REAL_TIME_URL_DB}/turnos.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    item: turn,
                }),
            });

            const result = await response.json();
            dispatch({
                type: ADD_TURN,
                result,
            });
        } catch (error) {
            console.log(error);
        }
    }
};


export const getTurns = () => {

    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REAL_TIME_URL_DB}/turnos.json`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            const result = await response.json();

            if (result && Object.keys(result).length > 0) {
                const turns = Object.keys(result).map((key) => ({
                    ...result[key],
                    id: key,
                }));

                dispatch({
                    type: GET_TURNS,
                    turns,
                });
            } else {
                dispatch({
                    type: NO_TURNS_RETRIEVED,
                });
            }

        } catch (error) {
            console.log(error);
        }

    }
};

export const removeTurn = (id) => ({
    type: REMOVE_TURN,
    id,
});

export const filterTurn = (fecha) => ({

    type: FILTER_TURN,
    fecha
});
export const refreshDate = () => ({
    type: REFRESH_DATE,
});



