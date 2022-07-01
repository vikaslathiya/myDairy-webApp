import React, {Fragment} from "react";
import {Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";
import NewOrder from "../pages/NewOrder";
import CopyOrder from "../pages/CopyOrder";
import OrderHistory from "../pages/OrderHistory";

const AllRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <PrivateRoute path={"/home-page"} component={WelcomePage}/>
                <PrivateRoute path={"/user-profile"} component={UserProfile}/>
                <PrivateRoute path={"/new-order"} component={NewOrder}/>
                <PrivateRoute path={"/last-order"} component={CopyOrder}/>
                <PrivateRoute path={"/all-order"} component={OrderHistory}/>
            </Switch>
        </Fragment>
    );
}

export default AllRoutes;