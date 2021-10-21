import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { Tooltip, Box, Grow, Menu, MenuList, MenuItem, Fade } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BistroMenuItem({ id, label, title, price, desc, detail, image: imgURL }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [added, setAdded] = React.useState(false);
    const [count, setCount] = React.useState(0);

    const handleAddCartClick = () => {
        setCount((prev) => prev + 1);
        setAdded((added) => !added || count > 0);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const cancel = () => {
        setAdded(false);
        setCount(0);
        handleClose();
    };
    const openImage = (event) => {
        console.log("openImage.click(" + event.currentTarget + ")");
        handleClose();
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Card key={id} sx={{ maxWidth: 220, boxShadow: 4, }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'success.main', width: 26, height: 26, fontSize: '14px' }} aria-label="menu">
                        {label}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>

                }
                title={title}
                subheader={price}
            />
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                sx={{
                    '& .MuiMenu-root': {
                        my: 0,
                    }
                }}
            >
                <MenuList>
                    <MenuItem onClick={cancel}>取消</MenuItem>
                    <MenuItem onClick={openImage}>放大</MenuItem>
                </MenuList>
            </Menu>

            <CardMedia
                component="img"
                height="100"
                image={imgURL}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" onClick={handleAddCartClick}>
                    <AddShoppingCartIcon />
                </IconButton>
                <Box sx={{ display: 'flex' }}>
                    <Grow in={added} >
                        <Avatar sx={{ bgcolor: 'info.main', height: 18, fontSize: '16px' }} variant="square">+{count}</Avatar>
                    </Grow>
                </Box>

                <Tooltip title="詳細">
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>

                    <Typography paragraph>{detail}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
