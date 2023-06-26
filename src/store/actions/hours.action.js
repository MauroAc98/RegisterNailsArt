import { insertHour, selectHours,deleteHour } from "../../db";
import { hoursTypes } from "../types";

const { ADD_HOUR, GET_HOURS,DELETE_HOUR } = hoursTypes


export const addHour = (fecha) => {

    return async (dispatch) => {
        try {
            const result = await insertHour(fecha);

            dispatch({
                type: ADD_HOUR,
                result,
            });
        } catch (error) {
            console.log(error);
        }
    }
};

export const deleteHr = (id) => {

    return async (dispatch) => {
        try {

            const result = await deleteHour(id);

            dispatch({
                type: DELETE_HOUR,
                result
            });

        } catch (error) {
            console.log(error);
        }

    }
};


export const getHours = () => {

    return async (dispatch) => {
        try {

            const result = await selectHours();

            dispatch({
                type: GET_HOURS,
                result: result?.rows?._array,
            });

        } catch (error) {
            console.log(error);
        }

    }
};




