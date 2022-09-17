import React, {Fragment} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from "../Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomDialog = (props) => {
    const {dialogTitle, dialogContent, visibility, changeVisibility, updateAction, loader} = props

    const handleClose = () => {
        changeVisibility(false);
    };

    return (
        <Fragment>
            <Dialog open={visibility} onClose={handleClose} fullWidth>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent dividers>
                    {dialogContent}
                </DialogContent>
                <DialogActions>
                    <CustomButton variant={'outlined'} onclick={handleClose} buttonText={'Close'}/>
                    <CustomButton variant={'contained'}
                                  startIcon={
                                      loader && <CircularProgress size={20} style={{color: 'white'}}/>
                                  }
                                  onclick={updateAction}
                                  buttonText={'Update'}/>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default CustomDialog;
