import {makeStyles} from "@material-ui/core/styles";

export const useOrderStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        bottom: 0,
        width: "103%",
        height: 90,
        marginLeft: -28,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#3f51b5",
        alignItems: "center",
        // boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        boxShadow: "0px 0px 10px 2px black",
        "& .MuiButton-root": {
            margin: "2px 80px",
            backgroundColor: "white",
            color: "#3f51b5",
            height: 43,
            width: "14%",
            borderRadius: 22,
            fontSize: 'larger',
        }
    },
    amt: {
        marginLeft: 50,
        color: "white",
        "& .MuiTypography-root": {
            margin: 5,
            "&:nth-child(1)": {
                fontWeight: 600,
            },
            "&:last-child": {
                marginLeft: 20,
            },
        },
    },
}))