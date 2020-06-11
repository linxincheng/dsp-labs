module.exports = (app) => {
  const { router, controller } = app;
  router.post("/v1/news/create", controller.news.create);
  router.post("/v1/news/update", controller.news.update);
  router.post("/v1/news/delete", controller.news.delete);
  router.post("/v1/login", controller.user.login);
  router.post("/v1/logout", controller.user.logout);
  router.get("/v1/news/getList/:offset/:limit", controller.news.get);
  router.get("/v1/news/getInfo/:id", controller.news.getInfo);
  // router.get("/*", controller.home.index);
};
