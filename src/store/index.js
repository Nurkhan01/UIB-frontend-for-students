import {createStore} from 'vuex'
import productsdata from "./modules/products/productsdata";
// Create a new store instance.
const store = createStore({
    modules: {
        productsdata
    },
})
export default store