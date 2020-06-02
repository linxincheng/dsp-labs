const {
  Controller
} = require('egg');
class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    // render index.html
    await ctx.render('index');
  }
}
module.exports = HomeController
