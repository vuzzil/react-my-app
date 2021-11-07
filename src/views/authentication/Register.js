import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, Card, useMediaQuery, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
// project imports
import { register } from 'services/auth.service'

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

//= ==============================|| AUTH3 - REGISTER ||===============================//

const Register = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
    const [isSuccess, setSuccess] = useState(false);


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            password_confirm: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.username) {
                errors.username = '請輸入使用者名稱';
            }
            if (!values.email) {
                errors.email = '請輸入email帳號';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = '請輸入密碼';
            }
            if (!values.password_confirm) {
                errors.password_confirm = '請再次輸入密碼';
            } else if (values.password !== values.password_confirm) {
                errors.password_confirm = '密碼必須一致';
            }
            return errors;
        },
        onSubmit: ({ username, email, password }, { resetForm, setSubmitting }) => {
            register(username, email, password)
                .then(() => {
                    resetForm({});
                    setSuccess(true);
                    setSubmitting(false);
                });
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
                                        <Link to="#">
                                            <h1>LOGO</h1>
                                        </Link>
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
                                                        Sign up
                                                    </Typography>
                                                    <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : ''}>
                                                        Enter your credentials to continue
                                                    </Typography>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* Register -------------------------------------------------------- */}
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
                                                id="username"
                                                label="使用者名稱"
                                                variant="standard"
                                                value={formik.values.username}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.errors.username}
                                            />

                                            <TextField
                                                required
                                                id="email"
                                                label="email帳號"
                                                variant="standard"
                                                value={formik.values.email}
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                helperText={formik.errors.email}
                                            />

                                            <TextField
                                                required
                                                id="password"
                                                label="密碼"
                                                type="password"
                                                variant="standard"
                                                value={formik.values.password}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.errors.password}
                                            />

                                            <TextField
                                                required
                                                id="password_confirm"
                                                label="再次確認密碼"
                                                type="password"
                                                variant="standard"
                                                value={formik.values.password_confirm}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                helperText={formik.errors.password_confirm}
                                            />


                                            <Button
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                disabled={formik.isSubmitting}
                                                onClick={formik.handleSubmit}>註册新帳號</Button>
                                        </Box>
                                        {/* End of FORM --------------------------------------------------------------- */}

                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid item container direction="column" alignItems="center" xs={12}>
                                            <Typography
                                                component={Link}
                                                to="/login"
                                                variant="subtitle1"
                                                sx={{ textDecoration: 'none' }}
                                            >
                                                {isSuccess ? '註册成功!' : '已經有帳號,'} 請由此登入
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

export default Register;
