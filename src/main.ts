import Vue from "vue";
import App from "./App.vue";
import {
  Select,
  Option,
  Pagination,
  Message,
  Loading,
  Dialog,
  Input,
  Form,
  FormItem,
  Button,
} from "element-ui";
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tool/filter";

import "./assets/css/reset.scss";
import "./assets/css/atom.scss";
import "./assets/css/global.scss";
import "./assets/css/ele-style.scss";
import "./assets/css/font/ofont/iconfont.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/animate.css";

Vue.config.productionTip = false;
Vue.use(Select);
Vue.use(Option);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
