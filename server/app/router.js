module.exports = (app) => {
  const { router, controller } = app;
  router.post("/v1/news/create", controller.news.create);
  router.post("/v1/news/delete", controller.news.delete);
  router.get("/v1/news/getList/:offset/:limit", controller.news.get);
  router.get("/*", controller.home.index);
};
