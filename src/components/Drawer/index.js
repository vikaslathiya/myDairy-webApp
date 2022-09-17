import React, {Fragment, useEffect, useState} from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link, useLocation} from "react-router-dom";
import {useDrawerStyle} from "./style";
import {useTheme} from "@material-ui/core/styles";
import DrawerListItem from "./drawerListItem";

const CustomDrawer = (props) => {
    const {open, setOpen} = props
    const theme = useTheme();
    const {pathname} = useLocation();
    const classes = useDrawerStyle();
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const [routeRole, setRouteRole] = useState(userInfo?.role)
    console.log(pathname)
    useEffect(() => {
        if (userInfo && userInfo?.role) {
            setRouteRole(userInfo?.role)
        }
    }, [userInfo])

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' && <ArrowBackIosIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List className={classes.list}>
                    {routeRole === 'User' && <>
                        <DrawerListItem
                            path={'/home-page'}
                            onclick={handleDrawerClose}
                            itemText={'Home'}
                        />
                        <DrawerListItem
                            path={'/new-order'}
                            onclick={handleDrawerClose}
                            itemText={'New Order'}
                        />
                        <DrawerListItem
                            path={'/last-order'}
                            onclick={handleDrawerClose}
                            itemText={'Show Last Order'}
                        />
                        <DrawerListItem
                            path={'/all-order'}
                            onclick={handleDrawerClose}
                            itemText={'All Orders'}
                        />
                    </>}

                    {routeRole === 'Admin' && <>
                        <DrawerListItem
                            path={'/dashboard'}
                            onclick={handleDrawerClose}
                            itemText={'Dashboard'}
                        />
                        <DrawerListItem
                            path={'/products'}
                            onclick={handleDrawerClose}
                            itemText={'Products'}
                        />
                        <DrawerListItem
                            path={'/users'}
                            onclick={handleDrawerClose}
                            itemText={'Users'}
                        />
                        <DrawerListItem
                            path={'/support'}
                            onclick={handleDrawerClose}
                            itemText={'Support'}
                        />
                    </>}
                </List>
            </Drawer>
        </Fragment>
    )
}

export default CustomDrawer;