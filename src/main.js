// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
//import VueResource from 'vue-resource'
import axios from 'axios';
import 'iview/dist/styles/iview.css';    // 使用 CSS
import store from './vuex/store';
import VueLazyload from 'vue-lazyload' //图片懒加载

Vue.prototype.$ajax = axios

Vue.use(iView);
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

//Vue.use(VueResource);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
