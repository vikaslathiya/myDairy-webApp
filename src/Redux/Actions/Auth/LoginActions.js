import CONSTANTS from "../../../Comman/constants";

const loginError = (ShowSnackbar, setLoading) => {
    setTimeout(() => {
        ShowSnackbar('error', "Enter Valid details")
        setLoading(false)
    }, 2000)
}

export const LoginUser = (logIn, allUsers, history, ShowSnackbar, setLoading) => async (dispatch) => {
    dispatch({type: CONSTANTS.GET_LOGIN_REQUEST})
    const {agentCode, userName, role, password} = logIn
    let matchedUser;
    if (role === 'User') {
        matchedUser = allUsers.find(user => user.agentCode === Number(agentCode))
    } else if (role === 'Admin') {
        matchedUser = allUsers.find(user => user.userName === userName)
    }

    if (matchedUser !== undefined) {
        const matchPassword = matchedUser.password === password;
        if (matchPassword) {
            ShowSnackbar('success', 'You successfully LoggedIn!')
            setTimeout(() => {
                localStorage.setItem("userInfo", JSON.stringify(matchedUser));
                localStorage.setItem('isLoggedIn', "true")
                dispatch({type: CONSTANTS.USER_IS_LOGGEDIN, payload: true});
                history.push(role === 'User' ? "/home-page" : '/dashboard');
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