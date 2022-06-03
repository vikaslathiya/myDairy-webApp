import {Box, Container, Grid, Input, InputBase, List, ListItem, ListItemText, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import React, {Fragment, useEffect, useState} from 'react'
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {ChangePassword} from "../../Redux/Actions/getUsers/getAllUsers";

const UserProfile = () => {
    const loginUser = JSON.parse(localStorage.getItem("userInfo"));
    const [user, setUser] = useState({
        agentCode: "",
        mobileNo: "",
        name: "",
        password: ""
    })
    const [changePassword, setChangePassword] = useState(loginUser);
    const dispatch = useDispatch();

    useEffect(() => {
        setUser({
            agentCode: loginUser.agentCode,
            mobileNo: loginUser.mobileNo,
            name: loginUser.name,
            password: loginUser.password
        })
    }, [loginUser])

    const useStyles = makeStyles(() => ({
        container: {
            padding: "15px",
            textAlign: "center"
        },
        listText: {
            "& .MuiListItem-root": {
                padding: 0,
                margin: "20px 0",
            },
            "& .MuiListItem-root .MuiListItemText-root:nth-child(1)": {
                maxWidth: "160px",
                "& .MuiTypography-root": {
                    fontSize: "16px",
                    fontWeight: 600,
                },
            },
            "& .MuiListItem-root .MuiListItemText-root:nth-child(2)": {
                maxWidth: "fit-content",
            },
        },
        box: {
            boxShadow: "0 0 4px black",
            width: "90%",
            borderRadius: "10px",
            padding: "0 60px",
            margin: "auto",
            "& h1": {
                padding: "20px 10px",
                marginBottom: "0px",
            }
        },
    }))
    const classes = useStyles();

    const changePasswordHandler = (e) => {
        setChangePassword({...changePassword, password: e.target.value})
    }
    console.log(changePassword)

    const handleChangeNewPassword = () => {
        dispatch(ChangePassword(changePassword.id, changePassword))
    }
    return (
        <Fragment>
            <Grid container style={{justifyContent: "center"}}>
                <Grid item xs={12} md={6} lg={6}>
                    <Container maxWidth="sm" className={classes.container}>
                        <Box className={classes.box}>
                            <h1>My Profile</h1>
                            <List className={classes.listText}>
                                <ListItem>
                                    <ListItemText>Agent Code:</ListItemText>
                                    <ListItemText>{user?.agentCode}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Name:</ListItemText>
                                    <ListItemText>{user?.name}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Mobile No.:</ListItemText>
                                    <ListItemText>{user?.mobileNo}</ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemText>Password:</ListItemText>
                                    <ListItemText>{user?.password}</ListItemText>
                                </ListItem>
                            </List>
                        </Box>
                    </Container>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                    <Container maxWidth="sm" className={classes.container}>
                        <Box className={classes.box}>
                            <h1>Change Password</h1>
                            <List className={classes.listText}>
                                <ListItem>
                                    <ListItemText>Password:</ListItemText>
                                    <ListItemText><Input type={"password"}
                                                         onChange={changePasswordHandler}/></ListItemText>

                                </ListItem>
                                <ListItem>
                                    <ListItemText>Confirm Password:</ListItemText>
                                    <ListItemText><Input type={"password"}/></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <Button variant="contained" onClick={handleChangeNewPassword}>
                                        Change Password
                                    </Button>
                                </ListItem>
                            </List>
                        </Box>
                    </Container>
                </Grid>

            </Grid>

        </Fragment>
    )
}

export default UserProfile;