import Vue from "vue";
import App from "./App.vue";

import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";

import router from "./router";

Vue.config.productionTip = false;
Vue.use(Vuesax);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
