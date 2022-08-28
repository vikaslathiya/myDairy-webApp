import {makeStyles} from "@material-ui/core/styles";

export const useItemCardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // backgroundColor: "rgb(0 0 0 / 4%)",
        margin: "15px 7px",
        boxShadow: "0px 0px 5px 1px gray",

        "& .MuiCardContent-root": {
            padding: "12px 25px",
            paddingBottom: "12px !important",
        }
    },
    // details: {
    //     display: 'flex',
    //     flexDirection: 'column',
    // },
    // content: {
    //     flex: '1 0 auto',
    // },
    cover: {
        width: 150,
        height: 150
    },
    // controls: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     paddingLeft: theme.spacing(1),
    //     paddingBottom: theme.spacing(1),
    // },
    // playIcon: {
    //     height: 38,
    //     width: 38,
    // },
    itemName: {
        fontWeight: 600,
    },
    paper: {
        width: "fit-content",
        borderRadius: 26,
        margin: "10px 0",
        "& .MuiFormControl-root": {
            margin: 0,
            "& .MuiInputBase-root": {
                height: 36,
                width: 50,
                borderRadius: 0,
                "& .MuiOutlinedInput-input": {
                    textAlign: "center",
                    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                        '-webkit-appearance': 'none',
                    },
                }
            }
        },

        "& .MuiButtonBase-root": {
            height: 36,
            borderRadius: 0,
            padding: 10,
            minWidth: 40,
            "&:nth-child(1)": {
                borderBottomLeftRadius: 26,
                borderTopLeftRadius: 26
            },
            "&:last-child": {
                borderBottomRightRadius: 26,
                borderTopRightRadius: 26
            }
        }
    },
    secContent: {
        height: "fit-content",
        margin: "auto",
        marginRight: 0,
        marginLeft: "auto",
        textAlign: "center",
        "& .MuiTypography-root": {
            padding: 5,
        }
    },
    qtyBox: {
        display: "flex",
        alignItems: "center"
    },
    statusColor: {
        width: 10,
        height: 10,
        // border: '1px solid black',
        borderRadius: 10,
        backgroundColor: props => props.itemStatusColor
    }
}));