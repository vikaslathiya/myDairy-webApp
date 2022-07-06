import {makeStyles} from "@material-ui/core/styles";

export const useCountStyle = makeStyles((theme) => ({
    countBox: {
        // textAlign: 'center',
        // marginTop: 30,
        justifyContent: "center",
        display: 'grid'
    },
    title: {
        '&.MuiTypography-root': {
            fontSize: '2.5rem',
            fontFamily: 'Acme, sans-serif',
            alignItems: 'end'
        }
    },
    count: {
        '&.MuiTypography-root': {
            fontSize: '1.5rem',
            justifyContent: 'center'
        }
    }
}))