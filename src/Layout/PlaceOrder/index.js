import React, {Fragment, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import ItemList from "../../components/ItemCard";
import {useDispatch, useSelector} from "react-redux";
import {clearPostRequest, placeOrderAction} from "../../Redux/Actions/OrderAction/orderActions";
import CustomizedSnackbars from "../../components/Snackbar";
import PlaceOrder from "./placeOrder";
import LoadingSpin from "../../components/LoadingSpin";
import OrderDate from "../../components/OrderDate";

const PlaceOrderLayOut = (props) => {
    const {items, images, orderDate} = props
    const history = useHistory();
    const dispatch = useDispatch();
    const [rows, setRows] = useState([])
    const [showFooter, setShowFooter] = useState(false)
    const [grandTotal, setGrandTotal] = useState(0)
    const [snackbarType, setSnackbarType] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const {addedQty} = useSelector(state => state.addedQty)
    const {orderStatus, orderError, orderLoading} = useSelector(state => state.placeOrder)

    useEffect(() => {
        if (snackbarType !== '') {
            setTimeout(() => {
                setSnackbarType('')
            }, 2500)
        }
    }, [snackbarType])

    useEffect(() => {
        console.log('coppyOrder...........', items)
        if (items?.length > 0) {
            setRows(items)
        }
    }, [items])

    useEffect(() => {
        console.log(addedQty)
        if (Object?.keys(addedQty)?.length === 0) {
            setShowFooter(false)
        } else {
            setShowFooter(true)
            const amt = []
            addedQty.forEach(item => {
                amt.push(item.totalAmt)
            })
            const subTotal = amt.reduce((acc, currentValue) => {
                return acc + currentValue
            })
            setGrandTotal(subTotal)
        }
    }, [addedQty])

    useEffect(() => {
        console.log('loading', orderLoading)
        if (orderStatus) {
            ShowSnackbar('success', 'Your order Successfully Placed')
            setTimeout(() => {
                setLoading(orderLoading)
                history.replace("/home-page");
            }, 2000)
        } else if (orderError) {
            ShowSnackbar('error', 'Something went wrong')
        }
        dispatch(clearPostRequest())
    }, [orderStatus, orderError, orderLoading])

    const ShowSnackbar = (type, message) => {
        setSnackbarMessage(message);
        setSnackbarType(type)
    }

    const orderHandler = (e) => {
        e.preventDefault()
        console.log(addedQty)
        setLoading(true)
        dispatch(placeOrderAction({orderItems: addedQty, date: new Date(), totalAmt: grandTotal}))
    }

    return (
        <Fragment>
            {loading && <LoadingSpin/>}

            {!loading && <>
                {orderDate && <OrderDate orderDate={orderDate}/>}
                <ItemList items={rows} images={images}/>
                {showFooter && <PlaceOrder total={grandTotal} placeOrderHandler={orderHandler}/>}
            </>}
            <CustomizedSnackbars type={snackbarType} message={snackbarMessage} duration={2000}/>
        </Fragment>
    )
}

export default PlaceOrderLayOut;