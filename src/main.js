import Vue from 'vue'
import App from './App.vue'
import router from './router';
// import vant from 'vant'
// import 'vant/lib/index.css'
import '@/assets/css/index.less'
// import 'vant/lib/index.less'
import API from '@/assets/api.js';
import { Button,Icon } from 'vant';
Vue.use(Button).use(Icon);


// Vue.use(Button);
Vue.config.productionTip = false
Vue.prototype.$Api = API;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
