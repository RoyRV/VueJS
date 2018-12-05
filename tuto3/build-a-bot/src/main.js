import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';

Vue.config.productionTip = false;

import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
