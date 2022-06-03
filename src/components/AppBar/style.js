import {makeStyles} from "@material-ui/core/styles";

export const useAppBar = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - 240px)`,
        marginLeft: `240px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    typography: {
        fontWeight: "bold",
        // flexGrow: 1,
        marginRight: "auto",
        cursor: "pointer",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    button: {
        "& .MuiButton-root": {
            margin: "2px 10px",
            backgroundColor: "white",
            color: "#3f51b5"
        }
    },
    notification: {
        margin: "5px 18px",
        color: "white"
    }
}));