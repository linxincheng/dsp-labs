const API_ERR = {
  INVALID_PARAM: {
    CODE: 13001,
    MSG: `invalid parameter`,
  },
  APPLY_EXIST: {
    CODE: 13002,
    MSG: `news already exists`,
  },
  INTERNAL_ERR: {
    CODE: 13003,
    MSG: `server internal error`,
  },
};

module.exports = {
  API_ERR,
};
