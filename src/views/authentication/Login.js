import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, Card, useMediaQuery } from '@mui/material';

// project imports
import { login } from 'services/auth.service'


const AuthWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

const AuthCardWrapper = styled(Card)(({ theme }) => ({
    maxWidth: '475px',
    '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '20px'
    },
    [theme.breakpoints.down('lg')]: {
        maxWidth: '400px'
    },
}));

//= ===============================|| AUTH3 - LOGIN ||================================//

const Login = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
            .then(() => {
                navigate("/bistro");
            });

    }

    return (
        <AuthWrapper>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item sx={{ mb: 3 }}>
                                        <RouterLink to="#">
                                            <h1>LOGO</h1>
                                        </RouterLink>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid
                                            container
                                            direction={matchDownSM ? 'column-reverse' : 'row'}
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            <Grid item>
                                                <Stack alignItems="center" justifyContent="center" spacing={1}>
                                                    <Typography
                                                        color={theme.palette.secondary.main}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <form onSubmit={handleSubmit}>
                                            <label>
                                                email:
                                                <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </label>
                                            <label>
                                                Password:
                                                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                            </label>
                                            <input type="submit" value="Submit" />
                                        </form>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={RouterLink}
                                                to="/signup"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                註册帳號
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </AuthWrapper>

    );
};

export default Login;
