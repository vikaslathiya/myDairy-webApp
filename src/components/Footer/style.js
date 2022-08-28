import {makeStyles} from "@material-ui/core/styles";

export const useFooterStyle = makeStyles((theme) => ({
    footerBox: {
        backgroundColor: 'black',
        width: '100%',
        minHeight: 50,
        color: 'white',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        // marginTop: 40,
        position: 'fixed',
        left: 0,
        bottom: 0
    }
}))