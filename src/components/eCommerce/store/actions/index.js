import * as api from "../api";
import * as types from "./types";

export const loadProducts = search => async dispatch => {
    try {
        dispatch({
            type: types.LOAD_ECOMMERCE_INIT,
        });
        const res = await api.load(search);
        if (res.data.error === false) {
            dispatch({
                type: types.LOAD_ECOMMERCE_SUCCEED,
                payload: res.data.data,
            });
        } else {
            dispatch({
                type: types.LOAD_ECOMMERCE_FAILED,
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.LOAD_ECOMMERCE_FAILED,
        });
    }
};

export const addProduct = product => dispatch => {
    dispatch({
        type: types.ADD_PRODUCT,
        payload: product,
    });
};
