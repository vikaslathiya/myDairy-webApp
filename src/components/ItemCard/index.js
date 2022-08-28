import {Fragment, useEffect, useState} from "react";
import ItemCard from "./itemCard";
import {addedQtyAction} from "../../Redux/Actions/OrderAction/orderActions";
import {useDispatch} from "react-redux";

const ItemList = (props) => {
    const {items, images} = props
    // const [items, setItems] = useState([])
    const [totalQty, setTotalQty] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const isCopyOrder = items?.filter(item => item.addedQty)
        console.log('isCopyOrder', isCopyOrder)
        if (isCopyOrder.length === 0) {
            const tempItem = {}
            images.map(img => {
                tempItem[img?.name] = 0
            })
            console.log(tempItem)
            setTotalQty(tempItem)
        }
    }, [images])


    useEffect(() => {
        console.log(items)
        const qty = {}
        if (items?.[0]?.addedQty) {
            items.map((item) => {
                if (item?.addedQty) {
                    qty[item.image] = item?.addedQty
                    console.log(item?.image, item?.addedQty)
                }
                setTotalQty(qty)
            })
        }
    }, [items])

    useEffect(() => {
        const a = [];
        items.forEach((item) => {
            if (item?.addedQty || totalQty?.[item?.image] > 0) {
                item.addedQty = totalQty[item?.image];
                item.totalAmt = totalQty[item?.image] * item?.price;
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
                {items.map((item) => {
                    const tempImg = images.find(img => img?.name === item?.image)
                    console.log('qty >>>>>>>>>>>>', totalQty[item.image])
                    return (
                        <ItemCard
                            key={item?.image}
                            id={item?.image}
                            itemName={item?.product}
                            img={tempImg?.path}
                            amount={item?.price}
                            totalQty={totalQty[item.image]}
                            decreaseHandler={decreaseHandler}
                            increaseHandler={increaseHandler}
                            increaseDisable={totalQty[item.image] === 10}
                            decreaseDisable={totalQty[item.image] === 0}
                        />
                    )

                })}
            </div>

        </Fragment>
    )
}

export default ItemList;