import {Fragment} from "react";
import {Box, Typography} from "@mui/material";
import {Paper} from "@material-ui/core";
import {useTitleStyles} from "./style";

const ScreenTitle = (props) => {
    const myStyle = useTitleStyles()
    return (
        <Fragment>
            <Box component={Paper} className={myStyle.mainBox}>
                <div className={myStyle.divider}>{''}</div>
                <Typography component={'h3'} variant={'h3'} className={myStyle.typography}>
                    {props.title}
                </Typography>
            </Box>

        </Fragment>
    )
}

export default ScreenTitle;