import axios from "axios";
import CONSTANTS from "../../../Comman/constants";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const domain = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app`


export const GetAllUsers = () => async (dispatch) => {
    const url = `${domain}/users.json`
    const {status, data} = await axios.get(url, config)

    if (status === 200) {
        const allUsers = [];
        for (const key in data) {
            const obj = {
                id: key,
                ...data[key],
            }
            allUsers.push(obj);
        }

        dispatch({type: CONSTANTS.GET_USER_SUCCESS, payload: allUsers})
    } else {
        dispatch({type: CONSTANTS.GET_USER_FAILED, payload: "error"})
    }
}

export const GetAllAdmins = () => async (dispatch) => {
    const url = `${domain}/admin.json`
    const {status, data} = await axios.get(url, config)

    if (status === 200) {
        const allUsers = [];
        for (const key in data) {
            const obj = {
                id: key,
                ...data[key],
            }
            allUsers.push(obj);
        }

        dispatch({type: CONSTANTS.GET_USER_SUCCESS, payload: allUsers})
    } else {
        dispatch({type: CONSTANTS.GET_USER_FAILED, payload: "error"})
    }
}

export const ChangePassword = (id, newPassword) => async (dispatch) => {
    const url = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app/users/:${id}`
    const response = await axios.put(`${url}`, newPassword, config)
    console.log(response)
}