import React, {Fragment, useEffect, useState} from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {useTableStyles} from "./style";

const CustomTableBody = (props) => {
    const {rows, columns} = props;
    const [tableData, setTableData] = useState([])
    const classes = useTableStyles();

    useEffect(() => {
        if (rows?.length > 0) {
            const tempData = []
            rows.map(row => {
                const obj = {}
                obj._id = row?.id
                obj.date = row?.items?.date;
                obj.amt = row?.items?.totalAmt;

                row?.items?.orderItems?.map(item => {
                    obj[item?.itemName] = {qty: item?.addedQty, rate: item?.amt}
                })

                tempData.push(obj)
            })

            console.log(tempData)
            setTableData(tempData)
        }
    }, [rows])

    return (
        <Fragment>
            <TableBody>
                {tableData.map((row) => (
                    <TableRow key={row?._id} id={row._id} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                        {columns?.map(column => {
                            let value, rate;
                            if (column?._id === "date" || column?._id === "amt") {
                                column?._id === 'date' ?
                                    value = new Date(row[column?._id]).toLocaleDateString('en-us', {
                                        year: "numeric", month: "numeric", day: "numeric",
                                    }) :
                                    value = row[column?._id]
                            } else {
                                value = row[column?.title]?.qty
                                rate = row[column?.title]?.rate
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

                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Fragment>
    )
}

export default CustomTableBody;