import React, {Fragment} from "react";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useAppBar} from "./style";
import CustomButton from "../Button";
import {logoutUser} from "../../Redux/Actions/Auth/LoginActions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const CustomAppBar = (props) => {
    const {handleDrawerOpen, homePageHandler, open} = props
    const appBarStyled = useAppBar();
    const dispatch = useDispatch();
    const history = useHistory();

    const profileHandler = (e) => {
        e.preventDefault();
        history.push("/user-profile");
    }

    const logoutHandler = () => {
        dispatch(logoutUser(history))
    }

    return (
        <Fragment>
            <AppBar
                position="fixed"
                className={clsx(appBarStyled.appBar, {
                    [appBarStyled.appBarShift]: open,
                })}

            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerOpen}
                        className={clsx(appBarStyled.menuButton, open && appBarStyled.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h4" className={appBarStyled.typography} onClick={homePageHandler}>
                        myDairy
                    </Typography>

                    <IconButton className={appBarStyled.notification}>
                        <NotificationsIcon />
                    </IconButton>

                    <div className={appBarStyled.button}>
                        <CustomButton

                            buttonText={'Profile'}
                            variant="contained"
                            onclick={profileHandler}
                        />

                        <CustomButton
                            // className={appBarStyled.button}
                            buttonText={'Logout'}
                            variant="contained"
                            onclick={logoutHandler}
                        />

                    </div>

                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default CustomAppBar;