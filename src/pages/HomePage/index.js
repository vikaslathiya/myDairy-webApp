import React, {Fragment, useState} from 'react';

import {useHistory} from 'react-router-dom';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from '../../MuiCss/Mui-Css';
import AllRoutes from "../../Routes/AllRoutes";
import CustomAppBar from "../../components/AppBar";
import CustomDrawer from "../../components/Drawer";


const HomePage = () => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    // Mui-Css 
    const classes = useStyles();

    const homePageHandler = (e) => {
        e.preventDefault();
        history.push("/home-page");
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Fragment>
            <div className={classes.root}>
                <CssBaseline/>
                <CustomAppBar
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    homePageHandler={homePageHandler}
                />

                <CustomDrawer
                    open={open}
                    setOpen={setOpen}
                />

                <main className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>
                    <div className={classes.drawerHeader}/>
                    <AllRoutes/>
                </main>

            </div>
        </Fragment>
    )
}

export default HomePage;