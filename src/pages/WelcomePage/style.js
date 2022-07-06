import {makeStyles} from "@material-ui/core/styles";
import background from '../../Asset/1751315.jpg';
import milkBackground from '../../Asset/bg0.jpg';

export const useWelcomeStyle = makeStyles((theme) => ({
    welcome: {
        padding: '5px 50px',
        minHeight: 345,
        marginTop: 90,
        "&::before": {
            content: '"\\2610"',
            background: `url(${background}) no-repeat center center/cover`,
            position: 'absolute',
            height: 500,
            top: 0,
            left: 0,
            width: '100%',
            zIndex: -1,
            opacity: 0.5,
        },
        "& .MuiTypography-root": {
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Acme, sans-serif',
            fontSize: '1.5rem',
            "&.MuiTypography-h2": {
                fontSize: '3.8rem',
                marginBottom: 10,
            }
        },
        "& .orderButton": {
            display: 'flex',
            justifyContent: 'center',
            "& .MuiButtonBase-root": {
                padding: ' 2px 20px',
                border: '1px solid black',
                backgroundColor: '#3f51b5',
                color: 'white',
                margin: 17,
                fontSize: '1.3rem',
                borderRadius: 10,
                cursor: 'pointer',
            },
        },
    },
    services: {
        "& .MuiTypography-root": {
            display: 'flex',
            justifyContent: 'center',
            fontFamily: 'Acme, sans-serif',
            fontSize: '3.5rem',
        },
        "& .MuiTypography-body2": {
            fontSize: '1.2rem',
        },
        "& .MuiGrid-container" : {
            margin: '20px 2px'
        }
    },
    counting: {
        minHeight: 200,
        "&::before": {
            content: '"\\2610"',
            background: `url(${milkBackground}) no-repeat center center/cover`,
            position: 'absolute',
            height: 200,
            // top: 0,
            left: 0,
            width: '100%',
            zIndex: -1,
            opacity: 0.5,
        },
        "& .MuiTypography-root": {
            display: 'flex'
        },
    }
}))