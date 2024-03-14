//Общие данные приложения
export const commonData = {
    appName: 'Web Socket',
    baseApiEndpoint() {
        if (process.env.VUE_APP_MODE === 'production') {
            return 'http://127.0.0.1:8000/api/'
        }
        return 'https://test-websocket.uib.kz/api/'
    },
}
