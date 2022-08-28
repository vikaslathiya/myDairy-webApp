import {Box, Container, List, ListItem, ListItemText} from '@material-ui/core';
import {useStyles} from "./style";
import React, {Fragment, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {GetAllUsers} from "../../../Redux/Actions/getUsers/getAllUsers";
import CustomButton from "../../../components/Button";
import DoneIcon from '@mui/icons-material/Done';

const DisplayAgent = () => {
    const {allUsers} = useSelector(state => state.getUsers)
    const [agentCode, setAgentCode] = useState("")
    const [copied, setCopied] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch(GetAllUsers())
    }, [])

    useEffect(() => {
        if (allUsers) {
            const signUpUser = (allUsers.slice(allUsers.length - 1))[0];
            setAgentCode(signUpUser?.agentCode);
        }
    }, [allUsers])

    const goToLoginPage = (e) => {
        e.preventDefault();
        history.push("/login");
    }

    const copyCodeHandler = () => {
        const code = document.getElementById('agentCode').innerText

        const elem = document.createElement('textarea');
        elem.value = code;
        document.body.appendChild(elem);
        elem.select();
        document.execCommand('copy');
        document.body.removeChild(elem);
        setCopied(true)
    }


    return (
        <Fragment>
            <Container maxWidth="sm" className={classes.container}>
                <h1>Log in with Agent Code</h1>
                <Box className={classes.box}>
                    <List className={classes.listText}>
                        <ListItem>
                            <ListItemText><h3>Agent Code:</h3></ListItemText>
                            <ListItemText id='agentCode'>{agentCode}</ListItemText>
                            <ListItemText onClick={copyCodeHandler}>
                                {copied ? <span className={classes.copy}>
                                    <span className={classes.copiedText}>Copied!</span><DoneIcon/>
                                </span> : <span className={classes.copy}>Copy</span>}
                            </ListItemText>
                        </ListItem>
                    </List>

                    <CustomButton
                        variant="contained"
                        onclick={goToLoginPage}
                        buttonText={"Log In"}
                    />
                </Box>
            </Container>
        </Fragment>
    )
}

export default DisplayAgent;