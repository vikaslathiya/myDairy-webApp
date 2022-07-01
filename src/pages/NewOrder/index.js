import React, {Fragment, useEffect, useState} from "react";
import gold6ltr from "../../Asset/gold_amul.jpg";
import gold500 from "../../Asset/gold_500.jpg";
import tazza500 from "../../Asset/tazza_500.jpg";
import tazza250 from "../../Asset/tazza_250.jpg";
import chhas500 from "../../Asset/chhas_500.jpg";
import chhas6ltr from "../../Asset/chhas_6ltr.jpg";
import cowMilk from "../../Asset/cow_500.jpg";
import dahi200 from "../../Asset/dahi_200.jpeg";
import dahi1kg from "../../Asset/dahi_1kg.webp";
import PlaceOrderLayOut from "../../Layout/PlaceOrder";
import LoadingSpin from "../../components/LoadingSpin";

const NewOrder = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    function createData(name, id, amount, img) {
        return {_id: id, itemName: name, amt: amount, logo: img};
    }

    const rows = [
        createData('Gold 500ml', 'gold500', 35, gold500),
        createData('Gold 6 Ltr', 'gold6Ltr', 210, gold6ltr),
        createData('Tazza 500ml', 'tazza500', 30, tazza500),
        createData('Tazza 250ml', 'tazza250', 15, tazza250),
        createData('Chhas 500ml', 'chhas500', 20, chhas500),
        createData('Chhas 6 Ltr', 'chhas6Ltr', 240, chhas6ltr),
        createData('Cow Milk 500ml', 'cowMilk500', 40, cowMilk),
        createData('Dahi 200ml', 'dahi200', 20, dahi200),
        createData('Dahi 1kg', 'dahi1kg', 100, dahi1kg),
    ];

    return (
        <Fragment>
            {loading && <LoadingSpin/>}
            {!loading && <PlaceOrderLayOut items={rows}/>}
        </Fragment>
    )
}

export default NewOrder;