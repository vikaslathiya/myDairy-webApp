import React, {Fragment, useEffect, useState} from "react";
import PlaceOrderLayOut from "../../../Layout/PlaceOrder";
import LoadingSpin from "../../../components/LoadingSpin";
import ScreenTitle from "../../../components/ScreenTitle";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAction, getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";

const NewOrder = () => {
    const [loading, setLoading] = useState(false)
    const [allProducts, setAllProducts] = useState([])
    const [image, setImage] = useState([])

    const dispatch = useDispatch();

    const {imageUrl} = useSelector(state => state.getImages)
    const {getProductLoading, getProduct, getProductError} = useSelector(state => state.getProducts)


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    useEffect(() => {
        setLoading(true)
        if (getProduct) {
            const all = []
            for (const key in getProduct) {
                const obj = {
                    id: key,
                    ...getProduct[key],
                }
                all.push(obj);
            }
            all.map(item => {
                dispatch(getProductsImagesAction(item?.image))
            })
            setAllProducts(all)
        } else {
            setAllProducts([])
        }
    }, [getProduct, getProductError, getProductLoading])

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
            <ScreenTitle title={'Place New Order'}/>
            {!loading && <PlaceOrderLayOut items={allProducts} images={image}/>}
            {loading && <LoadingSpin/>}
        </Fragment>
    )
}

export default NewOrder;