import React, {Fragment, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Container, Paper, Table} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ItemList = () => {
    const [total, setTotal] = useState(0)
    const [inputQty, setInputQty] = useState({
        gold500: "",
        gold6Ltr: "",
        tazza500: "",
        tazza250: "",
        chhas500: "",
        chhas6Ltr: "",
        cowMilk500: "",
        dahi200: "",
        dahi1kg: "",
    });
    const history = useHistory();
    let totalMilk;

    const qtyHandler = (qty) => (event) => {
        event.preventDefault();
        console.log(qty)
        setInputQty({...inputQty, [qty]: event.target.value});
    }

    const orderBlurHandler = (e) => {
        e.preventDefault()

        // totalMilk = (+gold500Ref.current.value) + (+tazza500Ref.current.value) + (+chhas500Ref.current.value) + (+tazza250Ref.current.value)
        // setTotal(totalMilk);
    }
    console.log(inputQty);
    const placeOrderHandler = async (e) => {
        e.preventDefault()

        console.log(inputQty);

        // await fetch(`https://react-http-fdabc-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user.id}/milk-order.json/`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         gold500: gold500Ref.current.value,
        //         tazza500: tazza500Ref.current.value,
        //         chhas500: chhas500Ref.current.value,
        //         tazza250: tazza250Ref.current.value,
        //         total: total,
        //     }),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        history.replace("/home-page");
    }

    const backHandler = (e) => {
        e.preventDefault();

        history.replace("/home-page");
    }

    const useStyles = makeStyles({
        table: {
            maxWidth: "300px",
            margin: "auto",
            "& .MuiButtonBase-root:": {
                margin: "10px"
            },
        },
        tableFooter: {
            "&": {
                display: "flex",
                justifyContent: "space-between",
            },
            "& .MuiButtonBase-root": {
                margin: " 6px",
                fontSize: "10px",
                padding: "5px",
            },
        },
        tableCell: {
            "& .MuiTableCell-root": {
                padding: "6px",
                width: "50px"
            },
        }
    });
    const classes = useStyles();

    function createData(name, id) {
        return {name, id};
    }

    const rows = [
        createData('Gold 500ml', inputQty.gold500),
        createData('Gold 6 Ltr', inputQty.gold6Ltr),
        createData('Tazza 500ml', inputQty.tazza500),
        createData('Tazza 250ml', inputQty.tazza250),
        createData('Chhas 500ml', inputQty.chhas500),
        createData('Chhas 6 Ltr', inputQty.chhas6Ltr),
        createData('Cow Milk 500ml', inputQty.cowMilk500),
        createData('Dahi 200ml', inputQty.dahi200),
        createData('Dahi 1kg', inputQty.dahi1kg),
    ];

    return (
        <Fragment>
            <Container>
                <form onBlur={orderBlurHandler} onSubmit={placeOrderHandler}>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow className={classes.tableCell}>
                                    <TableCell>Items</TableCell>
                                    <TableCell align="right">Qty</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name} className={classes.tableCell} id={row.id}>
                                        <TableCell component="th" scope="row" >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">
                                            <input type="text" style={{width: "100%"}}
                                                   onChange={qtyHandler(row)}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <div className={classes.tableFooter}>
                            <Button type="submit" variant="contained" color="primary">Place Order</Button>
                            <Button variant="contained" color="primary">Back</Button>
                        </div>
                    </TableContainer>
                </form>
            </Container>
        </Fragment>
    )
}

export default ItemList;