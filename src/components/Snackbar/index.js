import React, {forwardRef, Fragment, useEffect, useState} from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = (props) => {
    const {type, message, duration} = props;
    const [close, setClose] = useState(false);

    useEffect(() => {
        if (type) {
            setClose(true);
        }
    }, [type]);

    const handleClose = () => {
        setClose(false);
    };

    return (
        <Fragment>
            <Stack spacing={2}>
                <Snackbar
                    open={close}
                    autoHideDuration={duration}
                    onClose={handleClose}
                >
                    <Alert onClose={handleClose} severity={type}>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Fragment>

    );
}

export default CustomizedSnackbars;
