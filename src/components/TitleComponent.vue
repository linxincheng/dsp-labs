<template>
  <div class="title-component">
    <span class="home-title-first">
      <span
        class="wow flipInX"
        :class="theme === 'white' ? '' : 'theme-color-text-fill'"
        data-wow-delay="0.8s"
        >{{ firstString }}</span
      >
      <img
        src="../assets/img/home_xiu3.svg"
        v-if="theme === 'white'"
        class="home-xiu wow bounceInLeft"
        alt=""
      />
      <img
        src="../assets/img/home_xiu4.svg"
        v-else
        class="home-xiu wow bounceInLeft"
        alt=""
      />
    </span>
    <span
      class="wow flipInX"
      :class="theme === 'white' ? '' : 'theme-color-text-fill'"
      data-wow-delay="0.8s"
    >
      {{ secondString }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue, Watch } from "vue-property-decorator";
import WOW from "wow.js";
new WOW().init();

@Component
export default class TitleComponent extends Vue {
  @Prop({ default: "" }) public msg?: string;
  @Prop({ default: "" }) public theme?: string;

  get firstString(): string {
    if (!this.msg) return "";
    return this.msg.slice(0, 1) || "";
  }

  get secondString(): string {
    if (!this.msg) return "";
    return this.msg.slice(1) || "";
  }
}
</script>
<style lang="scss" scoped>
.title-component {
  color: white;
  font-size: 40px;
  user-select: none;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  .home-title-first {
    font-size: 160px;
    position: relative;
    left: 3px;

    @media screen and (max-width: 768px) {
      font-size: 60px;
    }

    .home-xiu {
      position: absolute;
      top: 50px;
      right: -140px;
      width: 136px;
      user-select: none;

      @media screen and (max-width: 768px) {
        width: 70px;
        top: 15px;
        right: -74px;
      }
    }
  }
  span {
    position: relative;
    display: inline-block;
  }
}
</style>
