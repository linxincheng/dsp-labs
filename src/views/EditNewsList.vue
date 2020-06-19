<template>
  <div class="edit-news-list">
    <el-button type="primary" class="edit-news-publish" @click.stop="goPublish"
      >publish</el-button
    >
    <ul class="flex wrap-wrap">
      <li class="edit-news-list-item flex" v-for="item of list" :key="item.id">
        <div class="edit-news-list-item-img">
          <img :src="item.banner" alt="" />
        </div>
        <div class="edit-news-list-item-desc">
          <h4>
            <div class="edit-news-list-item-title" :title="item.title">
              {{ item.title }}
            </div>
            <div class="edit-news-list-icon">
              <i
                class="iconfont iconpreview"
                title="preview the news"
                @click.stop="previewNews(item)"
              ></i>
              <i
                class="iconfont icondelete"
                title="delete the news"
                @click.stop="confirmDeleteNews(item)"
              ></i>
              <i
                class="iconfont iconbianji"
                title="edit the news"
                @click.stop="editNews(item)"
              ></i>
            </div>
          </h4>
          <p class="edit-news-list-item-content">
            {{ item.main_desc.slice(0, -1) }}...
          </p>
          <p class="flex between edit-news-list-item-other">
            <span>{{ item.auther }}</span>
            <span>{{ (item.publish_at / 1000) | timeFormat }}</span>
          </p>
        </div>
      </li>
    </ul>
    <div class="paginate-wrap">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "./../axios/http";
import api from "./../assets/config/api";
import { MessageBox } from "element-ui";
import "./../assets/tool/filter";

@Component
export default class EditNewsList extends Vue {
  public list: Array<any> = [];
  public PAGE_SIZE: number = 6;
  public currentPage: number = 1;
  public total: number = 1;

  public mounted(): void {
    this.pageChange(1);
  }

  public goPublish(item: any): void {
    this.$router.push({
      path: "/publish",
    });
  }

  public editNews(item: any): void {
    this.$router.push({
      path: "/publish",
      query: {
        id: item.id,
      },
    });
  }

  public previewNews(item: any): void {
    this.$router.push({
      path: "/article",
      query: {
        id: item.id,
      },
    });
  }

  public pageChange(pageNumber: number): void {
    axios
      .get(
        `${api.getList}/0/${(pageNumber - 1) * this.PAGE_SIZE}/${pageNumber *
          this.PAGE_SIZE}`
      )
      .then((res: any) => {
        console.log(res);
        if (res.error === 0) {
          this.list = res.result.list;
          this.total = res.result.total;
        }
      });
    console.log(pageNumber);
  }

  public deleteNews(id: string): void {
    axios.post(api.delete, { id }).then((res: any) => {
      if (res.error === 0) {
        this.$message.success("delete news success!!!");
        this.pageChange(this.currentPage);
      } else {
        this.$message.error("delete news failed!!!");
      }
    });
  }

  public confirmDeleteNews(item: any): void {
    MessageBox.confirm("Are you sure you want to delete it?", "notice", {
      confirmButtonText: "confirm",
      cancelButtonText: "cancel",
      type: "warning",
    })
      .then(() => {
        this.deleteNews(item.id);
      })
      .catch(() => {});
  }
}
</script>
<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.edit-news-list {
  padding-top: 50px;
  width: 100%;
  max-width: 1200px;
  margin: 0px auto;

  ul {
    margin: 50px 0;

    .edit-news-list-item {
      width: 50%;
      height: 220px;

      width: 100%;
      padding: 20px;

      .edit-news-list-item-img {
        position: relative;
        width: 312px;
        height: 180px;

        & > img {
          width: 312px;
          height: 180px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          user-select: none;
        }
      }

      .edit-news-list-item-desc {
        margin-left: 20px;
        margin-right: 20px;
        width: calc(100% - 352px);

        & > h4 {
          font-size: 22px;
          height: 40px;
          line-height: 40px;
          user-select: none;

          & > div {
            &.edit-news-list-item-title {
              float: left;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              display: block;
              width: calc(100% - 120px);
              color: #2f93ff;
            }

            &.edit-news-list-icon {
              float: right;
              i {
                font-size: 26px;
                cursor: pointer;
                margin-left: 10px;

                &:hover {
                  opacity: 0.8;
                }

                &:active {
                  opacity: 1;
                }
              }
            }
          }
        }
        p {
          font-size: 16px;
          line-height: 22px;
          margin-top: 10px;

          &.edit-news-list-item-content {
            height: 95px;
          }
        }
      }
    }
  }

  .paginate-wrap {
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
