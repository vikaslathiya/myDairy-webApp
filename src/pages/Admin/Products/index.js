import React, {Fragment, useEffect, useState} from "react";
import ScreenTitle from "../../../components/ScreenTitle";
import ItemCard from "../../../components/ItemCard/itemCard";
import gold from '../../../Asset/gold_500.jpg'
import {Grid, ListItemText, Typography} from "@mui/material";
import CustomButton from "../../../components/Button";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {useProductStyles} from "./style";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductsAction, getProductsImagesAction} from "../../../Redux/Actions/Admin/productsAction";
import LoadingSpin from "../../../components/LoadingSpin";
import CustomDialog from "../../../components/Dialog";
import CustomTextField from "../../../components/TextField";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {Card, CardMedia, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const Products = () => {
    const [allProducts, setAllProducts] = useState([])
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [editedData, setEditedData] = useState({})
    const [updateImage, setUpdateImage] = useState()
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

    const editProductHandler = (data, image) => {
        setOpenEdit(true)
        console.log('edit...', data, image)
        setEditedData(data)
        setUpdateImage(image)
    }

    const onInputChangeHandler = (event) => {
        if (event.target.name === 'image') {
            let file = event.target.files[0];
            let imgName = file.name.slice(0, file.name.lastIndexOf('.'))
            const imageObj = {
                name: imgName,
                path: file
            }
            console.log(imageObj)
            setUpdateImage(imageObj)
            // setProductData({...productData, image: imgName})
        } else {
            // setProductData({...productData, [event.target.name]: event.target.value})
        }
    }

    const editForm = (
        <Grid container spacing={2} margin={'auto'}>
            <Grid item lg={8} md={8} sm={8}>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Product:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <CustomTextField
                            fullWidth
                            name={'product'}
                            variant={'outlined'}
                            defaultValue={editedData?.product}
                            onchange={onInputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Price:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <CustomTextField
                            type={'number'}
                            fullWidth
                            name={'price'}
                            variant={'outlined'}
                            defaultValue={editedData?.price}
                            startIcon={<CurrencyRupeeIcon/>}
                            onchange={onInputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Image:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <CustomTextField
                            variant={'outlined'}
                            type={'file'}
                            fullWidth
                            name={'image'}
                            onchange={onInputChangeHandler}
                        />
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                    <Grid item lg={3} md={3} sm={3}>
                        <ListItemText className={myStyle.label}>Status:</ListItemText>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                        <FormControl>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name={'status'}
                                onChange={onInputChangeHandler}
                                defaultValue={editedData?.status}
                            >
                                <FormControlLabel
                                    value="Active"
                                    control={<Radio color={'primary'}/>}
                                    label="Active"
                                />
                                <FormControlLabel
                                    value="Inactive"
                                    control={<Radio color={'primary'}/>}
                                    label="Inactive"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item lg={4} md={4} sm={4} className={myStyle.previewSection}>
                <Typography variant={'subtitle1'} component={'h1'}>
                    Preview
                </Typography>
                <Card className={myStyle.cover}>
                    <CardMedia
                        id={'images'}
                        component={'img'}
                        className={myStyle.cover}
                        image={
                            typeof updateImage?.path === 'object' ?
                                URL.createObjectURL(updateImage?.path) :
                                updateImage?.path
                        }
                        title={updateImage?.name}
                    />
                </Card>
            </Grid>
        </Grid>
    )

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
                                editAction={() => editProductHandler(product, tempImg)}
                            />
                        </Grid>
                    )
                })}

                <CustomDialog
                    dialogTitle={`Update Product Details`}
                    visibility={openEdit}
                    changeVisibility={setOpenEdit}
                    dialogContent={editForm}
                />
            </Grid>
        </Fragment>
    )
}

export default Products;
