import React, {Fragment} from "react";
import {Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../pages/User/WelcomePage";
import UserProfile from "../pages/User/UserProfile";
import NewOrder from "../pages/User/NewOrder";
import CopyOrder from "../pages/User/CopyOrder";
import OrderHistory from "../pages/User/OrderHistory";
import AdminRoutes from "./adminRoutes";
import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";
import AddProduct from "../pages/Admin/Products/addProduct";
import Users from "../pages/Admin/Users";
import AddUser from "../pages/Admin/Users/addUser";

const AllRoutes = () => {
    return (
        <Fragment>
            <Switch>
                {/*User Routes*/}
                <PrivateRoute path={"/home-page"} component={WelcomePage}/>
                <PrivateRoute path={"/user-profile"} component={UserProfile}/>
                <PrivateRoute path={"/new-order"} component={NewOrder}/>
                <PrivateRoute path={"/last-order"} component={CopyOrder}/>
                <PrivateRoute path={"/all-order"} component={OrderHistory}/>

                {/*Admin Routes*/}
                <AdminRoutes path={"/dashboard"} component={Dashboard}/>
                <AdminRoutes path={"/products"} component={Products}/>
                <AdminRoutes path={"/add-product"} component={AddProduct}/>
                <AdminRoutes path={"/users"} component={Users}/>
                <AdminRoutes path={"/add-user"} component={AddUser}/>
            </Switch>
        </Fragment>
    );
}

export default AllRoutes;