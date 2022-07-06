import React, {Fragment} from "react";
import {Paper} from "@material-ui/core";
import {useOrderStyles} from "./style";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../../components/Button";

const PlaceOrder = (props) => {
    const {total, placeOrderHandler} = props;
    const myStyle = useOrderStyles();

    return (
        <Fragment>
            <Paper className={myStyle.footer}>
                <div className={myStyle.amt}>
                    <Typography component="h5" variant="h5">
                        Total Amount
                    </Typography>

                    <Typography component="h5" variant="h5">
                        &#8377; {total}
                    </Typography>
                </div>

                <CustomButton
                    variant="contained"
                    buttonText="Place Order"
                    onclick={placeOrderHandler}
                />
            </Paper>
        </Fragment>
    )
}

export default PlaceOrder;