/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';



import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import Index from './Index';
import Login from './auth/Login';

const routes = [
    {path: '/', component: Index},
    {path: '/auth/login', component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
app.use(router)
app.mount('#app')
