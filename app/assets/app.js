/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import './styles/sb-admin-2.min.css';


import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import store from './store';
import Index from './Index';
import Login from './auth/Login';
import Register from './auth/Register';

const routes = [
    {path: '/', component: Login},
    {path: '/auth/login', component: Login},
    {path: '/auth/register', component: Register}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
app.use(router)
app.use(store)
app.mount('#app')
