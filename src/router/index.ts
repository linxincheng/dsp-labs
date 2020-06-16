import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "Home",
    meta: { index: 0 },
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/ipfsex",
    name: "Ipfsex",
    meta: { index: 1 },
    component: () =>
      import(/* webpackChunkName: "ipfsex" */ "../views/Ipfsex.vue"),
  },
  {
    path: "/ethfx",
    name: "Ethfx",
    meta: { index: 2 },
    component: () =>
      import(/* webpackChunkName: "ethfx" */ "../views/Ethfx.vue"),
  },
  {
    path: "/news",
    name: "News",
    meta: { index: 3 },
    component: () => import(/* webpackChunkName: "news" */ "../views/News.vue"),
  },
  {
    path: "/edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/Edit.vue"),
    meta: { index: 3 },
    children: [
      {
        path: "/publish",
        name: "Publish",
        meta: { index: 4 },
        component: () =>
          import(/* webpackChunkName: "publish" */ "../views/Publish.vue"),
      },
      {
        path: "/edit",
        name: "EditNewsList",
        meta: { index: 4 },
        component: () =>
          import(
            /* webpackChunkName: "editnewlist" */ "../views/EditNewsList.vue"
          ),
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    meta: { index: 5 },
    component: () =>
      import(/* webpackChunkName: "article" */ "../views/Article.vue"),
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
