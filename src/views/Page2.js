import * as React from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Stack } from '@mui/material';
//import Porject......
import BistroMenuItem from 'views/menus/BistroMenuItem';

const data = [
    {
        id: 'entree.001', label: '前', title: '馬鈴薯沙拉', price: '$ 120',
        desc: '前菜  蛋黃醬、千島醬、凱撒醬、油醋汁',
        detail: '馬鈴薯•紅蘿蔔•洋蔥•小黃瓜 半根•德國煙燻香腸',
        image: '/static/images/cards/entree.salade.basic1.jpg'
    },
    {
        id: 'entree.002', label: '前', title: '牛肉餡餅', price: '$ 60',
        desc: 'This impressive paella is a perfect party dish ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/entree.beef.pie.jpg'
    },
    {
        id: 'entree.003', label: '前', title: '牛肉漢堡', price: '$ 90',
        desc: 'This impressive paella is a perfect party dish ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/hamburger.basic1.jpg'
    },
    {
        id: 'dessert.001', label: '甜', title: '巧克力泡芙', price: '$ 60',
        desc: 'This impressive paella is a perfect party ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/dessert.puffs.basic1.jpg'
    },
    {
        id: 'dessert.002', label: '甜', title: 'paris brest', price: '$ 80',
        desc: 'This impressive paella is a perfect party ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/dessert.paris.brest-0.jpg'
    },
    {
        id: 'plat.001', label: '主', title: '牛肉料理', price: '$ 360',
        desc: 'This impressive paella is a perfect party ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/plat.beef.1.jpg'
    },
    {
        id: 'plat.002', label: '主', title: '雞肉料理', price: '$ 280',
        desc: 'This impressive paella is a perfect party dish',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/plat.checken.1.jpg'
    },
    {
        id: 'drink.001', label: '飲', title: '拿鐵咖啡', price: '$ 75',
        desc: 'This impressive paella is a perfect party ',
        detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
        image: '/static/images/cards/drink.coffee.latate.jpg'
    },
];


//export default function Page2() {
class Page2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.state = {
            sortType: 'all',
            sortPrice: 1,  //price from low to high...
            menuData: data.sort(function (a, b) { return Number(a.price.slice(2)) - Number(b.price.slice(2)) }),
        };
    };


    handleTypeChange = (event) => {
        let type = event.target.value;
        //console.log("type=" + type + ",sort price=" + this.state.sortPrice);
        let _data = (type === 'all') ? data : data.filter(element => element.id.startsWith(type));
        //sort again by price.................
        _data = (this.state.sortPrice === 1) ? _data.sort(function (a, b) { return Number(a.price.slice(2)) - Number(b.price.slice(2)) }) :
            _data.sort(function (a, b) { return Number(b.price.slice(2)) - Number(a.price.slice(2)) });

        this.setState({
            sortType: type,
            menuData: _data
        });
    };


    handlePriceChange = (event) => {
        let method = event.target.value;
        //console.log("method=" + method + "," + (method === 1));
        let newData = (method === 1) ? this.state.menuData.sort(function (a, b) { return Number(a.price.slice(2)) - Number(b.price.slice(2)) }) :
            this.state.menuData.sort(function (a, b) { return Number(b.price.slice(2)) - Number(a.price.slice(2)) });
        this.setState({
            sortPrice: method,
            menuData: newData
        });
    };

    componentDidUpdate() {

    }


    render() {
        return (
            <>
                <Box component="div" sx={{ display: 'inline', width: '100%', bgcolor: 'info.light', mt: 0 }}>
                    <Stack direction="row" spacing={2}>
                        <Typography component="div" variant="h5" color="text.secondary" sx={{ width: '10%' }}>菜單</Typography>


                        <FormControl sx={{ width: '150px' }}>
                            <InputLabel id="sorting-type">篩選</InputLabel>
                            <Select
                                labelId="sorting-type"
                                id="select-type"
                                value={this.state.sortType}
                                label="種類"
                                onChange={this.handleTypeChange}
                                sx={{ height: 24, fontSize: '12px', }}
                            >
                                <MenuItem key="all" value="all" sx={{ fontSize: 'inherit', }}>全部</MenuItem>
                                <MenuItem key="entree" value="entree" sx={{ fontSize: 'inherit', }}>前菜</MenuItem>
                                <MenuItem key="plat" value="plat" sx={{ fontSize: 'inherit', }}>主餐</MenuItem>
                                <MenuItem key="dessert" value="dessert" sx={{ fontSize: 'inherit', }}>甜點</MenuItem>
                                <MenuItem key="drink" value="drink" sx={{ fontSize: 'inherit', }}>飲料</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ width: '150px' }}>
                            <InputLabel id="sorting-price">排序</InputLabel>
                            <Select
                                labelId="sorting-price"
                                id="select-price"
                                value={this.state.sortPrice}
                                label="價格"
                                onChange={this.handlePriceChange}
                                sx={{ height: 24, fontSize: '12px', }}
                            >
                                <MenuItem key="method1" value={1} sx={{ fontSize: 'inherit', }}>價格由低到高</MenuItem>
                                <MenuItem key="method2" value={2} sx={{ fontSize: 'inherit', }}>價格由高到低</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Box>

                <Box sx={{ flexGrow: 1, mt: '5px' }}>

                    <Grid container spacing={2} >
                        {
                            this.state.menuData.map((children) => (
                                <Grid item key={children.id}>
                                    <BistroMenuItem {...children} />
                                </Grid>

                            ))}
                    </Grid>
                </Box >
            </>
        );
    }
}


export default Page2;