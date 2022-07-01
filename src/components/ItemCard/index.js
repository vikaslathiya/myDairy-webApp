import {Fragment, useEffect, useState} from "react";
import ItemCard from "./itemCard";
import {addedQtyAction} from "../../Redux/Actions/OrderAction/orderActions";
import {useDispatch} from "react-redux";

const ItemList = (props) => {
    const {items} = props
    const [totalQty, setTotalQty] = useState({
        gold500: 0,
        gold6Ltr: 0,
        tazza500: 0,
        tazza250: 0,
        chhas500: 0,
        chhas6Ltr: 0,
        cowMilk500: 0,
        dahi200: 0,
        dahi1kg: 0,
    });
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(items)
        const qty = {}
        if (items?.[0]?.addedQty) {
            items.map((item) => {
                if (item?.addedQty) {
                    qty[item._id] = item?.addedQty
                    console.log(item?._id, item?.addedQty)
                }
                setTotalQty(qty)
            })
        }
    }, [items])

    useEffect(() => {
        const a = [];
        items.forEach((item) => {
            if (item?.addedQty || totalQty?.[item?._id] > 0) {
                item.addedQty = totalQty[item?._id];
                item.totalAmt = totalQty[item?._id] * item?.amt;
                a.push(item)
            }
        })
        dispatch(addedQtyAction(a))
        console.log(totalQty)
    }, [totalQty])

    const decreaseHandler = (id) => {
        setTotalQty({...totalQty, [id]: totalQty[id] - 1})
    }

    const increaseHandler = (id) => {
        setTotalQty({...totalQty, [id]: totalQty[id] + 1})
    }

    return (
        <Fragment>
            <div style={{marginBottom: 80}}>
                {items.map((item) => (
                    <ItemCard
                        key={item?._id}
                        id={item?._id}
                        itemName={item?.itemName}
                        img={item?.logo}
                        amount={item?.amt}
                        totalQty={totalQty[item._id]}
                        decreaseHandler={decreaseHandler}
                        increaseHandler={increaseHandler}
                        increaseDisable={totalQty[item._id] === 10}
                        decreaseDisable={totalQty[item._id] === 0}
                    />
                ))}
            </div>

        </Fragment>
    )
}

export default ItemList;