import React from 'react';
import { useRoutes } from 'react-router-dom';


import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';

// project imports.................................
import Home from 'views/Home';
import Setting from 'views/Setting';
import Page1 from 'views/Page1';
import Page2 from 'views/Page2';
import Page3 from 'views/Page3';
import Page4 from 'views/Page4';
import GetBistroMenu from 'views/GetBistroMenu';

// ===========================|| MAIN ROUTING ||=========================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/page1',
            element: <Page1 />
        },
        {
            path: '/page2',
            element: <Page2 />
        },
        {
            path: '/setting',
            element: <Setting />
        },
        {
            path: '/Page3',
            element: <Page3 />
        },
        {
            path: '/Page4',
            element: <Page4 />
        },
        {
            path: '/bistro/getBistroMenu',
            element: <GetBistroMenu />
        },
        {
            path: '/icons/material-icons',
            element: <Home />
        },

        {
            path: '/sample-page',
            element: <Home />
        }
    ]
};

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
}
