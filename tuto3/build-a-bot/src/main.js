import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import pinDirective from './shared/directives/pin-directive'

Vue.config.productionTip = false;
Vue.directive('pin',pinDirective);
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
