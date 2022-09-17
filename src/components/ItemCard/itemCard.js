import React, {Fragment, useEffect, useState} from "react";
import {Card, CardActions, CardMedia, Grid, Paper, Tooltip} from "@material-ui/core";

import {useItemCardStyles} from "./style";
import {Box, CardContent} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import CustomButton from "../Button";
import CustomTextField from "../TextField";
import {logDOM} from "@testing-library/react";
import Stack from "@mui/material/Stack";
import IconButton from "@material-ui/core/IconButton";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
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
        decreaseDisable,
        status,
        editAction
    } = props;
    const classes = useItemCardStyles({
        itemStatusColor: status === 'Active' ? 'green' : 'red'
    });
    const {role} = JSON.parse(localStorage.getItem('userInfo'))

    return (
        <Fragment>
            <Card className={classes.root}>
                <CardMedia
                    id={'images'}
                    component={'img'}
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

                    {role === 'User' && <Paper className={classes.paper}>
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
                    </Paper>}

                    {role === 'Admin' &&
                    <Grid container style={{alignItems: 'center', marginTop: 10}}>
                        <Grid item>
                            <Box component={'div'} className={classes.statusColor}>{''}</Box>
                        </Grid>
                        <Grid item>
                            <Typography variant={'subtitle1'} component={"h6"} style={{marginLeft: 5}}>
                                {status}
                            </Typography>
                        </Grid>
                    </Grid>}
                </CardContent>

                {role === 'User' && <CardContent className={classes.secContent}>
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

                </CardContent>}

                {role === 'Admin' && <CardActions className={classes.cardActions}>
                    <Stack direction="column" spacing={1}>
                        <Tooltip title="Edit" placement="left">
                            <IconButton aria-label="Edit" size="small"
                                        className={classes.IconButton}>
                                <CreateOutlinedIcon onClick={editAction}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement="left">
                            <IconButton aria-label="Delete" size="small"
                                        className={classes.IconButton}>
                                <DeleteOutlineOutlinedIcon/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </CardActions>}

            </Card>
        </Fragment>
    )
}

export default ItemCard;