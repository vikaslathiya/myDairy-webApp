import React, {useEffect, useState} from 'react';
import {Redirect, Route} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
    const {isLoggedIn} = useSelector((state) => state.isLoggedIn);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [routeRole, setRouteRole] = useState(userInfo?.role)

    useEffect(() => {
        if (userInfo?.role === 'user') {
            setRouteRole(userInfo?.role)
        }
    }, [userInfo])

    return (routeRole === 'user') &&
        <Route render={(props) => (
            (isLoggedIn) ?
                <Component {...props} {...rest} />
                : <Redirect to="/login"/>
        )}
        />
};

export default PrivateRoute;