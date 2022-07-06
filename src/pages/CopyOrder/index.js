import React, {Fragment, useEffect, useState} from "react";
import PlaceOrderLayOut from "../../Layout/PlaceOrder";
import {useDispatch, useSelector} from "react-redux";
import {clearPostRequest, getAllOrdersAction} from "../../Redux/Actions/OrderAction/orderActions";
import OrderDate from "../../components/OrderDate";
import {useLocation} from "react-router-dom";
import NoData from "../../components/NoData";
import LoadingSpin from "../../components/LoadingSpin";
import ScreenTitle from "../../components/ScreenTitle";

const CopyOrder = () => {
    const [rows, setRows] = useState([])
    const [noData, setNoData] = useState(false)
    const [loading, setLoading] = useState(false)
    const [orderDate, setOrderDate] = useState("")
    const dispatch = useDispatch()
    const location = useLocation()
    const {allOrders, getOrderLoading} = useSelector(state => state.getAllOrders)

    useEffect(() => {
        console.log('coppyOrder...........')
        dispatch(getAllOrdersAction())
    }, [])

    useEffect(() => {
        // console.log('coppyOrder...........', rows)
    }, [rows])

    // useEffect(() => {
    //     if (location?.pathname !== '/last-order') {
    //         dispatch(clearPostRequest())
    //         setRows([])
    //     }
    // }, [location])

    useEffect(() => {
        console.log('coppyOrder...........', allOrders)
        setLoading(getOrderLoading)
        if (allOrders && allOrders?.length > 0) {
            const lastOrder = allOrders[allOrders?.length - 1]
            const date = lastOrder?.items?.date
            setOrderDate(date)
            setRows(lastOrder?.items?.orderItems)
            setNoData(false)
        } else {
            console.log('allOrders', allOrders)
            setNoData(true)
            setRows([])
        }
    }, [allOrders, getOrderLoading])


    return (
        <Fragment>
            <ScreenTitle title={'Previous Order'}/>
            {loading && <LoadingSpin/>}
            {!loading && noData && <NoData/>}
            {!loading && !noData &&
                <PlaceOrderLayOut items={rows} orderDate={orderDate}/>
            }
        </Fragment>
    )
}

export default CopyOrder;