import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "./assets/css/reset.scss";
import "./assets/css/atom.scss";
import "./assets/css/global.scss";
import "./assets/css/ele-style.scss";
import "./assets/css/font/ofont/iconfont.css";
import "./assets/css/animate.css";

import {
  Pagination,
  Message,
  Loading,
  Input,
  Form,
  FormItem,
  Button,
  Select,
  Option,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en",
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en"),
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
