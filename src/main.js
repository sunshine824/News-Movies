// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
//import VueResource from 'vue-resource'
import axios from 'axios';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.prototype.$ajax = axios

Vue.use(iView);
//Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
