const Controller = require("egg").Controller;
const { API_ERR } = require("./../common/error");

class NewsController extends Controller {
  async create() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        title: "string",
        auther: "string",
        main: "string",
        main_desc: "string",
        banner: "string",
        titleZh: "string",
        autherZh: "string",
        mainZh: "string",
        main_descZh: "string",
        bannerZh: "string",
      },
      ctx.request.body
    );
    if (errors != undefined || (errors && errors.length)) {
      for (let e of errors) {
        let err = new Error(`${API_ERR.INVALID_PARAM.MSG} '${e.field}'`);
        err.code = API_ERR.INVALID_PARAM.CODE;
        throw err;
      }
    }

    const isLogin = await ctx.service.user.checkIsLogin();
    if (!isLogin) {
      ctx.body = {
        error: 102,
        result: null,
      };
      return;
    } else {
      const ret = await ctx.service.news.createNews(ctx.request.body);

      ctx.body = ret;
    }
  }

  async update() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        title: "string",
        auther: "string",
        main: "string",
        main_desc: "string",
        banner: "string",
        titleZh: "string",
        autherZh: "string",
        mainZh: "string",
        main_descZh: "string",
        bannerZh: "string",
        id: "string",
        publish_at: "number",
      },
      ctx.request.body
    );
    if (errors != undefined || (errors && errors.length)) {
      for (let e of errors) {
        let err = new Error(`${API_ERR.INVALID_PARAM.MSG} '${e.field}'`);
        err.code = API_ERR.INVALID_PARAM.CODE;
        throw err;
      }
    }

    const isLogin = await ctx.service.user.checkIsLogin();
    if (!isLogin) {
      ctx.body = {
        error: 102,
        result: null,
      };
      return;
    } else {
      const ret = await ctx.service.news.update(ctx.request.body);

      ctx.body = ret;
    }
  }

  async delete() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        id: "string",
      },
      ctx.request.body
    );

    if (errors != undefined || (errors && errors.length)) {
      for (let e of errors) {
        let err = new Error(`${API_ERR.INVALID_PARAM.MSG} '${e.field}'`);
        err.code = API_ERR.INVALID_PARAM.CODE;
        throw err;
      }
    }

    const isLogin = await ctx.service.user.checkIsLogin();
    if (!isLogin) {
      ctx.body = {
        error: 102,
        result: null,
      };
      return;
    } else {
      const ret = await ctx.service.news.deleteById(ctx.request.body.id);

      ctx.body = ret;
    }
  }

  async get() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        type: "string",
        offset: {
          type: "string",
          required: false,
          format: /^[0-9]+$/,
        },
        limit: {
          type: "string",
          required: false,
          format: /^[0-9]+$/,
        },
      },
      ctx.params
    );
    if (errors != undefined || (errors && errors.length)) {
      for (let e of errors) {
        let err = new Error(`${API_ERR.INVALID_PARAM.MSG} '${e.field}'`);
        err.code = API_ERR.INVALID_PARAM.CODE;
        throw err;
      }
    } else {
      const ret = await ctx.service.news.get(
        ctx.params.type,
        ctx.params.offset,
        ctx.params.limit
      );
      ctx.body = ret;
    }
  }

  async getInfo() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        type: "string",
        id: "string",
      },
      ctx.params
    );
    if (errors != undefined || (errors && errors.length)) {
      for (let e of errors) {
        let err = new Error(`${API_ERR.INVALID_PARAM.MSG} '${e.field}'`);
        err.code = API_ERR.INVALID_PARAM.CODE;
        throw err;
      }
    }

    const ret = await ctx.service.news.getInfoById(
      ctx.params.type,
      ctx.params.id
    );
    ctx.body = ret;
  }
}

module.exports = NewsController;
