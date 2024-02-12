import {createApp} from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import router from "@/router";
import store from '@/store'
import Echo from "laravel-echo";
import Pusher from "pusher-js";
const app = createApp(App)
app.use(router)
app.use(store)

window.Pusher = Pusher
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'bd2df3aea7bc4b5affcb',
    cluster: 'ap2',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    wssPort: 6001,
    forceTLS: false, // Использование ws вместо wss
    enabledTransports: ['ws']
});

app.mount('#app')
