import Vue from 'vue'
import viewportUnitsBug, { hacks } from 'viewport-units-buggyfill'
import './common/common.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import globalAPI from './globalAPI'
import filters from './filters'

globalAPI(Vue)

// 修复 部分手机不支持vw vh单位 bug
viewportUnitsBug.init({ hacks })

// 注册filter
Object.keys(filters).forEach(filter => {
  Vue.filter(filter, filters[filter])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
