import CONSTANTS from "../../../Comman/constants";

export const LoginUser = (agentCode, password, allUsers, history, ShowSnackbar) => async (dispatch) => {
    dispatch({type: CONSTANTS.GET_LOGIN_REQUEST})

    const matchedUser = allUsers.find(user => user.agentCode === Number(agentCode))

    if (matchedUser !== undefined) {
        const matchPassword = matchedUser.password === password;
        if (matchPassword) {
            ShowSnackbar('success', 'You successfully LoggedIn!')
            setTimeout(() => {
                localStorage.setItem("userInfo", JSON.stringify(matchedUser));
                localStorage.setItem('isLoggedIn', "true")
                dispatch({type: CONSTANTS.USER_IS_LOGGEDIN, payload: true});
                history.push("/home-page");
            }, 3000)
        } else ShowSnackbar('error', "Enter Valid details")

    } else ShowSnackbar('error', "Enter Valid details")
}

export const logoutUser = (history) => (dispatch) => {
    localStorage.removeItem("userInfo")
    localStorage.removeItem("isLoggedIn")
    history.push("/login");
    dispatch({
        type: CONSTANTS.USER_IS_LOGGEDIN,
        payload: false
    });
};