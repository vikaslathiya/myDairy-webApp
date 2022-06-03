import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

const PublicRoute = ({component: Component, ...rest}) => {
    const {isLoggedIn} = useSelector((state) => state.isLoggedIn);
    // const currentPath = localStorage.getItem("currentPath")

    return (<Route  {...rest} render={props => (
        isLoggedIn ?
            // <Redirect to={currentPath ? currentPath : "/home-page"}/>
            <Redirect to={"/home-page"}/>
            : <Component {...props} />)}/>);
};

export default PublicRoute