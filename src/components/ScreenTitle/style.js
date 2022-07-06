import {makeStyles} from "@material-ui/core/styles";

export const useTitleStyles = makeStyles({
    mainBox: {
        display: "flex",
        marginBottom: 15,
        "&.MuiPaper-root": {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10
        }
    },
    divider: {
        backgroundColor: "#3f51b5e6",
        minWidth: "1%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    typography: {
        "&.MuiTypography-root": {
            fontWeight: 600,
            marginLeft: 20,
            padding: '6px 2px'
        }

    }
})