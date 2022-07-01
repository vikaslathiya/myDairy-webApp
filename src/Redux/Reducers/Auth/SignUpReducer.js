import CONSTANTS from "../../../Comman/constants";

const InitialState = {loading: false, error: "", data: null}

export const SignUpReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_SIGNUP_REQUEST:
            return {loadingSignUp: true}
        case CONSTANTS.SIGNUP_USER_SUCCESS:
            return {loadingSignUp: false, data: action.payload}
        case CONSTANTS.SIGNUP_USER_FAILED:
            return {loadingSignUp: false, error: action.payload}
        case CONSTANTS.CLEAR_USER_RES:
            return {};
        default:
            return state;
    }
}