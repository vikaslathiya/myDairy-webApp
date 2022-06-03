import React, {Fragment, useEffect, useState} from 'react'
import {Container, makeStyles} from '@material-ui/core';


const WelcomePage = () => {
    const [userName, SetUserName] = useState("")
    const loginUser = JSON.parse(localStorage.getItem("userInfo"));

    useEffect(() => {
        if (loginUser) {
            SetUserName(loginUser.name)
        }
    }, [])

    const useStyled = makeStyles(() => ({
        container: {
            textAlign: "center",
            marginTop: "8%",
            fontFamily: "system-ui",
            fontSize: "1.2rem",
        }
    }));
    const classes = useStyled();

    return (
        <Fragment>
            <Container className={classes.container} maxWidth="sm">
                <h2>Welcome, {userName}</h2>
                <h3>to myDairy App</h3>
            </Container>
        </Fragment>
    )
}

export default WelcomePage;