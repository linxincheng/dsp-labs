<template>
  <div class="ex-header-component">
    <img src="../assets/img/home_bg1.svg" class="ex-bg1" width="100%" alt="" />

    <NavComponent></NavComponent>

    <div class="ex-white-wrap">
      <img src="../assets/img/ipfsex_bai.svg" class="ipfsex-bai" alt="" />
      <div class="home-white-icon">
        <slot name="icon"></slot>
        <img src="../assets/img/x.svg" class="x" alt="" />
        <img src="../assets/img/home_logo.png" class="home-logo" alt="" />
      </div>
    </div>

    <div class="header-title white bold">
      <!-- slot a -->
      <!-- <img src="../assets/img/ipfsex_logo.svg" alt="" /> -->
      <slot name="title"></slot>
    </div>

    <ul class="ex-feature flex between wrap-wrap">
      <li
        class="ex-feature-item flex white ai-center"
        v-for="(item, index) of list"
        :key="index"
      >
        <i :class="item.src" class="iconfont"></i>
        <p>
          {{ item.sup }}<br />
          {{ item.sub }}
        </p>
      </li>
    </ul>

    <img src="../assets/img/new_xiu1.svg" class="ex-xiu1" alt="" />

    <img src="../assets/img/home_dian.svg" class="ex-dian" alt="" />

    <img src="../assets/img/home_yuan1.svg" class="ex-yuan" alt="" />

    <img src="../assets/img/home_xian.svg" class="ex-xian" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";

interface FeatrueIconStru {
  src: string;
  sup: string;
  sub: string;
}

@Component({
  components: { NavComponent },
})
export default class ExHeaderComponent extends Vue {
  @Prop({ default: [] }) public list?: Array<FeatrueIconStru>;

  public goHome(): void {
    this.$router.push({
      path: "/",
    });
  }
}
</script>
<style lang="scss" scoped>
.ex-header-component {
  width: 100%;
  position: relative;

  .ex-bg1 {
    user-select: none;
  }

  .ex-white-wrap {
    width: 49%;
    max-width: 720px;
    position: absolute;
    top: 30vw;
    right: 0;

    .ipfsex-bai {
      width: 100%;
      user-select: none;
      right: 0;
      top: 0;
    }

    .home-white-icon {
      position: relative;
      width: 100%;
      height: 0;

      .ipfslog {
        position: absolute;
        top: -45vw;
        left: 10vw;
        transform: rotateZ(40deg);
        width: 10.5vw;
      }

      .x {
        position: absolute;
        top: -34vw;
        left: 22vw;
        width: 4vw;
        transform: rotateZ(40deg);
      }

      .home-logo {
        position: absolute;
        top: -29vw;
        left: 27vw;
        width: 8vw;
        transform: rotateZ(40deg);
      }
    }
  }

  .header-title {
    position: absolute;
    top: 25vw;
    left: 8vw;
    user-select: none;

    img {
      width: 33vw;
    }
  }

  .ex-feature {
    position: absolute;
    top: 64vw;
    left: 28.9vw;
    width: 58%;

    .ex-feature-item {
      margin-top: 4.2vw;
      width: 33%;

      i {
        font-size: 2.7vw;
      }

      p {
        font-size: 1.5vw;
        margin-left: 1vw;
      }
    }
  }

  .ex-xiu1 {
    position: absolute;
    top: 43vw;
    left: 10vw;
    width: 6vw;
    opacity: 1;
    transform: rotateX(180deg) rotateZ(-105deg);
    user-select: none;
  }

  .ex-dian {
    position: absolute;
    top: 80.5%;
    left: 36.7%;
    width: 50.4%;
    opacity: 0.1;
    user-select: none;
  }

  .ex-yuan {
    position: absolute;
    width: 25vw;
    top: 51vw;
    left: 0;
    user-select: none;
  }

  .ex-xian {
    position: absolute;
    width: 40vw;
    top: 73vw;
    left: -10vw;
    z-index: -1;
    transform: rotate(50deg);
    user-select: none;
  }
}
</style>
