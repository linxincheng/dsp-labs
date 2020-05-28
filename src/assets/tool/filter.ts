import Vue from "vue";

const Filters: any = {
  //   test: (content: number) => {
  //     let much = (content * 1024) / 1000000000;
  //     return much;
  //   },
};

for (const key in Filters) {
  Vue.filter(key, Filters[key]);
}

export default Filters;
