import CONSTANTS from "../../../Comman/constants";

const loginError = (ShowSnackbar, setLoading) => {
    setTimeout(() => {
        ShowSnackbar('error', "Enter Valid details")
        setLoading(false)
    }, 2000)
}

export const LoginUser = (agentCode, password, allUsers, history, ShowSnackbar, setLoading) => async (dispatch) => {
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
                setLoading(false)
            }, 3000)
        } else loginError(ShowSnackbar, setLoading)

    } else loginError(ShowSnackbar, setLoading)
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