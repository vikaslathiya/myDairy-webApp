import CONSTANTS from "../../../Comman/constants";

const InitialState = {loading: false, error: "", data: null}

export const SignUpReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_SIGNUP_REQUEST:
            return {loading: true}
        case CONSTANTS.SIGNUP_USER_SUCCESS:
            return {loading: false, data: action.payload}
        case CONSTANTS.SIGNUP_USER_FAILED:
            return {loading: false, error: action.payload}
        case CONSTANTS.CLEAR_USER_RES:
            return {};
        default:
            return state;
    }
}