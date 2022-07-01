import React, {Fragment, useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {Typography} from "@mui/material";
import {OrderDateStyle} from "./style";

const OrderDate = (props) => {
    const {orderDate} = props
    const [date, setDate] = useState('')
    const myStyle = OrderDateStyle();

    useEffect(() => {
        const od = new Date(orderDate).toLocaleDateString('en-us', {
            weekday: "long", year: "numeric", month: "short", day: "numeric"
        })
        setDate(od)
    }, [orderDate])

    return (
        <Fragment>
            <Grid item xl={12} md={12} lg={12}>
                <Typography component={'h5'} variant={'h5'} className={myStyle.typography}>
                   Ordered Date: {date}
                </Typography>
            </Grid>
        </Fragment>
    )
}

export default OrderDate;