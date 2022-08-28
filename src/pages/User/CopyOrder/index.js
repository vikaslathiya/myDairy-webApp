import React, {Fragment, useEffect, useState} from "react";
import PlaceOrderLayOut from "../../../Layout/PlaceOrder";
import {useDispatch, useSelector} from "react-redux";
import {clearPostRequest, getAllOrdersAction} from "../../../Redux/Actions/OrderAction/orderActions";
import OrderDate from "../../../components/OrderDate";
import {useLocation} from "react-router-dom";
import NoData from "../../../components/NoData";
import LoadingSpin from "../../../components/LoadingSpin";
import ScreenTitle from "../../../components/ScreenTitle";
import {getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";

const CopyOrder = () => {
    const [rows, setRows] = useState([])
    const [noData, setNoData] = useState(false)
    const [loading, setLoading] = useState(false)
    const [orderDate, setOrderDate] = useState("")
    const [image, setImage] = useState([])
    const dispatch = useDispatch()
    const location = useLocation()
    const {allOrders, getOrderLoading} = useSelector(state => state.getAllOrders)
    const {imageUrl} = useSelector(state => state.getImages)

    useEffect(() => {
        console.log('coppyOrder...........')
        dispatch(getAllOrdersAction())
    }, [])

    useEffect(() => {
        console.log('coppyOrder...........', allOrders)
        setLoading(getOrderLoading)
        if (allOrders && allOrders?.length > 0) {
            const lastOrder = allOrders[allOrders?.length - 1]
            const date = lastOrder?.items?.date
            lastOrder?.items?.orderItems.map(item => {
                dispatch(getProductsImagesAction(item?.image))
            })
            setOrderDate(date)
            setRows(lastOrder?.items?.orderItems)
            setNoData(false)
        } else {
            console.log('allOrders', allOrders)
            setNoData(true)
            setRows([])
        }
    }, [allOrders, getOrderLoading])

    useEffect(() => {

        if (imageUrl !== undefined) {
            const addedImg = image.find(img => img?.name === imageUrl?.name)
            if (addedImg === undefined) {
                setImage([...image, imageUrl])
            }
            setLoading(false)
        }

    }, [imageUrl])


    return (
        <Fragment>
            <ScreenTitle title={'Previous Order'}/>
            {loading && <LoadingSpin/>}
            {!loading && noData && <NoData/>}
            {!loading && !noData &&
            <PlaceOrderLayOut items={rows} images={image} orderDate={orderDate}/>
            }
        </Fragment>
    )
}

export default CopyOrder;