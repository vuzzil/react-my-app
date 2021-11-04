import React, { useState, useEffect } from 'react';
import { Box, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Stack, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';

//import Porject......
import BistroMenuItem from 'views/menus/BistroMenuItem';
import { getBistroMenus } from 'services/bistro.service'

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


const Page2 = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        mount: false,
        type: 'all',
        sortprice: 1,       //price from low to high...
        data: [],
        isShowImg: false,
        imgURL: '',
    });

    useEffect(() => {
        function getMenudata() {
            let params = (state.type === 'all') ?
                { sortprice: state.sortprice } : { type: state.type, sortprice: state.sortprice };

            dispatch(getBistroMenus(params))
                .then(res => {
                    if (res.data) {
                        setState(prev => ({ ...prev, data: res.data }));
                    }
                });
        };

        if (!state.mount) {
            setState(prev => ({ ...prev, mount: true }));
            getMenudata();
            //console.log("mount=" + state.mount + ",sortmethod=" + state.sortprice);
        }

    }, [state.mount, state.sortprice, state.type, dispatch]);

    const handleTypeChange = (event) => {
        let value = event.target.value;

        setState(prev => ({
            ...prev,
            type: value,
            mount: false,
        }));

    };


    const handlePriceChange = (event) => {
        let value = event.target.value;
        //console.log("value=" + value + ",mount=" + state.mount + ",sortmethod=" + state.sortprice);
        let newData = (value === 1) ? state.data.sort(function (a, b) { return Number(a.price) - Number(b.price) }) :
            state.data.sort(function (a, b) { return Number(b.price) - Number(a.price) });

        setState(prev => ({
            ...prev,
            sortprice: value,
            data: newData
        }));
    };

    const openDetail = (url) => {
        setState(prev => ({
            ...prev,
            isShowImg: true,
            imgURL: url,
        }));
    }



    const handleClose = () => {
        setState(prev => ({
            ...prev,
            isShowImg: false,
            imgURL: '',
        }));
    }

    return (
        <>
            <Box component="div" sx={{ display: 'inline', width: '100%', bgcolor: 'info.light', mt: 0 }}>
                <Stack direction="row" spacing={2}>
                    <Typography component="div" variant="h5" color="text.secondary" sx={{ width: '10%' }}>菜單</Typography>
                    {/* <Button onClick={resetMenudata} variant="contained">test</Button> */}

                    <FormControl sx={{ width: '150px' }}>
                        <InputLabel id="sorting-type">篩選</InputLabel>
                        <Select
                            labelId="sorting-type"
                            id="select-type"
                            value={state.type}
                            label="種類"
                            onChange={handleTypeChange}
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
                            value={state.sortprice}
                            label="價格"
                            onChange={handlePriceChange}
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
                    {state.data && state.data.map((children) => (
                        <Grid item key={children.menuid}>
                            <BistroMenuItem cb={openDetail} {...children} />
                        </Grid>

                    ))}
                </Grid>
            </Box >

            <Modal
                open={state.isShowImg}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <img height="550" width="100%"
                        src={state.imgURL}
                        loading="lazy"
                        alt='Detail Img'
                    />
                </Box>
            </Modal>


        </>
    );

}


export default Page2;