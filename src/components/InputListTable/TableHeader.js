import React, {Fragment} from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useTableStyles} from "./style";


const CustomTableHeader = (props) => {
    const {columns} = props;
    const classes = useTableStyles()
    console.log(columns)

    return (
        <Fragment>
            <TableHead className={classes.tableHead}>
                <TableRow >
                    {columns?.map(column => (
                        <TableCell key={column?._id}>
                            {column?.title}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
        </Fragment>
    )
}

export default CustomTableHeader;