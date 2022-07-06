import {makeStyles} from "@material-ui/core/styles";

export const useOrderStyles = makeStyles((theme) => ({
    footer: {
        position: "fixed",
        bottom: 0,
        width: "103%",
        height: 90,
        marginLeft: -28,
        display: "flex",
        // justifyContent: "space-between",
        backgroundColor: "#3f51b5",
        alignItems: "center",
        boxShadow: "0px 0px 10px 2px black",
        "& .MuiButton-root": {
            position: "fixed",
            right: 0,
            margin: "2px 80px",
            // marginLeft: 'auto',
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