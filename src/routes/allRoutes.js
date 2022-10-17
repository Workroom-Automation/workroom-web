import React from 'react';
import MasterData from '.././views/masterData';
import Home from '.././views/home';
import People from '../views/people';
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
    },
    {
        path:'/people',
        name: 'People',
        component: People,
    }
]
export default allRoutes;