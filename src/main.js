import '@babel/polyfill'
import 'mutationobserver-shim'
import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式
import 'bootstrap/dist/js/bootstrap.min.js' //引用bootstrap的js
import Vue from 'vue'
import store from './store'

import App from './App.vue'
Vue.config.devtools = true;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:'#app',
  components: {
    App
  },
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  store
})
