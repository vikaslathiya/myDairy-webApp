import React, {Fragment} from "react";
import {Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "../pages/WelcomePage";
import UserProfile from "../pages/UserProfile";
import NewOrder from "../pages/NewOrder";

const AllRoutes = () => {
    return (
        <Fragment>
            <Switch>
                <PrivateRoute path={"/home-page"} component={WelcomePage}/>
                <PrivateRoute path={"/user-profile"} component={UserProfile}/>
                <PrivateRoute path={"/new-order"} component={NewOrder}/>
            </Switch>
        </Fragment>
    );
}

export default AllRoutes;