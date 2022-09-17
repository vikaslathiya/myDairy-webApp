import React, {Fragment, useEffect, useState} from "react";
import ScreenTitle from "../../../components/ScreenTitle";
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import {Grid, ListItemText, Typography} from "@mui/material";
import CustomTextField from "../../../components/TextField";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import CustomButton from "../../../components/Button";
import {useUsersStyles} from "./style";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addAdminUser, GetAllUsers} from "../../../Redux/Actions/getUsers/getAllUsers";
import {ClearResponse, SignUpUser} from "../../../Redux/Actions/Auth/SignUpActions";
import LoadingSpin from "../../../components/LoadingSpin";
import CustomizedSnackbars from "../../../components/Snackbar";

import CircularProgress from '@mui/material/CircularProgress';

const AddUser = () => {
    const [passwordHide, setPasswordHide] = useState(true)
    const [isFoundMobile, setIsFoundMobile] = useState(false)
    const [addedData, setAddedData] = useState({role: 'User'})
    const [isErrors, setIsErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [snackbarType, setSnackbarType] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    const myStyle = useUsersStyles();

    const {allUsers, UserLoading} = useSelector(state => state.getUsers)
    const {data, error, loadingSignUp} = useSelector(state => state.signUpUser)

    useEffect(() => {
        if (addedData?.role === 'User') {
            dispatch(GetAllUsers())
        }
    }, [addedData?.mobileNo])

    useEffect(() => {
        if (data?.status === 200) {
            ShowSnackbar('success', 'User added Successfully')
            setTimeout(() => {
                history.push("/users");
                setLoading(false)
            }, 3000)
        }
        dispatch(ClearResponse())
    }, [data, error, loadingSignUp])

    const ShowSnackbar = (type, message) => {
        setSnackbarMessage(message);
        setSnackbarType(type)
    }

    const onBackHandler = () => {
        history.push('/users')
    }

    const passwordVisibilityHandler = () => {
        setPasswordHide(!passwordHide)
    }

    const inputChangeHandler = (e) => {
        const error = isErrors
        if (error[e.target.name]) {
            delete error[e.target.name]
        }
        setIsErrors(error)
        // console.log('addedData', e.target.name)
        if (addedData?.role === 'User' && e.target.name === 'mobileNo') {
            // dispatch(GetAllUsers())
            const matchedMobile = allUsers.find(user => user.mobileNo === e.target.value);
            console.log('matchedMobile', matchedMobile, e.target.value.length === 10)
            if (e.target.value.length === 10 && matchedMobile === undefined) {
                setIsFoundMobile(false)
                console.log('tempData...', e.target.value)
                setAddedData({...addedData, [e.target.name]: e.target.value})
            } else if (e.target.value.length === 10 && matchedMobile !== undefined) {
                setIsFoundMobile(true)
            }
        }
        setAddedData({...addedData, [e.target.name]: e.target.value})
    }

    const checkAllInputs = (data) => {
        let error = {};
        if (!data?.name || data?.name === '') {
            error.name = true;
        }
        if (!data?.password || data?.password === '') {
            error.password = true;
        }
        if (data?.role === 'User' && (!data?.mobileNo || data?.mobileNo === '' || data?.mobileNo?.length !== 10)) {
            error.mobileNo = true;
        }
        if (data?.role === 'Admin' && (!data?.userName || data?.userName === '')) {
            error.userName = true;
        }
        setIsErrors(error)
        return error;
    }

    const onFormSubmitHandler = () => {
        const checkData = checkAllInputs(addedData)
        const isValidated = Object.keys(checkData).length === 0
        if (isValidated && addedData?.role === 'User' && !isFoundMobile) {
            const tempData = addedData;
            if (addedData?.userName) {
                delete tempData?.userName;
            }
            let newAgentCode = 1001;
            tempData.agentCode = newAgentCode
            if (allUsers?.length !== 0) {
                newAgentCode = allUsers[allUsers?.length - 1].agentCode + 1;
                tempData.agentCode = newAgentCode
            }
            setLoading(true)
            dispatch(SignUpUser(tempData))
            console.log('addedData...', tempData)
        } else if (isValidated && addedData?.role === 'Admin') {
            const tempData = addedData;
            if (addedData?.agentCode) {
                delete tempData?.agentCode;
            }
            if (addedData?.mobileNo) {
                delete tempData?.mobileNo;
            }
            setLoading(true)
            dispatch(addAdminUser(tempData))
            console.log('addedData...', tempData)
        }
    }

    return (
        <Fragment>
            <ScreenTitle title={'Add User'}/>

            {loading && <LoadingSpin/>}

            {!loading && <Card raised style={{margin: 'auto', padding: 20, marginTop: 30, width: '60%'}}>
                <Grid container spacing={2} margin={'auto'}>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>User Role:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name={'role'}
                                    onChange={(e) => inputChangeHandler(e)}
                                    defaultValue={'User'}
                                    // value={productData?.status}
                                >
                                    <FormControlLabel
                                        value="User"
                                        control={<Radio color={'primary'}/>}
                                        label="User"
                                    />
                                    <FormControlLabel
                                        value="Admin"
                                        control={<Radio color={'primary'}/>}
                                        label="Admin"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Name:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                fullWidth
                                name={'name'}
                                variant={'outlined'}
                                error={isErrors?.name}
                                onchange={inputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    {addedData?.role === 'User' && <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Contact No.:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                type={'number'}
                                fullWidth
                                name={'mobileNo'}
                                variant={'outlined'}
                                error={isFoundMobile || isErrors?.mobileNo}
                                helperText={isFoundMobile ? 'Entered Mobile No. is already registered!' : ''}
                                onchange={inputChangeHandler}
                                endIcon={UserLoading && <CircularProgress size={20}/>}
                                // inputProps={{inputMode: 'numeric', pattern: "[0-9]*"}}
                                inputProps={{step: 10}}
                            />
                        </Grid>
                        <Grid item lg={2} md={2} sm={2}
                              style={{marginLeft: 5, display: 'flex', alignItems: 'center'}}>
                            {addedData?.mobileNo && addedData?.mobileNo?.length === 10 && !isFoundMobile && !UserLoading &&
                            <VerifiedIcon style={{color: 'green'}}/>}
                            {addedData?.mobileNo && addedData?.mobileNo?.length === 10 && !UserLoading && isFoundMobile &&
                            <CancelIcon style={{color: 'red'}}/>}
                        </Grid>
                    </Grid>}
                    {addedData?.role === 'Admin' && <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Username:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                fullWidth
                                name={'userName'}
                                error={isErrors?.userName}
                                variant={'outlined'}
                                // value={productData?.price}
                                onchange={inputChangeHandler}
                            />
                        </Grid>
                    </Grid>}
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Password:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                fullWidth
                                type={passwordHide ? 'password' : 'text'}
                                name={'password'}
                                error={isErrors?.password}
                                variant={'outlined'}
                                endIcon={passwordHide ?
                                    <VisibilityIcon onClick={passwordVisibilityHandler}
                                                    style={{cursor: 'pointer'}}
                                    /> :
                                    <VisibilityOffIcon onClick={passwordVisibilityHandler}
                                                       style={{cursor: 'pointer'}}
                                    />}
                                // value={productData?.product}
                                onchange={inputChangeHandler}
                            />
                        </Grid>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} className={myStyle.btnGrid} marginLeft={'25%'}>
                        <CustomButton
                            variant={'contained'}
                            buttonText={'Submit'}
                            onclick={onFormSubmitHandler}
                            // disabled={disabledBtn}
                        />
                        <CustomButton
                            variant={'outlined'}
                            buttonText={'Back'}
                            onclick={onBackHandler}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={5} marginTop={6}>
                    <Grid item lg={12} md={12} sm={12} justifyContent={'center'} display={'flex'}>
                        <Typography variant={'subtitle1'} component={'h1'} color={'red'}>
                            <Typography variant={'subtitle1'} component={'span'}
                                        style={{fontWeight: 'bold', marginRight: 5}}>
                                Note:
                            </Typography>
                            For "User" role, Agent code will be
                            generated automatically when submit all
                            details.
                        </Typography>
                    </Grid>
                </Grid>
            </Card>}

            <CustomizedSnackbars type={snackbarType} message={snackbarMessage} duration={2000}/>
        </Fragment>
    )
}

export default AddUser;