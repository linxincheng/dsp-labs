import Vue from "vue";
import App from "./App.vue";
import * as ElementUI from "element-ui";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "./axios/http";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
