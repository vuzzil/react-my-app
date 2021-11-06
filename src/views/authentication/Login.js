import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, Card, useMediaQuery, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';

// project imports
import { login } from 'services/auth.service'
import { HIDE_ERROR } from 'store/actions';
//third party
import { useFormik } from 'formik';


const AuthWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
}));

const AuthCardWrapper = styled(Card)(({ theme }) => ({
    maxWidth: '475px',
    padding: '50px',
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
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = '請輸入email帳號';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = '請輸入正確email格式';
            }
            if (!values.password) {
                errors.password = '請輸入密碼';
            }
            return errors;
        },
        onSubmit: (values, { setFieldError, setSubmitting }) => {
            dispatch(login(values.email, values.password))
                .then(() => {
                    navigate("/bistro");
                }).catch(
                    (error) => {
                        if (error && error.includes('401')) {
                            dispatch({ type: HIDE_ERROR });
                            setFieldError("password", "登入失敗!請檢查是否輸入正確密碼");
                        }
                        setSubmitting(false);
                    }
                );
        },
    });

    useEffect(() => {
        if (!formik.isSubmitting) return;
        if (Object.keys(formik.errors).length > 0) {
            document.getElementById(Object.keys(formik.errors)[0]).focus();
        }
    }, [formik]);


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
                                                        variant={matchDownSM ? 'h5' : 'h4'}
                                                    >
                                                        Hi, Welcome Back
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        請先登入
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/*-------// FORM //-------------------------------------------------------------------- */}
                                        <Box
                                            component="form"
                                            noValidate
                                            autoComplete="off"
                                            sx={{
                                                '& .MuiTextField-root': { m: 1, width: '80%' },
                                            }}
                                        >
                                            <TextField
                                                required
                                                id="email"
                                                label="email"
                                                variant="standard"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.errors.email}
                                            />

                                            <TextField
                                                required
                                                id="password"
                                                label="password"
                                                type="password"
                                                variant="standard"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.errors.password}
                                            />

                                            <Button
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                disabled={formik.isSubmitting}
                                                onClick={formik.handleSubmit}>登入</Button>
                                        </Box>


                                        {/* End of FORM --------------------------------------------------------------- */}
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
