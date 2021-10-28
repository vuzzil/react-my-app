import * as React from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Stack, Modal } from '@mui/material';
import axios from "axios";
//import Porject......
import BistroMenuItem from 'views/menus/BistroMenuItem';


// const data = [
//     {
//         id: 'entree.001', label: '前', title: '馬鈴薯沙拉', price: '120',
//         desc: '前菜  蛋黃醬、千島醬、凱撒醬、油醋汁',
//         detail: '馬鈴薯•紅蘿蔔•洋蔥•小黃瓜 半根•德國煙燻香腸',
//         image: '/static/images/cards/entree.001.jpg'
//     },
//     {
//         id: 'entree.002', label: '前', title: '牛肉餡餅', price: '60',
//         desc: 'This impressive paella is a perfect party dish ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/entree.002.jpg'
//     },
//     {
//         id: 'plat.f01', label: '主', title: '牛肉漢堡', price: '90',
//         desc: 'This impressive paella is a perfect party dish ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/plat.f01.jpg'
//     },
//     {
//         id: 'dessert.001', label: '甜', title: '巧克力泡芙', price: '60',
//         desc: 'This impressive paella is a perfect party ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/dessert.001.jpg'
//     },
//     {
//         id: 'dessert.002', label: '甜', title: 'paris brest', price: '80',
//         desc: 'This impressive paella is a perfect party ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/dessert.002.jpg'
//     },
//     {
//         id: 'plat.b01', label: '主', title: '牛肉料理', price: '360',
//         desc: 'This impressive paella is a perfect party ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/plat.b01.jpg'
//     },
//     {
//         id: 'plat.c01', label: '主', title: '雞肉料理', price: '280',
//         desc: 'This impressive paella is a perfect party dish',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/plat.c01.jpg'
//     },
//     {
//         id: 'drink.c01', label: '飲', title: '拿鐵咖啡', price: '75',
//         desc: 'This impressive paella is a perfect party ',
//         detail: 'Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. ',
//         image: '/static/images/cards/drink.c01.jpg'
//     },
// ];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #616161',
    boxShadow: 24,
    p: 3,
};

const API_URL = process.env.REACT_APP_API_ROOT_URL + "/menus/";

//export default function Page2() {
class Page2 extends React.Component {

    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.openDetail = this.openDetail.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.resetMenudata = this.resetMenudata.bind(this);
        this.getBistroMenus = this.getBistroMenus.bind(this);


        this.state = {
            sortType: 'all',
            sortPrice: 1,       //price from low to high...
            menuData: [],       //data.sort(function (a, b) { return Number(a.price) - Number(b.price) }),
            isShowImg: false,
            imgURL: '',
        };
    };

    componentDidMount() {
        this.resetMenudata();
    }


    getBistroMenus = (type) => {
        try {
            let url = API_URL + "?sortprice=" + this.state.sortPrice;
            //console.log("getBistroMenus->type=" + type);
            if (type && type !== 'all') url = url + "&type=" + type;
            console.log("url=" + url);
            axios.get(url).then(res => this.setState({ menuData: res.data }));
        }
        catch (e) {
            console.log(e);
        }
    };

    resetMenudata = (type) => {
        this.getBistroMenus(type);
    };


    handleTypeChange = (event) => {
        let type = event.target.value;
        //console.log("type=" + type + ",sort price=" + this.state.sortPrice);
        this.resetMenudata(type);
        this.setState(prevState => ({
            ...prevState,
            sortType: type,
        }));
    };


    handlePriceChange = (event) => {
        let method = event.target.value;
        //console.log("method=" + method + "," + (method === 1));
        let newData = (method === 1) ? this.state.menuData.sort(function (a, b) { return Number(a.price) - Number(b.price) }) :
            this.state.menuData.sort(function (a, b) { return Number(b.price) - Number(a.price) });

        this.setState(prevState => ({
            ...prevState,
            sortPrice: method,
            menuData: newData
        }));
    };

    openDetail = (url) => {
        this.setState({
            isShowImg: true,
            imgURL: url,
        });
    }



    handleClose = () => {
        this.setState(prevState => ({
            ...prevState,
            isShowImg: false,
            imgURL: '',
        }));
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
                                <Grid item key={children.menuid}>
                                    <BistroMenuItem cb={this.openDetail} {...children} />
                                </Grid>

                            ))}
                    </Grid>
                </Box >

                <Modal
                    open={this.state.isShowImg}
                    onClose={this.handleClose}
                >
                    <Box sx={style}>
                        <img height="550" width="100%"
                            src={this.state.imgURL}
                            loading="lazy"
                            alt='Detail Img'
                        />
                    </Box>
                </Modal>
            </>
        );
    }
}


export default Page2;