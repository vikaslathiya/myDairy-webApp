import CONSTANTS from "../../../Comman/constants";

export const AddedQtyReducer = (state = {addedQty: []}, action) => {
    switch (action.type) {
        case CONSTANTS.ADDED_QUANTITY:
            return {addedQty: action.payload}
        default:
            return state;
    }
}

export const placeOrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.PLACE_ORDER_REQUEST:
            return {orderLoading: true}

        case CONSTANTS.PLACE_ORDER_SUCCESS:
            return {orderLoading: false, orderStatus: action?.payload}

        case CONSTANTS.PLACE_ORDER_FAILED:
            return {orderLoading: false, orderError: action?.payload}

        case CONSTANTS.CLEAR_POST_REQUEST:
            return {orderLoading: false}

        default:
            return state
    }
}

export const getAllOrdersReducers = (state = {}, action) => {
    switch (action.type) {
        case CONSTANTS.GET_ALL_ORDERS_REQUEST:
            return {getOrderLoading: true}

        case CONSTANTS.GET_ALL_ORDERS_SUCCESS:
            return {getOrderLoading: false, allOrders: action?.payload}

        case CONSTANTS.GET_ALL_ORDERS_FAILED:
            return {getOrderLoading: false, getOrdersError: action?.payload}

        // case CONSTANTS.CLEAR_POST_REQUEST:
        //     return {allOrders: []}

        default:
            return state
    }
}