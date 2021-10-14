import React from 'react';
import { useRoutes } from 'react-router-dom';


import MainLayout from 'layout/MainLayout';
// import Loadable from 'ui-component/Loadable';

// project imports.................................
import Home from 'views/Home';
import Setting from 'views/Setting';
import Page1 from 'views/Page1';
import Page2 from 'views/Page2';

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
            path: '/utils/util-shadow',
            element: <Home />
        },
        {
            path: '/icons/tabler-icons',
            element: <Home />
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
