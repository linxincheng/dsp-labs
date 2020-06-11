const { Controller } = require("egg");
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index");
  }
}
module.exports = HomeController;
