import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { Details } from "./details/details";

const routeConfig : Routes = [
    {
        path : '',
        component: Home,
        title: 'Home page'
    },
    {
        path: 'details/:id',    // id is dynamic 
        component: Details,
        title: 'Home details'
    }
];

export default routeConfig;

