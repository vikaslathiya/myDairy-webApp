import {makeStyles} from "@material-ui/core/styles";

export const useProductStyles = makeStyles((theme) => ({
    btnGrid: {
        display: "flex",
        // justifyContent: "end",
        "& .MuiButtonBase-root": {
            fontSize: '1rem',
            minWidth: '12%',
            margin: 5
        }
    },
    fieldBox: {
        display: "flex",
        alignItems: 'center',
        "& .MuiGrid-root .MuiFormControl-root .MuiInputBase-root": {
            height: 45
        }
    },
    label: {
        justifyContent: 'end',
        display: 'flex',
        marginRight: 30,
    }
}))