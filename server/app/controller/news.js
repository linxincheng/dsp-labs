const Controller = require("egg").Controller;
const { API_ERR } = require("./../common/error");

class NewsController extends Controller {
  async create() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const errors = this.app.validator.validate(
      {
        title: "string",
        auther: "string",
        main: "string",
        main_desc: "string",
        banner: "string",
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

    const ret = await ctx.service.news.createNews(ctx.request.body);

    ctx.body = {
      status: "success",
      data: ret,
    };
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

    const ret = await ctx.service.news.delete(ctx.request.body);

    ctx.body = {
      status: "success",
      data: ret,
    };
  }

  async get() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        offset: {
          type: "string",
          required: true,
          allowEmpty: false,
          format: /^[0-9]+$/,
        },
        limit: {
          type: "string",
          required: true,
          allowEmpty: false,
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
    }
    const ret = await ctx.service.news.get();
    ctx.body = {
      status: "success",
      data: ret,
    };
  }
}

module.exports = NewsController;
