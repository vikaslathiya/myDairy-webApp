import {makeStyles} from "@material-ui/core/styles";
import background from '../../Asset/cows-eating.jpg';

export const useLogInStyle = makeStyles((theme) => ({
    container: {
        borderRadius: 10,
        boxShadow: "0px 0px 6px 0px gray",
        textAlign: "center",
        justifyContent: "center",
        width: "25%",
        margin: "10% auto auto",
        backgroundColor: 'white',
        "&::before": {
            content: '"\\2610"',
            background: `url(${background}) no-repeat center center/cover`,
            position: 'fixed',
            height: '100vh',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1,
            opacity: 0.5,
        }
    },
    heading: {
        borderRadius: '7px 7px 0px 0px',
        padding: 8,
        // height: 50,
        fontWeight: 600,
        backgroundColor: '#3f51b5',
        color: 'white',
        boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)'
    },
    form: {
        marginTop: 8,
        padding: '0 50px'
    },
    btn: {
        margin: 15,
        padding: '0 34px'
    },
    footer: {
        margin: 12,
        color: "gray",
    },
    footerText: {
        cursor: "pointer",
        fontSize: 14
    },
    formControl: {
        justifyContent: 'left',
        display: 'flex',
        margin: '6px 0',
        "& .MuiFormGroup-root .MuiFormControlLabel-root": {
            fontSize: '1rem',
            fontWeight: 400,
            color: 'rgba(0, 0, 0, 0.54)',
            marginLeft: 2,
            marginRight: 12
        }
    }
}))