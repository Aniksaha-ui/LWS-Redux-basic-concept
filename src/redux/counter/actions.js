import { DECREMENT, INCREMENET } from "./actionTypes";

export const incrementCreator = (value) => {
    return {
        type: INCREMENET,
        payload: value,
    };
};

export const decrementCreator = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
