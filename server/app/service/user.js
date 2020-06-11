const Service = require("egg").Service;
const { USERS } = require("./../common/user");

class UserService extends Service {
  checkIsLogin() {
    const { ctx } = this;
    if (
      ctx.session &&
      USERS[ctx.session.userId] &&
      USERS[ctx.session.userId].sessionId === ctx.session.sessionId
    ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = UserService;
