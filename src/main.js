import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 自己项目的公用样式
import '@/assets/styles/common.less'
// 引入Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount('#app')
