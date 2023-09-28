import httpClient from "../../../services/http.service";
// Create a new store instance.
const productsdata = {
    namespaced: true,

    state () {
        return {
            products: [],
        }
    },
    actions: {
        async GET_PRODUCTS({commit}){
            const {status, data} = await httpClient.get('products');
            if (status === 200){
                commit('SET_PRODUCTS', data)
            }
        }
    },
    mutations: {
        SET_PRODUCTS (state, backendData) {
            state.products = backendData.products
        }
    },
}
export default productsdata