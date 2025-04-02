import React from 'react'
import { Snackbar,Slide,Alert } from '@mui/material'


const GeneralSnackbarAlerts = ({open,type,msg,setOpen}) => {
    function SlideTransition(props) {
        return <Slide {...props} direction="left" />;
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false)
    };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    slots={{transition:SlideTransition}}
                    sx={{ width: '30%'}}>
        <Alert severity={type} sx={{ width: '100%'}} onClose={handleClose}>
            {msg}
        </Alert>
    </Snackbar>
  )
}

export default GeneralSnackbarAlerts