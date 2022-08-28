import {Fragment} from "react";
import {Switch} from "react-router-dom";
import PublicRoute from "./PublicRoute";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import DisplayAgent from "../pages/User/DisplayAgentCode/DisplayAgent";
import {Route} from "@mui/icons-material";
import {useSelector} from "react-redux";

const Routes = () => {
    const {isLoggedIn} = useSelector((state) => state.isLoggedIn);

    return (
        <Fragment>
            <Switch>
                <PublicRoute path="/login" component={LoginPage}/>
                <PublicRoute path="/display-agentCode" component={DisplayAgent}/>
                {isLoggedIn && <Route component={HomePage}/>}
                <PublicRoute exact path="/*" component={LoginPage}/>
            </Switch>
        </Fragment>
    );
};

export default Routes;