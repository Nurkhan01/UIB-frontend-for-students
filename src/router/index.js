import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import UsersData from "@/views/UsersData.vue";
import PostsData from "@/views/PostsData.vue";
import UserData from "@/components/users/UserData.vue";
import PostData from "@/components/posts/PostData";
import ProductsData from "@/views/ProductsData.vue";
import ProductData from "@/components/products/ProductData.vue";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/users', component: UsersData },
    { path: '/user-data', component: UserData },
    { path: '/posts', component: PostsData },
    { path: '/products', component: ProductsData },
    { path: '/product/:index', component: ProductData },
    { path: '/post/:id/user/:userId', component:  PostData},
    {
        path: '/login',
        component: () => import('@/views/LoginPage.vue'),
    },    {
        path: '/message',
        component: () => import('@/views/WebSocket/MessageSocket'),
    },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
// Now the app has started!
