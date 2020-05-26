import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import uView from "uview-ui";
Vue.use(uView);
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
