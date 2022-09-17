import React, {Fragment, useEffect, useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useTableStyles} from "./style";
import {useLocation} from "react-router-dom";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from "@material-ui/core/IconButton";
import Stack from "@mui/material/Stack";
import {Tooltip} from "@material-ui/core";

const CustomTableBody = (props) => {
    const {rows, columns, editAction} = props;
    const [tableData, setTableData] = useState([])
    const {pathname} = useLocation()
    const classes = useTableStyles();

    useEffect(() => {
        if (rows?.length > 0) {
            if (pathname === '/all-order') {
                const tempData = []
                rows.map(row => {
                    const obj = {}
                    obj._id = row?.id
                    obj.date = row?.items?.date;
                    obj.amt = row?.items?.totalAmt;

                    row?.items?.orderItems?.map(item => {
                        obj[item?.image] = {qty: item?.addedQty, rate: item?.amt}
                    })

                    tempData.push(obj)
                })

                console.log(tempData)
                setTableData(tempData)
            } else if (pathname === '/users') {
                setTableData(rows)
            }

        }
    }, [rows])

    return (
        <Fragment>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow key={row?._id} id={row._id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        {columns?.map(column => {
                            if (column !== undefined) {
                                if (pathname === '/all-order') {
                                    let value;
                                    if (column?._id === "date" || column?._id === "amt") {
                                        column?._id === 'date' ?
                                            value = new Date(row[column?._id]).toLocaleDateString('en-us', {
                                                year: "numeric", month: "numeric", day: "numeric",
                                            }) :
                                            value = row[column?._id]
                                    } else {
                                        value = row[column?._id]?.qty
                                    }
                                    return (
                                        <TableCell
                                            key={column?._id}
                                            align={column?._id === 'date' ? 'left' : 'center'}
                                            style={{fontSize: 15}}
                                        >
                                            {value === undefined ? '-' :
                                                column?._id === 'amt' ? '\u20B9 ' + value : value
                                            }
                                        </TableCell>
                                    )
                                } else if (pathname === '/users') {
                                    let value;
                                    if (column?._id === 'user-orders') {
                                        const x = row?.[column?._id] ? row?.[column?._id] : {}
                                        value = Object.keys(x).length
                                        console.log('value', value)
                                    } else {
                                        value = row[column?._id]
                                    }
                                    console.log(value)

                                    if (column?._id === 'actions') {
                                        return (
                                            <TableCell
                                                key={column?._id}
                                                align={'center'}
                                            >
                                                <Stack direction="row" justifyContent={'center'} spacing={1}>
                                                    <Tooltip title="Edit" placement="left">
                                                        <IconButton aria-label="Edit" size="large"
                                                                    className={classes.IconButton}>
                                                            <CreateOutlinedIcon onClick={() => editAction(row)}/>
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete" placement="right">
                                                        <IconButton aria-label="Delete" size="large"
                                                                    className={classes.IconButton}>
                                                            <DeleteOutlineOutlinedIcon/>
                                                        </IconButton>
                                                    </Tooltip>
                                                </Stack>
                                            </TableCell>
                                        )
                                    } else {
                                        return (
                                            <TableCell
                                                key={column?._id}
                                                align={column?._id === 'date' ? 'left' : 'center'}
                                                style={{fontSize: 15}}
                                            >
                                                {value === undefined ? '-' : value}
                                            </TableCell>
                                        )
                                    }

                                }
                            }
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Fragment>
    )
}

export default CustomTableBody;