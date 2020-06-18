import Vue from "vue";

const Filters: any = {
  timeFormat: (content: number) => {
    if (content === undefined) return "";
    const moment = require("moment");
    return moment(content * 1000).format("YYYY-MM-DD");
  },
};

for (const key in Filters) {
  Vue.filter(key, Filters[key]);
}

export default Filters;
