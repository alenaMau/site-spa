import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Catalog from './components/Catalog.vue'
import Register from './components/Regiter.vue'
import Basket from './components/Basket.vue'
import Confirmation from "./components/Confirmation.vue";
import Authorization from "./components/Authorization.vue";
import CompletedOrders from "./components/CompletedOrders.vue";


const router = createRouter({
    routes: [
        {
            path: '/',
            component: Catalog,
            name: 'home'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '/basket',
            component: Basket,
            name: 'basket'
        },
        {
            path: '/confirmation',
            component: Confirmation,
            name: 'confirmation'
        },
        {
            path: '/authorization',
            component: Authorization,
            name: 'authorization'
        },
        {
            path: '/completedOrders',
            component: CompletedOrders,
            name: 'completedOrders'
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.mount('body')
