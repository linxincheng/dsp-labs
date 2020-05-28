import Vue from "vue";
import App from "./App.vue";
import { Select, Option, Pagination, Message, Loading } from "element-ui";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "./axios/http";
import "./assets/tool/filter";
import API from "./assets/config/api";

import "./assets/css/reset.scss";
import "./assets/css/atom.scss";
import "./assets/css/global.scss";
import "./assets/css/ele-style.scss";
import "./assets/css/font/ofont/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Loading);

Vue.prototype.$axios = axios;
Vue.prototype.$api = API;
Vue.prototype.$message = Message;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
