import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputListTable from "../../../components/InputListTable";
import {getAllOrdersAction} from "../../../Redux/Actions/OrderAction/orderActions";
import LoadingSpin from "../../../components/LoadingSpin";
import NoData from "../../../components/NoData";
import ScreenTitle from "../../../components/ScreenTitle";
import {getProductsAction, getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";

const OrderHistory = () => {
    const [data, setData] = useState([])
    const [columns, setColumns] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [noData, setNoData] = useState(false)
    const dispatch = useDispatch()
    const {allOrders, getOrderLoading} = useSelector(state => state.getAllOrders)
    const {getProductLoading, getProduct, getProductError} = useSelector(state => state.getProducts)

    useEffect(() => {
        dispatch(getAllOrdersAction())
        dispatch(getProductsAction())
        createColumnData()
    }, [])

    useEffect(() => {
        const tempData = []
        tempData.push({_id: 'date', title: 'Date'})
        products.map(item => {
            tempData.push({_id: item?.image, title: item?.product})
        })
        tempData.push({_id: 'amt', title: 'Total Amount'})
        console.log('columns.............', tempData)
        setColumns(tempData)
    }, [products])

    useEffect(() => {
        if (getProduct) {
            const all = []
            for (const key in getProduct) {
                const obj = {
                    id: key,
                    ...getProduct[key],
                }
                all.push(obj);
            }
            setProducts(all)
        } else {
            setProducts([])
        }
    }, [getProduct])

    useEffect(() => {
        setLoading(getOrderLoading)
        if (allOrders && allOrders?.length > 0) {
            allOrders.reverse()
            console.log('allOrders...', allOrders)
            setData(allOrders)
            setNoData(false)
        } else {
            setNoData(true)
            setData([])
        }
    }, [allOrders, getOrderLoading])

    const createColumnData = () => {
        const tempData = {}

    }

    // const columns = [
    //     createData('Date', 'date'),
    //     products.map(product => {
    //         createData(product?.name, product?.image)
    //     }),
    //     // createData('Gold 500ml', 'gold500'),
    //     // createData('Gold 6 Ltr', 'gold6Ltr'),
    //     // createData('Tazza 500ml', 'tazza500'),
    //     // createData('Tazza 250ml', 'tazza250'),
    //     // createData('Chhas 500ml', 'chhas500'),
    //     // createData('Chhas 6 Ltr', 'chhas6Ltr'),
    //     // createData('Cow Milk 500ml', 'cowMilk500'),
    //     // createData('Dahi 200ml', 'dahi200'),
    //     // createData('Dahi 1kg', 'dahi1kg'),
    //     createData('Total Amount', 'amt'),
    // ];

    return (
        <Fragment>
            <ScreenTitle title={'Order History'}/>
            {loading && <LoadingSpin/>}
            {!loading && noData && <NoData/>}
            {!loading && !noData && <InputListTable tableData={data} columns={columns}/>}
        </Fragment>
    )
};

export default OrderHistory;