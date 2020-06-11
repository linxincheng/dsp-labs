const path = require("path");
module.exports = (appInfo) => {
  const config = {};
  // cookies key
  config.keys = appInfo.name + "1507837232";

  // website security
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE",
  };

  // sql orm
  // config.sequelize = {
  //   dialect: "mysql",
  //   host: "127.0.0.1",
  //   port: 3306,
  //   database: "dsp-website",
  //   username: "root",
  //   password: "root",
  // };

  config.bodyParser = {
    jsonLimit: "100mb",
    formLimit: "100mb",
  };

  config.onerror = {
    accepts() {
      return "json";
    },
    json(err, ctx) {
      if (parseInt(err.code) < 13000 || parseInt(err.code) > 14000) {
        return;
      }
      // service error code between [13000, 14000]
      console.log("json err", err.message, err.code);
      // json hander
      ctx.body = {
        error: err.code,
        desc: err.message,
      };
      ctx.status = 200;
    },
  };
  // config.static = {
  //   prefix: "/",
  //   dir: path.join(appInfo.baseDir, "app/view/"),
  // };
  // config.view = {
  //   defaultExt: ".html",
  //   mapping: {
  //     ".ejs": "ejs",
  //     ".html": "ejs",
  //   },
  // };

  return config;
};
