import { turnsTypes } from "../types";
import { FIREBASE_REAL_TIME_URL_DB } from '../../constants/index';
import { insertImageTurn, deleteImage, selectImage } from '../../db'

const { ADD_TURN, REMOVE_TURN, FILTER_TURN, REFRESH_DATE, GET_TURNS, NO_TURNS_RETRIEVED, GET_IMAGE } = turnsTypes


export const addTurn = (turn, image) => {

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

            if (image.trim() !== '') {
                await insertImageTurn(image, result.name);
            }
            dispatch({
                type: ADD_TURN,
                result,
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const getImage = (id) => {
    return async (dispatch) => {
        try {
            const result = await selectImage(id);

            dispatch({
                type: GET_IMAGE,
                result: result?.rows?._array,
            });
        } catch (error) {
            console.log(error);
        }
    };
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


export const deleteTurn = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${FIREBASE_REAL_TIME_URL_DB}/turnos/${id}.json`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            await response.json();

            await deleteImage(id);

            dispatch({
                type: REMOVE_TURN,
                id,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const filterTurn = (fecha) => ({
    type: FILTER_TURN,
    fecha
});
export const refreshDate = (data) => ({
    type: REFRESH_DATE,
    data
});



