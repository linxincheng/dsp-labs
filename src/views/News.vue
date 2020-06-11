<template>
  <div class="news">
    <NewsHeaderComponent></NewsHeaderComponent>
    <NewsList></NewsList>
    <div class="news-under-ui">
      <img src="../assets/img/new_dicai.svg" class="new-dicai" />
      <img src="../assets/img/new_bai.svg" class="new-cai2" />
      <img src="../assets/img/new_cai3.svg" class="new-cai3" />
      <img src="../assets/img/home_xiu.svg" class="new-xiu" />
      <img src="../assets/img/home_dian.svg" class="new-dian" />
      <div></div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NewsHeaderComponent from "@/components/NewsHeaderComponent.vue";
import NewsList from "@/components/NewsList.vue";
import FooterComponent from "@/components/FooterComponent.vue";

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
  .news-under-ui {
    position: relative;
    font-size: 0;
    margin-top: -12vw;

    .new-dicai {
      width: 100%;
      position: relative;
      z-index: -1;
      margin: 0px;
      user-select: none;
    }

    .new-cai2 {
      position: absolute;
      transform: rotateX(180deg);
      top: -9vw;
      width: 22vw;
      left: 0;
      user-select: none;
    }

    .new-cai3 {
      position: absolute;
      top: 37.4vw;
      transform: rotateZ(0deg);
      width: 27vw;
      right: 0;
      z-index: 0;
      user-select: none;
    }

    & > div {
      height: 7vw;
      width: 100%;
      background: linear-gradient(180deg, #5865e2 0%, #5171de 100%);
    }

    .new-xiu {
      position: absolute;
      top: 12.8vw;
      left: 37.6vw;
      transform: rotateY(180deg);
      width: 15vw;
      user-select: none;
    }

    .new-dian {
      position: absolute;
      top: 31vw;
      left: 43vw;
      width: 35vw;
      user-select: none;
    }
  }
}
</style>
