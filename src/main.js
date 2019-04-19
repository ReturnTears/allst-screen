// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios
import Axios from 'axios'
// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

// axios代理
Vue.prototype.HOST = "/screen";
// axios的全局配置
Axios.defaults.baseURL = "http://127.0.0.1:10001";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
