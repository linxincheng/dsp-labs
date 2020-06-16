<template>
  <div class="news">
    <NewsHeaderComponent></NewsHeaderComponent>
    <NewsList></NewsList>
    <section class="news-footer">
      <div class="home-bj2"></div>
      <img
        src="../assets/img/home_white.svg"
        class="home-zs1 wow fadeIn"
        alt=""
      />
      <img
        src="../assets/img/home_xian2.svg"
        class="home-xian2 wow fadeIn"
        alt=""
      />
    </section>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsHeaderComponent from "@/components/NewsHeaderComponent.vue";
import NewsList from "@/components/NewsList.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WOW from "wow.js";
new WOW().init();

require("./../assets/tool/filter");
require("element-ui/lib/theme-chalk/index.css");
import { Pagination, Loading } from "element-ui";
Vue.use(Pagination);
Vue.prototype.$loading = Loading.service;

@Component({
  components: {
    NewsHeaderComponent,
    NewsList,
    FooterComponent,
  },
})
export default class News extends Vue {}
</script>
<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.news {
  .news-footer {
    position: relative;
    z-index: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(#7659d2, #5171de);
    margin-top: 250px;

    & > .home-bj2 {
      height: 190px;
      z-index: -1;
      width: 100%;
      background: url("../assets/img/home_bj2.svg") bottom center no-repeat;
      background-size: 120%, 120%;
      position: absolute;
      bottom: 99%;
    }

    .home-zs1 {
      position: absolute;
      right: 0;
      max-width: 605px;
      width: 30%;
      bottom: 100%;
      transform: translateY(25%);
      z-index: -1;

      @media screen and (max-width: 768px) {
        width: 40%;
        transform: translateY(35%);
      }
    }

    .home-zs1 {
      position: absolute;
      left: 0;
      max-width: 605px;
      width: 30%;
      bottom: 100%;
      transform: translateY(25%) rotateY(180deg) rotateZ(6deg);
      z-index: -1;

      @media screen and (max-width: 768px) {
        width: 40%;
        transform: translateY(35%) rotateY(180deg) rotateZ(6deg);
      }
    }

    .home-xiu3 {
      position: absolute;
      right: 10%;
      top: 10%;
      transform: rotate(90deg);
      max-width: 170px;
      min-width: 100px;
      width: 10%;
      z-index: 9;
    }

    .home-xian2 {
      position: absolute;
      width: 500px;
      top: -480px;
      left: -20px;
      transform: rotate(180deg);
      z-index: -1;

      @media screen and (max-width: 768px) {
        width: 250px;
        top: -240px;
        left: -10px;
      }
    }
  }
}
</style>
