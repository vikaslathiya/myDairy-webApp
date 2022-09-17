import React, {Fragment} from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {useTextFieldStyle} from "./style";

const CustomTextField = (props) => {
    const {
        label,
        onchange,
        name,
        fullWidth,
        autoFocus,
        variant,
        type,
        defaultValue,
        value,
        startIcon,
        endIcon,
        helperText,
        error,
        inputProps
    } = props;
    const myStyle = useTextFieldStyle();

    return (
        <Fragment>

            <TextField label={label}
                       type={type}
                       name={name}
                       value={value}
                       defaultValue={defaultValue}
                       variant={variant}
                       onChange={onchange}
                       className={myStyle.textField}
                       fullWidth={fullWidth}
                       autoFocus={autoFocus}
                       error={error}
                       helperText={helperText}
                       InputProps={{
                           startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
                           endAdornment: <InputAdornment position="start">{endIcon}</InputAdornment>,
                       }}
                       inputProps={inputProps}
                       InputLabelProps={{
                           shrink: true,
                       }}
            />
        </Fragment>
    )
}

export default CustomTextField;