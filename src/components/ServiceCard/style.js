import {makeStyles} from "@material-ui/core/styles";

export const useServiceCardStyle = makeStyles((theme) => ({
    card: {
        minWidth: 300,
        height: 450,
        margin: 10,
        border: '1px solid gray',
        // boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
        boxShadow: '0px 0px 6px 3px rgb(0 0 0 / 20%)'
    },
    cardMedia: {
        height: 265,
        objectFit: 'contain',
        padding: 10,
        width: '65%',
        margin: 'auto'
    },
    cardContent: {
        "& .MuiTypography-h5": {
            fontSize: "2.2rem",
            textAlign: 'center'
        },
        "& .MuiTypography-body2": {
            fontSize: "1.2rem",
            // fontWeight: 100,
            textAlign: 'center'
        }
    }
}))