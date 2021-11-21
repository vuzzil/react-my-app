import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

import request from "services/request";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function Page1() {
    const [message, setMessage] = React.useState('');

    const handleClick = () => {

        request("get", "/bistro/user/").then((res) => {
            if (res.data) {
                console.log("Page1-get user=" + JSON.stringify(res.data));
                let user = res.data;
                setMessage("使用者=" + user.username + ",email=" + user.email + ",theme=" + user.theme +
                    ",is staff=" + user.staff + ",is admin=" + user.admin + ",last_login=" + user.last_login);
            }
        }).catch((error) => {
            setMessage(error.message);
        });
    }

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Divider sx={{ mt: 1 }} />
            <Button size="small" onClick={handleClick} variant="contained">test get user</Button>
            <Typography variant="body1">{message}</Typography>

        </>
    );
}