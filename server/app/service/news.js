const Service = require("egg").Service;
const uuidv1 = require("uuid/v1");

class NewsService extends Service {
  async get() {
    const { ctx } = this;
    const ret = await ctx.model.News.findAll();
    return ret;
  }

  async createNews(data) {
    const { ctx } = this;
    const id = uuidv1();
    const options = {
      where: {
        id: id,
      },
      defaults: {
        id: id,
        title: data.title,
        auther: data.auther,
        main: data.main,
        main_desc: data.main_desc,
        banner: data.banner,
      },
    };
    const news = await ctx.model.News.findOrCreate(options);
    ctx.body = news;
  }

  async delete(data) {
    const { ctx } = this;
    const news = await ctx.model.News.destroy({
      where: {
        id: data.id,
      },
    });
    ctx.body = news;
  }
}

module.exports = NewsService;
