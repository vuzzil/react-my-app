import React, { Component } from "react";

import { Container, Box, Button, Stack, Paper, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
// import { blue } from '@mui/material/colors';

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
        backgroundColor: '#0069d9',
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


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Container style={{ marginTop: "0px" }} maxWidth="md">

                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
                        <p>Home</p>
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
                        <Button color="neutral" variant="contained">
                            neutral
                        </Button>

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
                        <Button variant="contained" sx={{ color: 'secondary.light' }}>
                            secondary.light
                        </Button>
                        <Button variant="contained" sx={{ color: 'secondary.dark' }}>
                            secondary.dark
                        </Button>

                        <StyleButton variant="contained">
                            StyleButton
                        </StyleButton>
                    </Box>

                </Container>
            </React.Fragment>
        );
    }
}

export default Home;
