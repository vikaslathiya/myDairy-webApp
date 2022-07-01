import {applyMiddleware, combineReducers, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import {loginReducer} from "./Reducers/Auth/LoginReducer";
import {isLoggedInReducer} from "./Reducers/Auth/LoginStatus";
import {SignUpReducer} from "./Reducers/Auth/SignUpReducer";
import {getUsersReducers} from "./Reducers/getUsers/GetUsersReducers";
import {AddedQtyReducer, getAllOrdersReducers, placeOrderReducer} from "./Reducers/OrderReducers/orderReducers";

const reducer = combineReducers({
    loginUser: loginReducer,
    isLoggedIn: isLoggedInReducer,
    signUpUser: SignUpReducer,
    getUsers: getUsersReducers,
    addedQty: AddedQtyReducer,
    placeOrder: placeOrderReducer,
    getAllOrders: getAllOrdersReducers,
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'loginUser',
    ]
};

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const isLoggedInFromStorage = localStorage.getItem('isLoggedIn') ? localStorage.getItem('isLoggedIn') : false;

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    isLoggedIn: {isLoggedIn: isLoggedInFromStorage},
};

const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
export default store;