import * as React from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Stack, Modal } from '@mui/material';
import axios from "axios";
//import Porject......
import BistroMenuItem from 'views/menus/BistroMenuItem';

const API_URL = process.env.REACT_APP_API_ROOT_URL + "/bistro/menus/";
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

//==============================================================================
//  Another Implement
//  1.use React.Component (not function component)
//  2.call axios directly
//
//  disadvantage:Can't use dispath for Global error handling
//==============================================================================
class GetBistroMenu2 extends React.Component {

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


export default GetBistroMenu2;