import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HIDE_ERROR } from 'store/actions';
import { Alert, AlertTitle } from '@mui/material';


const ErrorNotification = () => {
    const isOpen = useSelector(state => state.errorReducer.isOpen);
    const error = useSelector(state => state.errorReducer.error);
    const dispatch = useDispatch();

    function handleClose() {
        dispatch({ type: HIDE_ERROR });
    }

    return (
        <>
            {isOpen && error && (
                <Alert severity="error" onClose={handleClose}>
                    <AlertTitle>Error</AlertTitle>
                    {error}
                </Alert>
            )}
        </>
    )
}

export default ErrorNotification;