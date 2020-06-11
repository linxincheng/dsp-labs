module.exports = () => {
  const news = require("./app/db/news.js");
  news.initDB();
  global.news = news;
};
