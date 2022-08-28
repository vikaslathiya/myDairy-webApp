import React, {Fragment, useEffect, useState} from "react";
import ScreenTitle from "../../../components/ScreenTitle";
import {Grid, ListItemText} from "@mui/material";
import CustomTextField from "../../../components/TextField";
import {useProductStyles} from "./style";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import CustomButton from "../../../components/Button";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    AddProductAction,
    AddProductImageAction,
    clearProductResponse
} from "../../../Redux/Actions/Admin/productsAction";
import CustomizedSnackbars from "../../../components/Snackbar";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        product: '',
        price: '',
        image: '',
        status: ''
    })
    const [disabledBtn, setDisabledBtn] = useState(true)
    const [snackbarType, setSnackbarType] = useState('')
    const [snackbarMessage, setSnackbarMessage] = useState('')
    const [imageFile, setImageFile] = useState({})
    const {addProductLoading, addProduct, addProductError} = useSelector(state => state.addProduct)
    const history = useHistory();
    const dispatch = useDispatch();
    const myStyle = useProductStyles();

    useEffect(() => {
        if (addProduct !== undefined) {
            ShowSnackbar('success', addProduct)
            history.replace('/products')
            // setImageFile('')
            setProductData({
                product: '',
                price: '',
                status: '',
                image: ''
            })
        }
        if (addProductError !== undefined) ShowSnackbar('error', addProductError)
        dispatch(clearProductResponse())
    }, [addProduct, addProductError])

    useEffect(() => {
        const {product, price, status} = productData;
        const enableBtn = product !== '' && price !== '' && status !== '';

        if (enableBtn) {
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }

    }, [productData])

    const ShowSnackbar = (type, message) => {
        setSnackbarMessage(message);
        setSnackbarType(type)
    }

    const onSaveHandler = () => {
        console.log(productData)
        // dispatch(AddProductAction({...productData, image: imageFile}))
        dispatch(AddProductImageAction(imageFile))
        dispatch(AddProductAction(productData))
    }

    const onInputChangeHandler = (event) => {
        if (event.target.name === 'image') {
            let file = event.target.files[0];
            let imgName = file.name.slice(0, file.name.lastIndexOf('.'))
            const imageObj = {
                name: imgName,
                blob: file
            }
            // console.log(imageObj)
            setImageFile(imageObj)
            setProductData({...productData, image: imgName})
        } else {
            setProductData({...productData, [event.target.name]: event.target.value})
        }
    }

    const onCancelHandler = () => {
        history.replace('/products')
    }

    return (
        <Fragment>
            <ScreenTitle title={'Add Product'}/>
            <Card raised style={{margin: 'auto', padding: 20, marginTop: 30, width: '60%'}}>
                <Grid container spacing={2} margin={'auto'}>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Product Name:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                fullWidth
                                name={'product'}
                                variant={'outlined'}
                                value={productData?.product}
                                onchange={onInputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Price:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                type={'number'}
                                fullWidth
                                name={'price'}
                                variant={'outlined'}
                                value={productData?.price}
                                startIcon={<CurrencyRupeeIcon/>}
                                onchange={onInputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Image:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <CustomTextField
                                variant={'outlined'}
                                type={'file'}
                                fullWidth
                                name={'image'}
                                // value={imageFile !== "" && imageFile}
                                onchange={onInputChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} className={myStyle.fieldBox}>
                        <Grid item lg={3} md={3} sm={3}>
                            <ListItemText className={myStyle.label}>Status:</ListItemText>
                        </Grid>
                        <Grid item lg={5} md={5} sm={5}>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name={'status'}
                                    onChange={onInputChangeHandler}
                                    defaultValue={'active'}
                                    value={productData?.status}
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
                    <Grid item lg={12} md={12} sm={12} className={myStyle.btnGrid} marginLeft={'25%'}>
                        <CustomButton
                            variant={'contained'}
                            buttonText={'Preview'}
                            disabled={disabledBtn}
                            // onclick={addProductHandler}
                        />
                        <CustomButton
                            variant={'contained'}
                            buttonText={'Save'}
                            onclick={onSaveHandler}
                            disabled={disabledBtn}
                        />
                        <CustomButton
                            variant={'outlined'}
                            buttonText={'Cancel'}
                            onclick={onCancelHandler}
                        />
                    </Grid>
                </Grid>
            </Card>

            <CustomizedSnackbars type={snackbarType} message={snackbarMessage} duration={2000}/>

        </Fragment>
    )
}

export default AddProduct;