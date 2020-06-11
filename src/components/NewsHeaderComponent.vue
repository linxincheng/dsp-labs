<template>
  <div class="news-header">
    <img src="../assets/img/new_bj.svg" width="100%" class="new-bg" />

    <NavComponent class="nav-component"></NavComponent>

    <h2>News</h2>

    <div class="header-white-wrap">
      <section>
        <div class="header-content" @click="previewNews(news)" v-if="news">
          <img :src="news.banner" />
          <h4 :title="news.title">
            {{ news.title }}
          </h4>
          <p>
            {{ news.main_desc }}
          </p>
        </div>
      </section>
    </div>

    <img src="../assets/img/new_bai.svg" class="new-bai" />
    <img src="../assets/img/new_cai1.svg" class="new-cai1" />
    <img src="../assets/img/new_xiu1.svg" class="new-xiu1" />
    <img src="../assets/img/new_xian.svg" class="new-xian" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";
import axios from "./../axios/http";
import api from "./../assets/config/api";

@Component({
  components: {
    NavComponent,
  },
})
export default class NewsHeaderComponenet extends Vue {
  public news: any = null;

  public mounted() {
    this.getFirstNews();
  }

  public getFirstNews(): void {
    axios.get(`${api.getList}/0/1`).then((res: any) => {
      if (res.error === 0) {
        if (res.result.total >= 1) {
          this.news = res.result.list[0];
        }
      }
    });
  }

  public previewNews(news: any): void {
    this.$router.push({
      path: "/article",
      query: {
        id: news.id,
      },
    });
  }
}
</script>

<style lang="scss" scoped>
.news-header {
  width: 100%;
  position: relative;
  height: auto;

  .new-bg {
    user-select: none;
  }

  & > h2 {
    font-size: 12.5vw;
    color: rgba(47, 147, 255, 1);
    line-height: 17vw;
    position: absolute;
    top: 30vw;
    left: 12vw;
    user-select: none;
  }

  .header-white-wrap {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -10vw;
    z-index: 9;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: 0;
    }

    & > section {
      position: relative;
      z-index: 9;

      .header-content {
        margin-left: 0;

        & > img {
          float: left;
          width: 35vw;
          height: 20vw;
          min-width: 140px;
          min-height: 81px;
          max-width: 390px;
          max-height: 225px;
          display: inline-block;
          margin-right: 15px;
          margin-bottom: 15px;
          user-select: none;
          border: 1px solid black;
          border-radius: 10px;

          @media screen and (max-width: 768px) {
            width: 43.75vw;
            height: 25vw;
            min-width: 130px;
            min-height: 75px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }

        & > h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          line-height: 40px;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }

        & > p {
          margin-top: 2vw;
          font-size: 16px;
          color: rgba(100, 100, 100, 1);
          line-height: 26px;
        }
      }
    }
  }

  .new-bai {
    position: absolute;
    top: 12.8vw;
    left: 0;
    width: 26vw;
    user-select: none;
    z-index: 9;
  }

  .new-cai1 {
    position: absolute;
    top: 15.3vw;
    right: 0;
    width: 33.5vw;
    user-select: none;
  }

  .new-xiu1 {
    position: absolute;
    top: 9.7vw;
    right: 24.4vw;
    width: 6.7vw;
    user-select: none;
  }

  .new-xian {
    position: absolute;
    z-index: -1;
    top: 9.5vw;
    width: 55vw;
    right: 0;
    opaction: 0.7;
    user-select: none;
  }

  // .new-xiu2 {
  //   position: absolute;
  //   bottom: -10vw;
  //   height: 155px;
  //   right: 28.4vw;
  //   user-select: none;
  // }
}
</style>
