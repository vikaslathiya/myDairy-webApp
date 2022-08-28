import React, {Fragment} from "react";
import {Link, useLocation} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useDrawerStyle} from "./style";

const DrawerListItem = (props) => {
    const {path, onclick, itemText} = props
    const {pathname} = useLocation();
    const classes = useDrawerStyle();

    return (
        <Fragment>
            <Link to={path} onClick={onclick} className={classes.listItem}>
                <ListItem button selected={pathname === path}>
                    <ListItemText>{itemText}</ListItemText>
                </ListItem>
            </Link>
        </Fragment>
    )
}

export default DrawerListItem;