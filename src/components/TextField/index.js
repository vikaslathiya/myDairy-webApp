import React, {Fragment} from "react";
import {TextField} from "@material-ui/core";
import {useTextFieldStyle} from "./style";

const CustomTextField = (props) => {
    const {label, onchange, fullWidth, autoFocus, variant, type, defaultValue, value} = props;
    const myStyle = useTextFieldStyle();

    return (
        <Fragment>

            <TextField label={label}
                       type={type}
                       value={value}
                       defaultValue={defaultValue}
                       variant={variant}
                       onChange={onchange}
                       className={myStyle.textField}
                       fullWidth={fullWidth}
                       autoFocus={autoFocus}
                       InputLabelProps={{
                           shrink: true,
                       }}
            />
        </Fragment>
    )
}

export default CustomTextField;