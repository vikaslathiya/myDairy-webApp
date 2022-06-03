import CONSTANTS from "../../../Comman/constants";

const userLogin = {loading: false, userInfo: {}, error: ""};
export const loginReducer = (state = userLogin, action) => {
    switch (action.type) {
        case CONSTANTS.GET_LOGIN_REQUEST:
            return {loading: true}
        case CONSTANTS.LOGIN_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case CONSTANTS.LOGIN_USER_FAILED:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}