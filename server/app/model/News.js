"use strict";

module.exports = (app) => {
  const { STRING, DATE, TEXT } = app.Sequelize;
  const News = app.model.define("news", {
    id: {
      type: app.Sequelize.UUID,
      primaryKey: true,
    },
    title: STRING(255),
    auther: STRING(255),
    main_desc: STRING(255),
    main: TEXT("medium"),
    banner: TEXT("medium"),
    created_at: DATE,
    updated_at: DATE,
  });
  return News;
};
