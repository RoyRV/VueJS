import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import store from './store';
import pinDirective from './shared/directives/pin-directive';
import currencyFilter from './shared/filters/currency-filter';

Vue.config.productionTip = false;
Vue.directive('pin',pinDirective);
Vue.filter('currency',currencyFilter);
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
