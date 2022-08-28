import CONSTANTS from "../../../Comman/constants";

export const addProductReducers = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_PRODUCT_REQUEST:
            return {addProductLoading: true}
        case CONSTANTS.ADD_PRODUCT_SUCCESS:
            return {addProductLoading: false, addProduct: action.payload}
        case CONSTANTS.ADD_PRODUCT_FAILED:
            return {addProductLoading: false, addProductError: action.payload}
        case CONSTANTS.CLEAR_PRODUCT_RESPONSE:
            return {}
        default:
            return state
    }
}

export const getProductsReducers = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.GET_PRODUCTS_REQUEST:
            return {getProductLoading: true}
        case CONSTANTS.GET_PRODUCTS_SUCCESS:
            return {addProductLoading: false, getProduct: action.payload}
        case CONSTANTS.GET_PRODUCTS_FAILED:
            return {addProductLoading: false, getProductError: action.payload}
        default:
            return state
    }
}

export const getProductImageReducers = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.GET_PRODUCTS_IMAGE:
            return {imageUrl: action.payload}
        default:
            return state
    }
}