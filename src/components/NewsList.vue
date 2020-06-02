<template>
  <div class="news-list">
    <div class="news-list-content flex between wrap-wrap">
      <section
        class="news-list-item flex"
        v-for="(item, index) of list"
        :key="index"
      >
        <img src="../assets/img/new_tuda.png" width="180" height="180" alt="" />
        <div class="news-list-item-content">
          <img src="../assets/img/new_tuda.png" alt="" />
          <h4>
            {{ item.title }}
          </h4>
          <p>
            {{ item.content }}
          </p>
        </div>
      </section>
    </div>
    <div class="paginate-wrap">
      <el-pagination
        background
        class="paginate"
        layout="prev, pager, next"
        :total="100"
        :page-size="pageSize"
        :pager-count="5"
        :current-page.sync="currentPage"
        @current-change="pageChange"
        :hide-on-single-page="true"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from "vue-property-decorator";

@Component
export default class NewsList extends Vue {
  public list: any = [
    {
      title: "Proof of challenge",
      content: `The data download node initiates the holding challenge of the data to be downloaded as required. The data challenge exists in the form of contract transactions; the storage node drives the submi`,
    },
    {
      title: "Proof of challenge",
      content: `The data download node initiates the holding challenge of the data to be downloaded as required. The data challenge exists in the form of contract transactions; the storage node drives the submi`,
    },
    {
      title: "Proof of challenge",
      content: `The data download node initiates the holding challenge of the data to be downloaded as required. The data challenge exists in the form of contract transactions; the storage node drives the submi`,
    },
    {
      title: "Proof of challenge",
      content: `The data download node initiates the holding challenge of the data to be downloaded as required. The data challenge exists in the form of contract transactions; the storage node drives the submi`,
    },
  ];

  public currentPage: number = 1;
  public pageSize: number = 4;

  public pageChange(pageNumber: number): void {
    console.log(pageNumber);
  }
}
</script>
<style lang="scss" scoped>
.news-list {
  min-height: 40vw;
  width: 90%;
  margin: 11vw auto 2vw;

  @media screen and (min-width: 1024px) {
    width: 90%;
  }

  .news-list-content {
    width: 100%;
    .news-list-item {
      width: 100%;
      margin-top: 7vw;

      @media screen and (min-width: 1024px) {
        width: 49%;
      }

      & > img {
        flex-shrink: 0;
        user-select: none;

        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      & > .news-list-item-content {
        margin-left: 1vw;

        @media screen and (max-width: 768px) {
          margin-top: 50px;
        }

        h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          line-height: 27px;
          user-select: none;
        }

        p {
          font-size: 16px;
          color: rgba(100, 100, 100, 1);
          line-height: 26px;
          margin-top: 20px;
        }
        & > img {
          display: none;
          user-select: none;
          flex-shrink: 0;
          width: 180;
          height: 180;

          @media screen and (max-width: 768px) {
            display: inline-block;
            float: left;
            margin-right: 10px;
            margin-bottom: 10px;
            width: 25vw;
            height: 25vw;
            min-width: 100px;
            min-height: 100px;
          }
        }
      }
    }
  }

  .paginate-wrap {
    margin-top: 8vw;
    overflow: hidden;
    width: 100%;
    position: relative;
    z-index: 999999;

    & > .paginate {
      float: right;
    }
  }
}
</style>
