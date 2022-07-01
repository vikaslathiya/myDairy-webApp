import {Fragment, useEffect, useState} from "react";
import {Card, CardMedia, Paper} from "@material-ui/core";

import {useItemCardStyles} from "./style";
import {CardContent} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../Button";
import CustomTextField from "../TextField";
// import {useDispatch, useSelector} from "react-redux";
// import {addedQtyAction} from "../../Redux/Actions/OrderAction/orderActions";

const ItemCard = (props) => {
    const {
        itemName,
        img,
        amount,
        id,
        totalQty,
        increaseHandler,
        decreaseHandler,
        increaseDisable,
        decreaseDisable
    } = props;
    // const [totalQty, setTotalQty] = useState(0);
    // const {addedQty} = useSelector(state => state.addedQty)
    const classes = useItemCardStyles();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const allreadyPresent = addedQty?.[id]
    //     if (allreadyPresent === undefined && totalQty > 0) {
    //         dispatch(addedQtyAction({...addedQty, [id]: totalQty}))
    //
    //     } else if (allreadyPresent !== undefined) {
    //         if (totalQty === 0) {
    //             delete addedQty?.[id]
    //             dispatch(addedQtyAction({...addedQty}))
    //             return;
    //         }
    //         dispatch(addedQtyAction({...addedQty, [id]: totalQty}))
    //     }
    // }, [totalQty])

    // const decreaseHandler = () => {
    //     setTotalQty(totalQty - 1)
    //     // setTotalQty(totalQty === 0 ? 0 : totalQty - 1)
    // }
    //
    // const increaseHandler = () => {
    //     setTotalQty(totalQty + 1)
    //     // setTotalQty(totalQty === 10 ? 10 : totalQty + 1)
    // }

    return (
        <Fragment>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.cover}
                    image={img}
                    title={itemName}
                />

                <CardContent>
                    <Typography component="h4" variant="h4" className={classes.itemName}>
                        {itemName}
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                        &#8377; {amount}
                    </Typography>

                    <Paper className={classes.paper}>
                        <CustomButton
                            variant='contained'
                            buttonText="-"
                            onclick={() => decreaseHandler(id)}
                            disabled={decreaseDisable}
                        />

                        <CustomTextField
                            variant='outlined'
                            type='number'
                            value={totalQty}
                        />

                        <CustomButton
                            variant='contained'
                            buttonText="+"
                            onclick={() => increaseHandler(id)}
                            disabled={increaseDisable}
                        />
                    </Paper>
                </CardContent>

                <CardContent className={classes.secContent}>

                    <div className={classes.qtyBox}>
                        <Typography component="h5" variant="h5" className={classes.itemName}>
                            Qty:
                        </Typography>

                        <Typography component="h5" variant="h5" color="textSecondary">
                            {totalQty}
                        </Typography>
                    </div>

                    <Typography component="h5" variant="h5" className={classes.itemName}>
                        Total Amt
                    </Typography>

                    <Typography component="h5" variant="h5" color="textSecondary">
                        &#8377; {totalQty * amount}
                    </Typography>

                </CardContent>
            </Card>
        </Fragment>
    )
}

export default ItemCard;