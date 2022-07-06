import React, {Fragment, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import InputListTable from "../../components/InputListTable";
import {getAllOrdersAction} from "../../Redux/Actions/OrderAction/orderActions";
import LoadingSpin from "../../components/LoadingSpin";
import NoData from "../../components/NoData";
import ScreenTitle from "../../components/ScreenTitle";

const OrderHistory = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [noData, setNoData] = useState(false)
    const dispatch = useDispatch()
    const {allOrders, getOrderLoading} = useSelector(state => state.getAllOrders)

    useEffect(() => {
        dispatch(getAllOrdersAction())
    }, [])

    useEffect(() => {
        setLoading(getOrderLoading)
        if (allOrders && allOrders?.length > 0) {
            allOrders.reverse()
            setData(allOrders)
            setNoData(false)
        } else {
            setNoData(true)
            setData([])
        }
    }, [allOrders, getOrderLoading])

    function createData(label, id) {
        return {_id: id, title: label};
    }

    const columns = [
        createData('Date', 'date'),
        createData('Gold 500ml', 'gold500'),
        createData('Gold 6 Ltr', 'gold6Ltr'),
        createData('Tazza 500ml', 'tazza500'),
        createData('Tazza 250ml', 'tazza250'),
        createData('Chhas 500ml', 'chhas500'),
        createData('Chhas 6 Ltr', 'chhas6Ltr'),
        createData('Cow Milk 500ml', 'cowMilk500'),
        createData('Dahi 200ml', 'dahi200'),
        createData('Dahi 1kg', 'dahi1kg'),
        createData('Total Amount', 'amt'),
    ];

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