import React from "react";
import {useParams} from "react-router-dom";
import ItemList from "../components/Items/ItemList";
import LastOrder from "../components/Items/LastOrder";
import Index from "./OrderHistory";

const AllPage = () => {
    const param = useParams();
    console.log(param)

    switch (param.name) {
        case "new-order":
            return <ItemList/>
        case "last-order":
            return <LastOrder/>
        case "all-order":
            return <Index/>
    }
};

export default AllPage;