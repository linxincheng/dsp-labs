<template>
  <div class="news-header">
    <NavComponent class="nav-component"></NavComponent>

    <!-- <h2 class="wow fadeIn">News</h2> -->
    <TitleComponent
      msg="News"
      theme="white"
      class="news-header-title"
    ></TitleComponent>
    <div class="header-white-wrap wow fadeIn">
      <section>
        <div class="header-content" @click="previewNews(news)" v-if="news">
          <img :src="news.banner" />
          <h4 class="theme-color-text-fill" :title="news.title">
            {{ news.title }}
          </h4>
          <p class="news-desc">{{ news.main_desc.slice(0, -1) }}...</p>
          <p class="news-bottom">
            {{ news.auther }} <br />
            {{ (news.publish_at / 1000) | timeFormat }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import axios from "./../axios/http";
import api from "./../assets/config/api";
import WOW from "wow.js";
new WOW().init();
import "./../assets/tool/filter";

@Component({
  components: {
    NavComponent,
    TitleComponent,
  },
})
export default class NewsHeaderComponenet extends Vue {
  public news: any = null;

  public mounted() {
    this.getFirstNews();
  }

  get lang(): any {
    return this.$t("type");
  }

  @Watch("lang")
  public langChange(): void {
    this.getFirstNews();
  }

  public getFirstNews(): void {
    axios.get(`${api.getList}/${this.lang}/0/1`).then((res: any) => {
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
  background: url("./../assets/img/news-bj.svg") no-repeat center top;
  min-height: 400px;
  padding-top: 150px;

  @media screen and (max-width: 768px) {
    background: url("./../assets/img/news-bj.svg") no-repeat center -130px;
  }

  .news-header-title {
    width: 90%;
    margin: 0 auto;
    max-width: 1200px;
  }

  .header-white-wrap {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    z-index: 9;
    margin-top: -100px;

    @media screen and (max-width: 1200px) {
      margin-top: 80px;
    }

    & > section {
      position: relative;
      z-index: 9;

      .header-content {
        margin-left: 0;
        cursor: pointer;

        & > img {
          width: 600px;
          height: 323px;
          user-select: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;

          @media screen and (max-width: 768px) {
            display: inline-block;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
            width: 43.75vw;
            height: 25vw;
            min-width: 130px;
            min-height: 75px;
          }
        }

        & > h4 {
          font-size: 22px;
          line-height: 40px;
          user-select: none;
          margin-bottom: 8px;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }

        & > p {
          &.news-desc {
            font-size: 16px;
            color: rgba(100, 100, 100, 1);
            line-height: 26px;
            margin-top: 3px;

            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
          }

          &.news-bottom {
            font-size: 14px;
            color: rgba(100, 100, 100, 1);
            line-height: 26px;
            margin-top: 16px;
            opacity: 0.8;

            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }
        }
      }
    }
  }

  // .new-bai {
  //   position: absolute;
  //   top: 12.8vw;
  //   left: 0;
  //   width: 26vw;
  //   user-select: none;
  //   z-index: 9;
  // }

  // .new-cai1 {
  //   position: absolute;
  //   top: 15.3vw;
  //   right: 0;
  //   width: 33.5vw;
  //   user-select: none;
  // }

  // .new-xiu1 {
  //   position: absolute;
  //   top: 9.7vw;
  //   right: 24.4vw;
  //   width: 6.7vw;
  //   user-select: none;
  // }

  // .new-xian {
  //   position: absolute;
  //   z-index: -1;
  //   top: 9.5vw;
  //   width: 55vw;
  //   right: 0;
  //   opaction: 0.7;
  //   user-select: none;
  // }

  // .new-xiu2 {
  //   position: absolute;
  //   bottom: -10vw;
  //   height: 155px;
  //   right: 28.4vw;
  //   user-select: none;
  // }
}
</style>
