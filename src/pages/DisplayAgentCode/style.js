import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles(() => ({
    container: {
        padding: "50px 30px",
        textAlign: "center"
    },
    listText: {
        "& .MuiListItem-root": {
            padding: 0,
        },
        "& .MuiListItem-root .MuiListItemText-root:nth-child(1)": {
            maxWidth: "150px",
        },
        "& .MuiListItem-root .MuiListItemText-root:nth-child(2)": {
            maxWidth: "150px",
        },
    },
    box: {
        boxShadow: "0 0 4px black",
        width: "90%",
        borderRadius: "10px",
        padding: "20px 60px",
        margin: "auto",
    },
    copy: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
    },
    copiedText: {
        marginRight: 3,
    }
}))