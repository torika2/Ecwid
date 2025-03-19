import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/pages/HelloWorld.vue"
import SingleCategory from "@/pages/SingleCategory.vue"
import SingleProduct from "@/pages/SingleProduct.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/category/:categoryId(\\d+)', component: SingleCategory },
        { path: '/products/:productId(\\d+)', component: SingleProduct },
    ],
    strict : true
})

export default router