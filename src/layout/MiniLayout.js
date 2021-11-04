import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import ErrorNotification from './ErrorNotification';

const MiniLayout = () => {

    return (
        <div sx="{{display: 'flex'}} ">
            <CssBaseline />
            <Outlet />
            <ErrorNotification />
        </div >
    );
}


export default MiniLayout;