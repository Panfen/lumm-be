// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueHighcharts from 'vue-highcharts'
import Axios from 'axios'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueHighcharts);
Vue.prototype.$http = Axios;   // 使用：this.$http.get();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})