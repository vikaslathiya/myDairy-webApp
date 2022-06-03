import CONSTANTS from "../../../Comman/constants";
const InitialState = {allUsers: null, error: ""}

export const getUsersReducers = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_USER_SUCCESS:
            return {allUsers: action.payload}
        case CONSTANTS.GET_USER_FAILED:
            return {error: action.payload}
        default:
            return state;
    }
}