import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Button } from '@mui/material';

// project imports
import config from 'config';
//import Logo from 'ui-component/Logo';

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (

    <Button disableRipple component={Link} to={config.defaultPath} color="inherit">
        LOGO
    </Button>
);

export default LogoSection;
