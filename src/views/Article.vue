<template>
  <div class="article">
    <NavComponent class="article-nav"></NavComponent>
    <div class="article-wrap">
      <div v-if="article">
        <h2 class="article-title">
          {{ article.title }}
        </h2>
        <img
          :src="article && article.banner"
          class="article-banner"
          width="100%"
          v-if="article"
          alt=""
        />
        <!-- <div class="article-content" v-html="article.main"></div> -->
        <div class="w-e-text" v-html="article.main"></div>
        <p class="article-time">
          {{ (article.publish_at / 1000) | timeFormat }}
        </p>
        <p class="article-auther">Auther: {{ article.auther }}</p>
      </div>
      <div v-else>
        loading...
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import "./../assets/tool/filter";
import axios from "./../axios/http";
import api from "./../assets/config/api";

@Component({
  components: { NavComponent, FooterComponent },
})
export default class Article extends Vue {
  public id: any = "";
  public article: any = null;

  public getInfo(): void {
    axios.get(`${api.getInfoById}/${this.id}`).then((res: any) => {
      if (res.error === 0) {
        this.article = res.result;
      }
    });
  }

  public mounted(): void {
    this.id = this.$router.currentRoute.query.id;
    this.getInfo();
  }
}
</script>

<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.article {
  padding-top: 100px;

  .article-nav {
    background: linear-gradient(
      270deg,
      rgba(71, 128, 255, 0.8) 0%,
      rgba(155, 97, 247, 0.8) 100%
    );
  }

  .article-wrap {
    width: 90%;
    max-width: 700px;
    margin: 50px auto 200px;
    min-height: calc(100vh - 400px);
    font-family: medium-content-serif-font, Georgia, Cambria, "Times New Roman",
      Times, serif;

    .article-title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .article-banner {
    }

    .article-content {
      line-height: 2;
      margin-top: 30px;
    }

    .article-time {
      font-size: 16px;
      text-align: right;
      margin-top: 120px;
    }
    .article-auther {
      font-size: 16px;
      text-align: right;
      margin-top: 30px;
    }
  }
}
</style>
