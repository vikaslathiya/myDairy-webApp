import {makeStyles} from "@material-ui/core/styles";

export const useTextFieldStyle = makeStyles((theme) => ({
    textField: {
        margin: '12px 0px',
        height: 45,
        '& input[type=number]': {
            '-moz-appearance': 'textfield'
        },
        '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
        '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
        },
    }
}))