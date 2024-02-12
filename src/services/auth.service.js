//Сервис для авторизации
import httpClient, {API_ENDPOINT} from "@/services/http.service"
import router from "@/router"
import axios from "axios";

const authService = {
    currentUser: null,
    isValidAuthKey: true,
    isLoggedIn() {
        return !!localStorage.getItem('ACCESS_TOKEN')
    },
    getToken() {
        return localStorage.getItem('ACCESS_TOKEN')

    },
    defaultHomePageForRole() {
        return this.routerPush('/')
    },
    routerPush(name) {
        return router.push(name)
    },
    async login(formData) {
        try {
            const {status, data} = await axios.post(`${API_ENDPOINT}auth/login`, formData)
            if (status === 200) {
                localStorage.setItem('ACCESS_TOKEN', data.access_token, 1200)
                return {response: data, success: true}
            }
        } catch (e) {
            return {
                success: false,
                errors: e?.response?.data?.errors || {}
            }
        }
    },
    async me() {
        try {
            const {status, data} = await httpClient.get('auth/me')
            if (status === 200) {
                localStorage.setItem('user_id', data.id, 1200)
                return {response: data, success: true}
            }
        } catch (e) {
            return {
                success: false,
                errors: e?.response?.data?.errors || {}
            }
        }
    },
    async logout() {

        localStorage.removeItem('ACCESS_TOKEN')
        await router.push({name: 'login'})
    },
}

export default authService