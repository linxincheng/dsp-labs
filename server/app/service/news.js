const Service = require("egg").Service;
const uuidv1 = require("uuid/v1");
const NEWS_LIST = "newsList";

class NewsService extends Service {
  async get(offset = 0, limit = 0) {
    offset = offset == 0 ? undefined : parseInt(offset);
    limit = limit == 0 ? undefined : parseInt(limit);
    let _list = await global.news.getData(NEWS_LIST);
    let arr = _list.slice(offset, limit);
    for (let i = 0, len = arr.length; i < len; i++) {
      let { result: info } = await this.getInfoById(arr[i]);
      delete info["main"];
      arr[i] = info;
    }
    return {
      error: 0,
      result: {
        list: arr,
        total: _list.length,
      },
    };
  }

  async getInfoById(id) {
    let info = await global.news.getData(id, null);
    if (info === null) {
      return {
        error: 20,
        result: null,
      };
    } else {
      return {
        error: 0,
        result: info,
      };
    }
  }

  async createNews(data) {
    const id = uuidv1();
    const updateAt = new Date().getTime();
    let options = Object.assign(data, { id, publish_at: updateAt });
    const _list = await global.news.getData(NEWS_LIST);
    if (!_list.includes(id)) {
      _list.unshift(id);
    }
    let { error: error_0 } = await global.news.updateData(NEWS_LIST, _list);
    if (error_0 !== 0) {
      return {
        error: error_0,
        result: null,
      };
    }
    let { error: error_1 } = await global.news.updateData(id, options);
    if (error_1 === 0) {
      return {
        error: error_1,
        result: options,
      };
    } else {
      return {
        error: error_1,
        result: null,
      };
    }
  }

  async update(data) {
    let { error: error_1 } = await global.news.updateData(data.id, data);
    return {
      error: error_1,
      result: null,
    };
  }

  async deleteById(id) {
    let _list = await global.news.getData(NEWS_LIST);
    let _index = _list.indexOf(id);
    if (_index != -1) {
      _list.splice(_index, 1);
    }
    let { error: error_0 } = await global.news.updateData(NEWS_LIST, _list);
    if (error_0 !== 0) {
      return {
        error: error_0,
        result: null,
      };
    }
    let { error: error_1 } = await global.news.del(id);
    return {
      error: error_1 || 0,
      result: null,
    };
  }
}

module.exports = NewsService;
