import Vue from "vue";
import moment from "moment";

const Filters: any = {
  timeFormat: (content: number) => {
    if (content === undefined) return "";
    return moment(content * 1000).format("MMM-DD-YYYY");
  },
};

for (const key in Filters) {
  Vue.filter(key, Filters[key]);
}

export default Filters;
