import React, {Fragment, useEffect, useState} from "react";
import ScreenTitle from "../../../components/ScreenTitle";
import ItemCard from "../../../components/ItemCard/itemCard";
import gold from '../../../Asset/gold_500.jpg'
import {Grid} from "@mui/material";
import CustomButton from "../../../components/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useProductStyles} from "./style";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAction, getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";
import LoadingSpin from "../../../components/LoadingSpin";

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const dispatch = useDispatch()
    const myStyle = useProductStyles();
    const {getProductLoading, getProduct, getProductError} = useSelector(state => state.getProducts)
    const {imageUrl} = useSelector(state => state.getImages)

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

    const addProductHandler = () => {
        history.push('/add-product')
    };

    return (
        <Fragment>
            <ScreenTitle title={'Products'}/>
            <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} className={myStyle.btnGrid} justifyContent={'flex-end'}>
                    <CustomButton
                        variant={'contained'}
                        startIcon={<AddOutlinedIcon/>}
                        buttonText={'Add Product'}
                        onclick={addProductHandler}
                    />
                </Grid>

                {loading && <LoadingSpin/>}

                {!loading && allProducts.map(product => {
                    const tempImg = image.find(img => img?.name === product?.image)
                    return (
                        <Grid item lg={4} md={4} sm={4}>
                            <ItemCard
                                key={product?.id}
                                id={product?.id}
                                itemName={product?.product}
                                img={tempImg?.path}
                                amount={product?.price}
                                status={product?.status}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Fragment>
    )
}

export default Products;
