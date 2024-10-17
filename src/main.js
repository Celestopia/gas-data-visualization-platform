import './assets/main.css' // Import css file to specify the format of the web page.
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App) // 创建Vue应用实例（根组件）
app.use(router) // 使用路由以处理url跳转
app.mount('#app') // 将根组件挂载到（index.html文件中）id为app的元素上
