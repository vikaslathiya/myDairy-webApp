import {Fragment} from "react";
import {Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import DisplayAgent from "../pages/DisplayAgentCode/DisplayAgent";

const Routes = () => {

    return (
        <Fragment>
            <Switch>
                <PublicRoute path="/login" component={LoginPage}/>
                <PublicRoute path="/display-agentCode" component={DisplayAgent}/>
                <PrivateRoute component={HomePage}/>
                <PublicRoute exact path="/*" component={LoginPage}/>
            </Switch>
        </Fragment>
    );
};

export default Routes;