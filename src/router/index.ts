import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    meta: { index: 0 },
    component: Home,
  },
  {
    path: "/ipfsex",
    name: "Ipfsex",
    meta: { index: 1 },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ipfsex.vue"),
  },
  {
    path: "/ethfx",
    name: "Ethfx",
    meta: { index: 2 },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Ethfx.vue"),
  },
  {
    path: "/news",
    name: "News",
    meta: { index: 3 },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/News.vue"),
  },
  {
    path: "/publish",
    name: "Publish",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Publish.vue"),
  },
  {
    path: "*",
    name: "Home",
    meta: { index: 0 },
    component: Home,
  },
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    //to top
    return { x: 0, y: 0 };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
