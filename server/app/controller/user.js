const Controller = require("egg").Controller;
const { USERS } = require("./../common/user");
const { API_ERR } = require("./../common/error");

class UsersController extends Controller {
  async login() {
    const { ctx } = this;
    const errors = this.app.validator.validate(
      {
        userId: "string",
        password: "string",
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

    let userId = ctx.request.body.userId;
    let password = ctx.request.body.password;
    if (USERS[userId] && USERS[userId].password === password) {
      ctx.session.userId = USERS[userId].userId;
      ctx.session.sessionId = USERS[userId].sessionId;

      ctx.body = {
        error: 0,
        result: null,
      };
    } else {
      ctx.body = {
        error: 100,
        result: null,
      };
    }
  }

  async logout() {
    ctx.session = null;
    ctx.body = {
      error: 0,
      result: null,
    };
  }
}

module.exports = UsersController;
