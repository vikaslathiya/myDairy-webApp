import CONSTANTS from "../../../Comman/constants";
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const addedQtyAction = (data) => {
    return {
        type: CONSTANTS.ADDED_QUANTITY,
        payload: data
    }
}

export const placeOrderAction = (data) => async (dispatch) => {
    dispatch({type: CONSTANTS.PLACE_ORDER_REQUEST})

    const userInfo = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : ""
    // let url = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app/users/${userInfo.id}/user-orders.json/`
    let url = `/users/${userInfo.id}/user-orders.json/`

    try {
        const res = await axios.post(url, data, config)
        console.log(res)

        if (res?.status === 200) {
            dispatch({
                type: CONSTANTS.PLACE_ORDER_SUCCESS,
                payload: res?.data
            })
        } else {
            dispatch({
                type: CONSTANTS.PLACE_ORDER_FAILED,
                payload: res?.error
            })
        }

    } catch (err) {
        dispatch({
            type: CONSTANTS.PLACE_ORDER_FAILED,
            payload: err
        })
    }
}

export const clearPostRequest = () => {
    return {
        type: CONSTANTS.CLEAR_POST_REQUEST,
    }
}

export const getAllOrdersAction = () => async (dispatch) => {
    dispatch({type: CONSTANTS.GET_ALL_ORDERS_REQUEST})

    const userInfo = JSON.parse(localStorage.getItem('userInfo')) ? JSON.parse(localStorage.getItem('userInfo')) : ""
    let url = `/users/${userInfo.id}/user-orders.json/`

    try {
        const res = await axios.get(url, config)
        const {data, status, error} = res

        if (status === 200) {
            const allOrders = [];
            for (const key in data) {
                const obj = {
                    id: key,
                    items: data[key],
                }
                allOrders.push(obj);
            }

            dispatch({
                type: CONSTANTS.GET_ALL_ORDERS_SUCCESS,
                payload: allOrders
            })
        } else {
            dispatch({
                type: CONSTANTS.GET_ALL_ORDERS_FAILED,
                payload: error
            })
        }

    } catch (err) {
        dispatch({
            type: CONSTANTS.GET_ALL_ORDERS_FAILED,
            payload: err
        })
    }
}