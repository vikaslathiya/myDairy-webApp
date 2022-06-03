import axios from "axios";
import CONSTANTS from "../../../Comman/constants";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const SignUpUser = (SignUpData) => async (dispatch) => {
    dispatch({type: CONSTANTS.GET_SIGNUP_REQUEST})
    try {
        const url = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app/users.json`
        const {status} = await axios.post(url, SignUpData, config)

        if (status === 200) {
            dispatch({type: CONSTANTS.SIGNUP_USER_SUCCESS, payload: {status: 200, message: "User SignUp Successfully"}})
        } else {
            dispatch({type: CONSTANTS.SIGNUP_USER_FAILED, payload: "error"})
        }
    } catch (error) {
        dispatch({type: CONSTANTS.SIGNUP_USER_FAILED, payload: "error"})
    }
}

export const ClearResponse = () => {
    return {
        type: CONSTANTS.CLEAR_USER_RES,
    }
}