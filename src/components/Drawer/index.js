import React, {Fragment} from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link, useRouteMatch} from "react-router-dom";
import {useDrawerStyle} from "./style";
import {useTheme} from "@material-ui/core/styles";

const CustomDrawer = (props) => {
    const {open, setOpen} = props
    const theme = useTheme();
    const classes = useDrawerStyle();
    const match = useRouteMatch();

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

                    <Link to={`/new-order`} onClick={handleDrawerClose}>
                        <ListItem button>
                            <ListItemText>New Order</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={`${match.url}/copy-order`} onClick={handleDrawerClose}>
                        <ListItem button>
                            <ListItemText>Copy Order</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={`${match.url}/last-order`} onClick={handleDrawerClose}>
                        <ListItem button>
                            <ListItemText> Show Last Order</ListItemText>
                        </ListItem>
                    </Link>

                    <Link to={`${match.url}/all-order`} onClick={handleDrawerClose}>
                        <ListItem button>
                            <ListItemText>All Orders</ListItemText>
                        </ListItem>
                    </Link>

                </List>
            </Drawer>
        </Fragment>
    )
}

export default CustomDrawer;