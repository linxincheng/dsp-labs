<template>
  <div class="news-list">
    <div class="news-list-content flex wrap-wrap">
      <section
        class="news-list-item wow fadeIn"
        v-for="(item, index) of list"
        :key="index"
        @click="previewNews(item)"
      >
        <img :src="item.banner" alt="" />
        <div class="news-list-item-content">
          <img :src="item.banner" alt="" />
          <h4 class="theme-color-text-fill">
            {{ item.title }}
          </h4>
          <p>{{ item.main_desc.slice(0, -1) }}...</p>
          <p class="news-bottom">
            {{ item.auther }}<br />
            {{ (item.publish_at / 1000) | timeFormat }}
          </p>
        </div>
      </section>
    </div>
    <div class="paginate-wrap wow fadeIn">
      <el-pagination
        background
        class="paginate"
        layout="prev, pager, next"
        :total="total"
        :page-size="PAGE_SIZE"
        :pager-count="5"
        :current-page.sync="currentPage"
        @current-change="pageChange"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </div>
    {{ $t("type") }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "./../axios/http";
import api from "./../assets/config/api";
import WOW from "wow.js";
new WOW().init();

@Component
export default class NewsList extends Vue {
  public list: any = [];

  public PAGE_SIZE: number = 6;
  public currentPage: number = 1;
  public total: number = 1;
  public loadingObj: any = null;

  public mounted(): void {
    this.pageChange(1);
  }

  get lang(): any {
    return this.$t("type");
  }

  @Watch("lang")
  public langChange(): void {
    this.pageChange(this.currentPage);
  }

  public pageChange(pageNumber: number): void {
    this.loadingObj = this.$loading({
      target: ".news-list-content",
      text: "Loading...",
      lock: true,
    });
    axios
      .get(
        `${api.getList}/${this.lang}/${(pageNumber - 1) * this.PAGE_SIZE +
          1}/${pageNumber * this.PAGE_SIZE + 1}`
      )
      .then((res: any) => {
        if (res.error === 0) {
          this.list = res.result.list;
          this.total = res.result.total - 1;
        }
      })
      .finally(() => {
        this.loadingObj && this.loadingObj.close();
      });
  }

  previewNews(item: any): void {
    this.$router.push({
      path: "/article",
      query: {
        id: item.id,
      },
    });
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  min-height: 40vw;
  width: 100%;
  margin: 0 auto 2vw;
  z-index: 2;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  .news-list-content {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    .news-list-item {
      width: 100%;
      margin-top: 80px;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        width: 50%;
      }

      @media screen and (min-width: 1200px) {
        width: 33%;
      }

      & > img {
        flex-shrink: 0;
        user-select: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        width: 315px;
        height: 180px;
        margin: 0 auto;
        display: block;

        @media screen and (max-width: 768px) {
          display: none;
          margin: 20px 0 0;
        }
      }
      & > .news-list-item-content {
        margin-left: 1vw;
        width: 315px;
        margin: 20px auto 0;
        position: relative;

        @media screen and (max-width: 768px) {
          // margin: 20px 0 0;
          width: 100%;
        }

        h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          line-height: 27px;
          user-select: none;
          margin-bottom: 8px;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }

          // @media screen and (max-width: 768px) {
          //   white-space: inherit;
          //   overflow: inherit;
          //   text-overflow: inherit;
          // }
        }

        p {
          font-size: 16px;
          color: rgba(100, 100, 100, 1);
          line-height: 26px;

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }

          &.news-bottom {
            font-size: 14px;
            margin-top: 16px;
            opacity: 0.8;

            @media screen and (max-width: 768px) {
              font-size: 12px;
            }
          }
        }
        & > img {
          display: none;
          user-select: none;
          flex-shrink: 0;
          width: 315px;
          height: 180px;
          // border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-sizing: border-box;

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
      }
    }
  }

  .paginate-wrap {
    overflow: hidden;
    width: 90%;
    position: relative;
    z-index: 999999;
    max-width: 1110px;
    margin: 80px auto 0;
    // transform: translateX(-44px);

    @media screen and (max-width: 1336px) {
    }

    & > .paginate {
      float: right;
    }
  }
}
</style>
