import React, {useEffect, useState} from "react";
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";


const AdminRoutes = ({component: Component, ...rest}) => {
    const {isLoggedIn} = useSelector((state) => state.isLoggedIn);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [routeRole, setRouteRole] = useState(userInfo?.role)

    useEffect(() => {
        if (userInfo?.role === 'Admin') {
            setRouteRole(userInfo?.role)
        }
    }, [userInfo])

    return (routeRole === 'Admin') &&
        <Route render={(props) => (
            (isLoggedIn) ? <Component {...props} {...rest} />
                : <Redirect to="/login"/>
        )}
        />;
}

export default AdminRoutes;