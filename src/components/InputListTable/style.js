import {makeStyles} from "@material-ui/core/styles";

export const useTableStyles = makeStyles({
    table: {
        // minWidth: "100%",
        // margin: "auto",
        // "& .MuiButtonBase-root:": {
        //     margin: "10px"
        // },
    },
    tableHead: {
        backgroundColor: "#3f51b5e6",
        "& .MuiTableRow-root .MuiTableCell-root": {
            fontWeight: 600,
            color: "white",
            fontSize: 17
        }
    },
    tableCell: {
        "& .MuiTableCell-root": {
            padding: "6px",
            width: "5%"
        },
    },
    IconButton: {
        padding: 0,
        color: '#424242'
    }
});