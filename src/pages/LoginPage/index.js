import React, {Fragment, useEffect, useState} from 'react';

import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {ClearResponse, SignUpUser} from "../../Redux/Actions/Auth/SignUpActions";
import {GetAllUsers} from "../../Redux/Actions/getUsers/getAllUsers";
import {LoginUser} from "../../Redux/Actions/Auth/LoginActions";

import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import CustomTextField from "../../components/TextField";
import CustomButton from "../../components/Button";
import {useLogInStyle} from "./style";
import CustomizedSnackbars from "../../components/Snackbar";
import LoadingSpin from "../../components/LoadingSpin";


const LoginPage = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const myStyle = useLogInStyle();

    const [isLogIn, setIsLogin] = useState(true);
    const [userInput, setUserInput] = useState({})
    const [snackbarType, setSnackbarType] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [loading, setLoading] = useState(false)


    const {allUsers} = useSelector(state => state.getUsers)
    const {data, error, loadingSignUp} = useSelector(state => state.signUpUser)


    useEffect(() => {
        dispatch(GetAllUsers())
    }, [])

    useEffect(() => {
        if (snackbarType !== '') {
            setTimeout(() => {
                setSnackbarType('')
            }, 2500)
        }
    }, [snackbarType])

    useEffect(() => {
        if (data?.status === 200) {
            ShowSnackbar('success', data?.message)
            setTimeout(() => {
                history.push("/display-agentCode");
                setLoading(false)
            }, 3000)
        }
        dispatch(ClearResponse())
    }, [data, error, loadingSignUp])

    const signUpHandler = (e) => {
        e.preventDefault();
        setIsLogin(!isLogIn);
    }

    const ShowSnackbar = (type, message) => {
        setSnackbarMessage(message);
        setSnackbarType(type)
    }

    const inputChangeHandler = (e, textField) => {
        setUserInput({...userInput, [textField]: e.target.value})
    }

    const userAuthHandler = () => {
        setLoading(true)
        if (isLogIn) {

            const {agentCode, password} = userInput
            dispatch(LoginUser(agentCode, password, allUsers, history, ShowSnackbar, setLoading))

        } else {

            const matchedMobile = allUsers.find(user => user.mobileNo === userInput?.mobileNo);
            const code = Math.trunc(Math.random() * 100000)
            console.log(userInput, matchedMobile)

            if (matchedMobile === undefined && userInput?.name !== undefined && userInput?.password !== undefined && userInput?.mobileNo !== undefined) {
                dispatch(SignUpUser({...userInput, agentCode: code}))

            } else if (matchedMobile !== undefined) {
                ShowSnackbar('error', 'Entered Mobile No. already registered!')

            } else ShowSnackbar('error', "Enter Valid details")
        }
    }


    return (
        <Fragment>
            {loading && <LoadingSpin/>}
            {!loading && <Grid container className={myStyle.container}>
                <Grid item lg={12} md={12} xs={12}>
                    <Typography variant={'h3'} component={'h3'} align={'center'} className={myStyle.heading}>
                        myDairy
                    </Typography>
                </Grid>

                <Grid item lg={12} md={12} xs={12} className={myStyle.form}>
                    {isLogIn && <CustomTextField
                        fullWidth
                        autoFocus
                        label="Agent Code"
                        onchange={(e) => inputChangeHandler(e, "agentCode")}
                    />}

                    {!isLogIn && <CustomTextField
                        fullWidth
                        autoFocus
                        label="Full Name"
                        onchange={(e) => inputChangeHandler(e, "name")}
                    />}

                    {!isLogIn && <CustomTextField
                        fullWidth
                        label="Mobile No."
                        onchange={(e) => inputChangeHandler(e, "mobileNo")}
                    />}

                    <CustomTextField
                        fullWidth
                        type='password'
                        label="Password"
                        onchange={(e) => inputChangeHandler(e, "password")}
                    />

                </Grid>

                <Grid item lg={12} md={12} xs={12} className={myStyle.btn}>
                    <CustomButton
                        fullWidth
                        variant="contained"
                        onclick={userAuthHandler}
                        buttonText={isLogIn ? "Log In" : "Sign Up"}
                    />
                </Grid>

                <Grid item lg={12} md={12} xs={12} className={myStyle.footer}>
                    <Typography variant={'div'} component={'div'} align={'center'}>
                        {isLogIn && <>
                            <span className={myStyle.footerText}>
                                Forget Password?
                            </span> | <span className={myStyle.footerText} onClick={signUpHandler}>
                            Sign Up
                            </span>
                        </>}

                        {!isLogIn &&
                        <span className={myStyle.footerText} onClick={signUpHandler}>If already have account</span>}
                    </Typography>
                </Grid>
            </Grid>}

            <CustomizedSnackbars type={snackbarType} message={snackbarMessage} duration={2000}/>
        </Fragment>
    )
}

export default LoginPage;