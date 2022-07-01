import {makeStyles} from "@material-ui/core/styles";

export const useTableStyles = makeStyles({
    table: {
        minWidth: "100%",
        margin: "auto",
        "& .MuiButtonBase-root:": {
            margin: "10px"
        },
    },
    tableFooter: {
        "&": {
            display: "flex",
            justifyContent: "space-between",
        },
        "& .MuiButtonBase-root": {
            margin: " 6px",
            fontSize: "10px",
            padding: "5px",
        },
    },
    tableCell: {
        "& .MuiTableCell-root": {
            padding: "6px",
            width: "5%"
        },
    }
});