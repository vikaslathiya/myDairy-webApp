import React, {Fragment, useEffect, useState} from 'react'
import {Grid} from "@mui/material";
import WelcomeSection from "./welcome";
import ServiceSection from "./service";
import {useWelcomeStyle} from "./style";
import LoadingSpin from "../../components/LoadingSpin";
import CustomerCounting from "./customerCounting";


const WelcomePage = () => {
    const [userName, SetUserName] = useState("")
    const [loading, setLoading] = useState(false)
    const loginUser = JSON.parse(localStorage.getItem("userInfo"));
    const myStyle = useWelcomeStyle()

    useEffect(() => {
        setLoading(true)

        if (loginUser) {
            SetUserName(loginUser.name)
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <Fragment>
            <Grid container className={myStyle.mainContainer}>
                {loading && <LoadingSpin/>}
                {!loading && <>
                    <WelcomeSection userName={userName}/>
                    <ServiceSection/>
                    <CustomerCounting/>
                </>}

            </Grid>
        </Fragment>
    )
}

export default WelcomePage;