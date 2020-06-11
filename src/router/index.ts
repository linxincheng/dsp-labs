import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
    path: "/edit",
    // name: "Edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
    children: [
      {
        path: "/publish",
        name: "Publish",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Publish.vue"),
      },
      {
        path: "/edit",
        name: "EditNewsList",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/EditNewsList.vue"),
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    meta: { index: 5 },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Article.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: { index: 0 },
    component: Home,
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
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
