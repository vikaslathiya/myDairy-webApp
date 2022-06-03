import CONSTANTS from "../../../Comman/constants";


export const isLoggedInReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.USER_IS_LOGGEDIN:
            return { loading: false, isLoggedIn: action.payload };
        default:
            return state;
    }
};