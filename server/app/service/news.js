const Service = require("egg").Service;
const uuidv1 = require("uuid/v1");

class NewsService extends Service {
  async get() {
    const { ctx } = this;
    const ret = await ctx.model.News.findAll();
    return ret;
  }

  async getContentByAddr(addr) {
    return {
      title: "test title",
      auther: "linxincheng",
      main: "test main",
      main_desc: "test main",
      address: addr,
      publish_at: new Date("2020-06-01 12:44:20"),
    };
  }

  async createNews(data) {
    const { ctx } = this;
    // const isExit = await ctx.model.News.findOne({
    //   where: {
    //     title: data.title,
    //   },
    // });
    // if (isExit) {
    //   err.code = "news is exit aync";
    //   throw err;
    // }
    console.log(
      Object.assign(data, {
        id: uuidv1(),
      })
    );
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
}

module.exports = NewsService;
