import * as React from 'react';
import { Box, Grid } from '@mui/material';
//import Porject......
import BistroMenuItem from 'views/menus/BistroMenuItem';


export default function Page2() {

    const data = [
        {
            type: '前', title: '本日沙拉', price: '$ 120',
            desc: 'This impressive paella is a perfect party dish and',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/entree.salade.basic1.jpg'
        },
        {
            type: '前', title: '牛肉餡餅', price: '$ 60',
            desc: 'This impressive paella is a perfect party dish ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/entree.beef.pie.jpg'
        },
        {
            type: '前', title: '牛肉漢堡', price: '$ 90',
            desc: 'This impressive paella is a perfect party dish ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/hamburger.basic1.jpg'
        },
        {
            type: '甜', title: '巧克力泡芙', price: '$ 60',
            desc: 'This impressive paella is a perfect party ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/dessert.puffs.basic1.jpg'
        },
        {
            type: '甜', title: 'paris brest', price: '$ 80',
            desc: 'This impressive paella is a perfect party ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/dessert.paris.brest-0.jpg'
        },
        {
            type: '主', title: '牛肉料理', price: '$ 360',
            desc: 'This impressive paella is a perfect party ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/plat.beef.1.jpg'
        },
        {
            type: '主', title: '雞肉料理', price: '$ 280',
            desc: 'This impressive paella is a perfect party dish',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/plat.checken.1.jpg'
        },
        {
            type: '飲', title: '拿鐵咖啡', price: '$ 75',
            desc: 'This impressive paella is a perfect party ',
            detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
            imgUrl: '/static/images/cards/drink.coffee.latate.jpg'
        },
    ];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {
                    data.map((children) => (
                        <Grid item >
                            <BistroMenuItem {...children} />
                        </Grid>

                    ))}
            </Grid>
        </Box>
    );
}