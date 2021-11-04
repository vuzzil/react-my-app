import React from 'react';
import { useRoutes } from 'react-router-dom';


import MainLayout from 'layout/MainLayout';
import MiniLayout from 'layout/MiniLayout';
// import Loadable from 'ui-component/Loadable';

// project imports.................................
import Home from 'views/Home';
import Setting from 'views/Setting';
import Page1 from 'views/Page1';
import Page2 from 'views/Page2';
import Page3 from 'views/Page3';
import Page4 from 'views/Page4';
import GetBistroMenu from 'views/GetBistroMenu';

import Login from 'views/authentication/Login';
import Register from 'views/authentication/Register';

// ===========================|| MAIN ROUTING ||=========================== //

const AuthRoute = {
    path: '/',
    element: <MiniLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <Register />
        },
    ]
};

const MainRoutes = (isLoggedIn) => {
    return {
        path: '/bistro',
        element: (isLoggedIn) ? <MainLayout /> : <Login />,
        children: [

            {
                path: '/bistro',
                element: <Home />
            },
            {
                path: '/bistro/page1',
                element: <Page1 />
            },
            {
                path: '/bistro/page2',
                element: <Page2 />
            },
            {
                path: '/bistro/setting',
                element: <Setting />
            },
            {
                path: '/bistro/Page3',
                element: <Page3 />
            },
            {
                path: '/bistro/Page4',
                element: <Page4 />
            },
            {
                path: '/bistro/getBistroMenu',
                element: <GetBistroMenu />
            },

        ]
    };
}

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes({ isLoggedIn }) {
    return useRoutes([AuthRoute, MainRoutes(isLoggedIn),]);
}
