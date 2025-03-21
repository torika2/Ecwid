import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from "@/pages/HelloWorld.vue"
import SingleCategory from "@/pages/SingleCategory.vue"
import SingleProduct from "@/pages/SingleProduct.vue"
import ShoppingCart from "@/pages/ShoppingCart.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HelloWorld },
        { path: '/category/:categoryId(\\d+)', component: SingleCategory },
        { path: '/products/:productId(\\d+)', component: SingleProduct },
        { path: '/shopping-cart', component: ShoppingCart },
    ],
    strict : true
})

export default router