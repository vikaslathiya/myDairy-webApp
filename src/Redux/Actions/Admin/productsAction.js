import CONSTANTS from "../../../Comman/constants";
import axios from "axios";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {InitializeFirebase} from "../../../Firebase";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const domain = `https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app`

export const AddProductAction = (productData) => async (dispatch) => {
    dispatch({type: CONSTANTS.ADD_PRODUCT_REQUEST})
    console.log(productData)
    try {
        const url = `${domain}/products.json`
        const productsRes = await axios.post(url, productData, config)


        if (productsRes?.status === 200) {
            dispatch({type: CONSTANTS.ADD_PRODUCT_SUCCESS, payload: 'Product Added Successfully'})
        } else {
            dispatch({type: CONSTANTS.ADD_PRODUCT_FAILED, payload: 'Something went wrong, Plz try again!'})
        }
    } catch (error) {
        dispatch({type: CONSTANTS.ADD_PRODUCT_FAILED, payload: "error"})
    }
}


export const AddProductImageAction = ({name, blob}) => (dispatch) => {
    dispatch({type: CONSTANTS.ADD_PRODUCT_REQUEST})

    InitializeFirebase()

    const storage = getStorage();
    const storageRef = ref(storage, `gs://my-milk-dairy-14b69.appspot.com/products_images/${name}`);

    console.log(blob)
    uploadBytes(storageRef, blob).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
    });
}

export const getProductsAction = () => async (dispatch) => {
    dispatch({type: CONSTANTS.GET_PRODUCTS_REQUEST})

    try {
        const url = `${domain}/products.json`
        const {status, data} = await axios.get(url, config)

        if (status === 200) {
            dispatch({type: CONSTANTS.GET_PRODUCTS_SUCCESS, payload: data})
        } else {
            dispatch({type: CONSTANTS.GET_PRODUCTS_FAILED, payload: 'Something went wrong, Plz try again!'})
        }
    } catch (error) {
        dispatch({type: CONSTANTS.GET_PRODUCTS_FAILED, payload: "error"})
    }
}

export const getProductsImagesAction = (name) => async (dispatch) => {

    InitializeFirebase()

    // Create a reference to the file we want to download
    const storage = getStorage();
    const storageRef = ref(storage, `gs://my-milk-dairy-14b69.appspot.com/products_images/${name}`);

    // Get the download URL
    getDownloadURL(storageRef)
        .then((url) => {
            // Insert url into an <img> tag to "download"
            dispatch({type: CONSTANTS.GET_PRODUCTS_IMAGE, payload: {name: name, path: url}})
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;
                case 'storage/canceled':
                    // User canceled the upload
                    break;

                // ...

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
}

export const clearProductResponse = () => {
    return {
        type: CONSTANTS.CLEAR_PRODUCT_RESPONSE
    }
}