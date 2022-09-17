import React, {Fragment, useEffect, useState} from "react";
import ScreenTitle from "../../../components/ScreenTitle";
import {Grid, ListItemText, Typography} from "@mui/material";
import CustomButton from "../../../components/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LoadingSpin from "../../../components/LoadingSpin";
import {useUsersStyles} from "./style";
import InputListTable from "../../../components/InputListTable";
import {useDispatch, useSelector} from "react-redux";
import {clearUpdateRes, GetAllAdmins, GetAllUsers, updateUserAction} from "../../../Redux/Actions/getUsers/getAllUsers";
import CustomDialog from "../../../components/Dialog";
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import CustomTextField from "../../../components/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import VerifiedIcon from "@mui/icons-material/Verified";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import CustomizedSnackbars from "../../../components/Snackbar";

const Users = () => {
    const myStyle = useUsersStyles()
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [editedData, setEditedData] = useState({})
    const [filterRole, setFilterRole] = useState('user')
    const [passwordHide, setPasswordHide] = useState(true)
    const [snackbarType, setSnackbarType] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [rows, setRows] = useState([])
    const [circularLoader, setCircularLoader] = useState(false)

    const {allUsers, UserLoading} = useSelector(state => state.getUsers)
    const {resMessage, resErrorMessage, updateLoading} = useSelector(state => state.updateUser)

    useEffect(() => {
        dispatch(GetAllUsers())
    }, [])

    useEffect(() => {
        setLoading(UserLoading)
        if (allUsers) {
            console.log(allUsers)
            setRows(allUsers)
        }
    }, [allUsers, UserLoading])

    useEffect(() => {
        setCircularLoader(updateLoading)
        if (resMessage) {
            ShowSnackbar('success', resMessage)
            // console.log('resMessage', resMessage)
            setOpenEdit(false)
            dispatch(GetAllUsers())
        } else if (resErrorMessage) {
            ShowSnackbar('error', resErrorMessage)
        }

        return () => {
            setTimeout(() => {
                dispatch(clearUpdateRes())
            }, 3000)

        }
    }, [resMessage, resErrorMessage, updateLoading])

    const ShowSnackbar = (type, message) => {
        setSnackbarMessage(message);
        setSnackbarType(type)
    }

    const passwordVisibilityHandler = () => {
        setPasswordHide(!passwordHide)
    }

    const onFilterUsersHandler = () => {
        setFilterRole('user')
        dispatch(GetAllUsers())
    }

    const onFilterAdminHandler = () => {
        setFilterRole('admin')
        dispatch(GetAllAdmins())
    }

    const newUserHandler = () => {
        history.push('/add-user')
    }

    const createColumn = (id, title) => {
        if (filterRole === 'admin' && (id === 'user-orders' || id === 'mobileNo')) {
            return;
        } else {
            return {_id: id, title: title}
        }
    }

    const editUserHandler = (data) => {
        setOpenEdit(true)
        console.log('edit...', data)
        setEditedData(data)
    }

    const inputChangeHandler = (e) => {
        // const error = isErrors
        // if (error[e.target.name]) {
        //     delete error[e.target.name]
        // }
        // setIsErrors(error)
        // console.log('addedData', e.target.name)
        if (editedData?.role === 'User' && e.target.name === 'mobileNo') {
            const matchedMobile = allUsers.find(user => user.mobileNo === e.target.value);
            if (e.target.value.length === 10 && matchedMobile === undefined) {
                // setIsFoundMobile(false)
                console.log('tempData...', e.target.value)
                setEditedData({...editedData, [e.target.name]: e.target.value})
            } else if (e.target.value.length === 10 && matchedMobile !== undefined) {
                // setIsFoundMobile(true)
            }
        }
        setEditedData({...editedData, [e.target.name]: e.target.value})
    }

    const onUpdateHandler = () => {
        if (filterRole === 'user') {
            dispatch(updateUserAction(editedData))
        } else if (filterRole === 'admin') {

        }
    }

    const editForm = (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                <Grid item lg={3} md={3} sm={3}>
                    <ListItemText className={myStyle.label}>Name:</ListItemText>
                </Grid>
                <Grid item lg={8} md={8} sm={8}>
                    <CustomTextField
                        fullWidth
                        name={'name'}
                        variant={'outlined'}
                        defaultValue={editedData?.name}
                        // error={isErrors?.name}
                        onchange={inputChangeHandler}
                    />
                </Grid>
            </Grid>
            {filterRole === 'user' && <>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Agent Code:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <CustomTextField
                            fullWidth
                            name={'agentCode'}
                            variant={'outlined'}
                            defaultValue={editedData?.agentCode}
                            // error={isErrors?.name}
                            onchange={inputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Contact No.:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <CustomTextField
                            type={'number'}
                            fullWidth
                            name={'mobileNo'}
                            variant={'outlined'}
                            defaultValue={editedData?.mobileNo}
                            // error={isFoundMobile || isErrors?.mobileNo}
                            // helperText={isFoundMobile ? 'Entered Mobile No. is already registered!' : ''}
                            onchange={inputChangeHandler}
                            endIcon={UserLoading && <CircularProgress size={20}/>}
                        />
                    </Grid>
                </Grid>
            </>}
            {/*    <Grid item lg={2} md={2} sm={2}*/}
            {/*          style={{marginLeft: 5, display: 'flex', alignItems: 'center'}}>*/}
            {/*        /!*{addedData?.mobileNo && addedData?.mobileNo?.length === 10 && !isFoundMobile && !UserLoading &&*!/*/}
            {/*        /!*<VerifiedIcon style={{color: 'green'}}/>}*!/*/}
            {/*        /!*{addedData?.mobileNo && addedData?.mobileNo?.length === 10 && !UserLoading && isFoundMobile &&*!/*/}
            {/*        /!*<CancelIcon style={{color: 'red'}}/>}*!/*/}
            {/*    </Grid>*/}
            {/*</Grid>}*/}
            {filterRole === 'admin' && <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                <Grid item lg={3} md={3} sm={3}>
                    <ListItemText className={myStyle.label}>Username:</ListItemText>
                </Grid>
                <Grid item lg={8} md={8} sm={8}>
                    <CustomTextField
                        fullWidth
                        name={'userName'}
                        // error={isErrors?.userName}
                        variant={'outlined'}
                        defaultValue={editedData?.userName}
                        onchange={inputChangeHandler}
                    />
                </Grid>
            </Grid>}
            <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                <Grid item lg={3} md={3} sm={3}>
                    <ListItemText className={myStyle.label}>Password:</ListItemText>
                </Grid>
                <Grid item lg={8} md={8} sm={8}>
                    <CustomTextField
                        fullWidth
                        type={passwordHide ? 'password' : 'text'}
                        name={'password'}
                        defaultValue={editedData?.password}
                        // error={isErrors?.password}
                        variant={'outlined'}
                        endIcon={passwordHide ?
                            <VisibilityIcon
                                onClick={passwordVisibilityHandler}
                                style={{cursor: 'pointer'}}
                            /> :
                            <VisibilityOffIcon
                                onClick={passwordVisibilityHandler}
                                style={{cursor: 'pointer'}}
                            />}
                        onchange={inputChangeHandler}
                    />
                </Grid>
            </Grid>
        </Grid>
    )

    const columns = [
        createColumn('name', 'Name'),
        createColumn(filterRole === 'user' ? 'agentCode' : 'userName', filterRole === 'user' ? 'Agent Code' : 'Username'),
        // createColumn('password', 'Password'),
        createColumn('mobileNo', 'Contact No.'),
        createColumn('role', 'User Role'),
        createColumn('user-orders', 'No. Of Orders'),
        createColumn('actions', 'Actions'),
    ]

    return (
        <Fragment>
            <ScreenTitle title={'Users'}/>

            <Grid container spacing={1} marginBottom={10}>
                <Grid item lg={6} md={6} sm={6} className={myStyle.btnGrid} marginBottom={2}
                      justifyContent={'flex-start'}>
                    <CustomButton
                        variant={filterRole === 'user' ? 'outlined' : 'contained'}
                        buttonText={'User'}
                        size={'small'}
                        onclick={onFilterUsersHandler}
                    />
                    <CustomButton
                        variant={filterRole === 'admin' ? 'outlined' : 'contained'}
                        buttonText={'Admin User'}
                        onclick={onFilterAdminHandler}
                    />
                </Grid>
                <Grid item lg={6} md={6} sm={6} className={myStyle.btnGrid} marginBottom={2}
                      justifyContent={'flex-end'}>
                    <CustomButton
                        variant={'contained'}
                        startIcon={<AddOutlinedIcon/>}
                        buttonText={'New User'}
                        onclick={newUserHandler}
                    />
                </Grid>

                {loading && <LoadingSpin/>}

                {!loading && <InputListTable tableData={rows} columns={columns} editAction={editUserHandler}/>}

                {!loading && <CustomDialog
                    dialogTitle={`Update ${filterRole === 'admin' ? 'Admin' : ''} User Information`}
                    visibility={openEdit}
                    loader={circularLoader}
                    changeVisibility={setOpenEdit}
                    dialogContent={editForm}
                    updateAction={onUpdateHandler}
                />}
            </Grid>

            <CustomizedSnackbars type={snackbarType} message={snackbarMessage} duration={2000}/>
        </Fragment>
    )
}

export default Users;