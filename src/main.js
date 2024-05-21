import { createApp } from 'vue'
import App from './App.vue'
// import Store from './store/modelue/store.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import index from './store/index.js'
// import './mock/mock.js'
import axios from "axios";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for(const [key,component] of Object.entries(ElementPlusIconsVue)){
    app.component(key,component)
}
app.use(index)
app.use(ElementPlus)
app.use(router)
app.config.globalProperties.$axios = axios
app.mount('#app')
