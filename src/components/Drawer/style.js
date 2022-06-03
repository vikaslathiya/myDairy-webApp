import {makeStyles} from "@material-ui/core/styles";

export const useDrawerStyle = makeStyles((theme) => ({
    drawer: {
        width: "240px",
        flexShrink: 0,
    },
    drawerPaper: {
        width: "240px",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    list: {
        padding: "10px 8px",
        "& a": {
            textDecoration: "none",
            color: "black",
            "&:hover": {
                color: "white"
            }
        },
        "& .MuiListItem-button:hover": {
            backgroundColor: "#3f51b5",
        },
        "& .MuiButtonBase-root": {
            borderRadius: 10,
            padding: "10px 45px",
            margin: "10px 0",
        }
    }
}))