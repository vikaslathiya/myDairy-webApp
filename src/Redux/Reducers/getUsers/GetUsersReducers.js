import CONSTANTS from "../../../Comman/constants";

const InitialState = {allUsers: null, error: ""}

export const getUsersReducers = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANTS.GET_USER_REQUEST:
            return {UserLoading: true}
        case CONSTANTS.GET_USER_SUCCESS:
            return {UserLoading: false, allUsers: action.payload}
        case CONSTANTS.GET_USER_FAILED:
            return {UserLoading: false, error: action.payload}
        default:
            return state;
    }
}

export const updateUserReducers = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.UPDATE_USER_REQUEST:
            return {updateLoading: true}
        case CONSTANTS.UPDATE_USER_SUCCESS:
            return {updateLoading: false, resMessage: action.payload}
        case CONSTANTS.UPDATE_USER_FAILED:
            return {updateLoading: false, resErrorMessage: action.payload}
        case CONSTANTS.CLEAR_UPDATE_USER_RES :
            return {}
        default:
            return state;
    }
}