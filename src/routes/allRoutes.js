import React from 'react';
import MasterData from '.././views/masterData';
import Home from '.././views/home';
const allRoutes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path:'/masterData',
        name: 'Master Data',
        component: MasterData,
    }
]
export default allRoutes;