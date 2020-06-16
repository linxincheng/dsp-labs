import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import "./assets/css/reset.scss";
import "./assets/css/atom.scss";
import "./assets/css/global.scss";
import "./assets/css/ele-style.scss";
import "./assets/css/font/ofont/iconfont.css";

import "./assets/css/animate.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

import "video.js/dist/video-js.css";
