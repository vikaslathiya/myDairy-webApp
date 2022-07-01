import React, {Fragment} from "react";
import {Container, Paper} from "@mui/material";
import TableContainer from "@material-ui/core/TableContainer";
import {Table} from "@material-ui/core";
import CustomTableHeader from "./TableHeader";
import CustomTableBody from "./TableBody";
import {useTableStyles} from "./style";

const InputListTable = (props) => {
    const {tableData, columns} = props;
    const classes = useTableStyles();

    return (
        <Fragment>
            <Container>
                <TableContainer className={classes.table} component={Paper}>
                    <Table aria-label="simple table">
                        <CustomTableHeader columns={columns}/>
                        <CustomTableBody rows={tableData} columns={columns}/>
                    </Table>
                </TableContainer>
            </Container>
        </Fragment>
    )
}

export default InputListTable;