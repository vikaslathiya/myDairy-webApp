import React, {Fragment} from "react";
import {Grid, Typography} from "@mui/material";
import CustomButton from "../../../components/Button";
import {useWelcomeStyle} from "./style";
import {useHistory} from "react-router-dom";

const WelcomeSection = (props) => {
    const myStyle = useWelcomeStyle()
    const history = useHistory()
    return (
        <Fragment>
            <Grid item md={12} lg={12} sm={12}>
                <div className={myStyle.welcome}>
                    <Typography component={'h2'} variant={'h2'} className="h-primary">
                        Welcome, {props.userName} to myDairy.com
                    </Typography>
                    <Typography component={'p'} variant={'p'}>
                        Lorem ipsum dolor sit amet consecrated animistic elite. Inventor impediment antique perspicuity
                        door
                    </Typography>
                    <Typography component={'p'} variant={'p'}>
                        Lorem ipsum dolor sit amet consecrated animistic elite.
                    </Typography>
                    <div className={'orderButton'}>
                        <CustomButton buttonText='Order Now' onclick={() => history.push('/new-order')}/>
                    </div>

                </div>
            </Grid>
        </Fragment>
    )
}

export default WelcomeSection;