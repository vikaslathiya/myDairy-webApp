import {Fragment, useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {Grid} from "@material-ui/core";
import {useWelcomeStyle} from "./style";
import {getProductsAction, getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";
import {useDispatch, useSelector} from "react-redux";

const ProductPhotos = () => {
    const [allProducts, setAllProducts] = useState([])
    const [image, setImage] = useState([])
    const myStyle = useWelcomeStyle()
    const dispatch = useDispatch();
    const {imageUrl} = useSelector(state => state.getImages)
    const {getProductLoading, getProduct, getProductError} = useSelector(state => state.getProducts)

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

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
        }
    }, [imageUrl])

    return (
        <Fragment>
            <Grid item xs={12} md={12} lg={12} className={myStyle.productPhoto}>
                <Typography component={'h2'} variant={'h2'}>
                    Our Products
                </Typography>
                <hr/>
                <div>
                    <marquee scrolldelay={5} behavior={'alternate'} width={'100%'}>
                        {allProducts.map(p => {
                            const tempImg = image.find(img => img?.name === p?.image)
                            return (
                                <div className={myStyle.imgCard}>
                                    <img src={tempImg?.path} alt={tempImg?.name}/>
                                    <Typography variant="body2" color="text.secondary">
                                        {p?.product}
                                    </Typography>
                                </div>
                            )
                        })}
                    </marquee>
                </div>
            </Grid>

        </Fragment>
    )
}

export default ProductPhotos;