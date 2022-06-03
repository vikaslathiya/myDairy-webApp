import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import classes from "./LastOrder.module.css"

const LastOrder = () => {
    const history = useHistory();
    const [lastOrder, setLastOrder] = useState({
        gold500: 0,
        tazza500: 0,
        chhas500: 0,
        tazza250: 0,
        total: 0,
    })

    useEffect(() => {
        fetchData();
    }, [])

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const todayDate = `${day}/${month}/${year}`

    const backHandlar = (e) => {
        e.preventDefault();

        history.replace("/");
    }

    const user = JSON.parse(localStorage.getItem("loginUser"));

    const fetchData = async () => {
        const response = await fetch(`https://react-http-fdabc-default-rtdb.asia-southeast1.firebasedatabase.app/users/${user.id}/milk-order.json/`);
        const data = await response.json();


        const allOrder = [];

        for (const key in data) {
            const milkObj = {
                id: key,
                ...data[key],
            }
            allOrder.push(milkObj);
        }

        console.log(allOrder[allOrder.length - 1])

        setLastOrder({
            gold500: allOrder[allOrder.length - 1].gold500,
            tazza500: allOrder[allOrder.length - 1].tazza500,
            chhas500: allOrder[allOrder.length - 1].chhas500,
            tazza250: allOrder[allOrder.length - 1].tazza250,
            total: allOrder[allOrder.length - 1].total,
        })

    }

    const showItem = "";
    return (
        <Fragment>
            <div className={classes.heading}>
                <h1>Your Last Order</h1>
            </div>
            <table className={classes.table}>
                <thead className={classes.head}>
                    <tr>
                        <td className={classes.date}>Date: {todayDate}</td>
                    </tr>
                    <tr>
                        <th>Items</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody className={classes.body}>

                    <tr>
                        <td> Gold 500ml</td>
                        <td>{lastOrder.gold500}</td>
                    </tr>
                </tbody>
                <tfoot className={classes.footer}>
                    <tr>
                        <td>Total</td>
                        <td>{lastOrder.total}</td>
                    </tr>
                </tfoot>
            </table>
            <button onClick={backHandlar} className={classes.btn}>Back</button>
        </Fragment>
    )
}

export default LastOrder;