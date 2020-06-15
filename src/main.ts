import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "./assets/tool/filter";
import {
  Pagination,
  Message,
  Loading,
  Input,
  Form,
  FormItem,
  Button,
} from "element-ui";

import "./assets/css/reset.scss";
import "./assets/css/atom.scss";
import "./assets/css/global.scss";
import "./assets/css/ele-style.scss";
import "./assets/css/font/ofont/iconfont.css";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/animate.css";
import "video.js/dist/video-js.css";

Vue.config.productionTip = false;

Vue.use(Pagination);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);

Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
