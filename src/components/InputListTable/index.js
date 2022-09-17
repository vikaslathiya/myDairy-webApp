import React, {Fragment} from "react";
import {Container, Pagination, PaginationItem, Paper} from "@mui/material";
import TableContainer from "@material-ui/core/TableContainer";
import {Table} from "@material-ui/core";
import CustomTableHeader from "./TableHeader";
import CustomTableBody from "./TableBody";
import {useTableStyles} from "./style";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const InputListTable = (props) => {
    const {tableData, columns, editAction} = props;
    const classes = useTableStyles();

    return (
        <Fragment>
            <Container style={{ minWidth: '100%'}}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" className={classes.table}>
                        <CustomTableHeader columns={columns}/>
                        <CustomTableBody rows={tableData} columns={columns} editAction={editAction}/>
                    </Table>
                    <Stack spacing={2}>
                        <Pagination
                            count={1}
                            style={{marginLeft: "auto", padding: "12px 20px"}}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </TableContainer>
            </Container>
        </Fragment>
    )
}

export default InputListTable;