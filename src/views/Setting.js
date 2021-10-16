import React, { useContext } from "react";

import { Container, Box, Button, Stack, Paper, Divider, ToggleButtonGroup, ToggleButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
// import { blue } from '@mui/material/colors';

import { CustomThemeContext } from '../themes/CustomThemeProvider';

//import axios from "axios";

//style compoonent test  --------------------------------
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.dark,
}));

const StyleButton = styled(Button)(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',

    ].join(','),
    '&:hover': {
        backgroundColor: 'red',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));




export default function Setting() {
    //theme switch...........
    const { currentTheme, setTheme } = useContext(CustomThemeContext);

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    }



    return (
        <React.Fragment>
            <Container style={{ marginTop: "0px" }} padding="2">

                <Box sx={{ height: '100vh' }} spacing={2}>

                    <Stack direction="row" spacing={2}>
                        <Typography variant="h4" gutterBottom component="div">
                            Colors
                        </Typography>
                        <Button color="primary" variant="contained">
                            primary
                        </Button>
                        <Button color="secondary" variant="contained">
                            secondary
                        </Button>
                        <Button color="error" variant="contained">
                            error
                        </Button>
                        <Button color="warning" variant="contained">
                            warning
                        </Button>
                        <Button color="info" variant="contained">
                            info
                        </Button>
                        <Button color="success" variant="contained">
                            success
                        </Button>
                        {/* <Button color="neutral" variant="contained">
                        neutral
                    </Button> */}
                    </Stack>
                    {/*style={{ marginTop: "20px" ,marginBottom: "20px"}}*/}
                    <Divider variant="middle" sx={{ my: '20px' }} />


                    {/* style compoonent */}
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                        <Item>item1</Item>
                    </Stack>

                    <Divider variant="middle" sx={{ my: '20px' }} />

                    {/* use custom color ------------------------------------------ */}
                    <Stack direction="row" spacing={2}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Use sx expression
                        </Typography>
                        <Button variant="contained" sx={{ color: 'secondary.light' }}>
                            light
                        </Button>
                        <Button variant="contained" sx={{ color: 'secondary.dark' }}>
                            dark
                        </Button>

                        <StyleButton variant="contained">
                            StyleButton1
                        </StyleButton>
                    </Stack>
                    <Divider variant="middle" sx={{ my: '20px' }} />
                    <StyleButton variant="contained">
                        StyleButton2
                    </StyleButton>

                    {/*  ThemeToggle ------------------------------------------ */}
                    <Typography sx={{ fontSize: 14 }} color="text.main" gutterBottom>
                        Change Theme
                    </Typography>
                    <ToggleButtonGroup
                        value={currentTheme}
                        exclusive
                        onChange={handleThemeChange}>
                        <ToggleButton value='light'>
                            light
                        </ToggleButton>
                        <ToggleButton value='mui'>
                            mui deafault
                        </ToggleButton>
                        <ToggleButton value='botanical'>
                            botanical
                        </ToggleButton>
                        <ToggleButton value='dark'>
                            dark
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

            </Container>
        </React.Fragment>
    );
}



