import {makeStyles} from "@material-ui/core/styles";

export const useItemCardStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: "15px 7px",
        boxShadow: "0px 0px 5px 1px gray",
        "&:hover": {
            '& .MuiCardActions-root': {
                opacity: 1
            }
        },
        "& .MuiCardContent-root": {
            padding: "12px 25px",
            paddingBottom: "12px !important",
        }
    },
    cover: {
        width: 150,
        height: 150
    },
    itemName: {
        fontWeight: 600,
        fontSize: 24
    },
    paper: {
        width: "fit-content",
        borderRadius: 26,
        margin: "10px 0",
        "& .MuiFormControl-root": {
            margin: 0,
            height: 36,
            "& .MuiInputBase-root": {
                height: 36,
                width: 55,
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
        borderRadius: 10,
        backgroundColor: props => props.itemStatusColor
    },
    cardActions: {
        display: 'flex',
        alignItems: 'flex-end',
        marginLeft: 'auto',
        opacity: 0,
        transition: 'opacity 1s',
        "& .MuiGrid-root .css-w4z10b-MuiStack-root": {
            margin: 3
        }
    },
    IconButton: {
        padding: 0,
        color: '#2d2d2d'
    }
}));