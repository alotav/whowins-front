import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue'
import Login from '../Views/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
})

export default router