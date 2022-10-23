import React from 'react';
import MasterData from '.././views/masterData';
import Home from '.././views/home';
import People from '../views/people';
import AppBuilder from '../views/appBuilder';
const allRoutes = [
    {
        path: '/',
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
    },
    {
        path:"/appbuilder",
        name:"App Builder",
        component: AppBuilder

    }
]
export default allRoutes;