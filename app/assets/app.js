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
import AddNote from './notes/Add';
import EditNote from './notes/Edit';

const routes = [
    {path: '/', component: Index, meta: {requiresAuth: true}},
    {path: '/auth/login', component: Login},
    {path: '/auth/register', component: Register},
    {path: '/notes/add', component: AddNote, meta: {requiresAuth: true}},
    {name:'EditNote', path: '/notes/update/:noteId', component: EditNote, meta: {requiresAuth: true}}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.token) {
            next()
            return
        }
        next('/auth/login')
    } else {
        next()
    }
})

const app = createApp({})
app.use(router)
app.use(store)
app.mount('#app')
