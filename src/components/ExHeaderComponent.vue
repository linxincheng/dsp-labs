<template>
  <div class="ex-header-component">
    <NavComponent></NavComponent>

    <div class="header-title flex between wrap-wrap white bold">
      <slot name="title"></slot>
      <div class="flex between ai-center header-title-icon">
        <!-- <img src="./../assets/img/" alt=""> -->
        <slot name="icon"></slot>
        <img src="../assets/img/x.svg" class="x" alt="" />
        <img src="../assets/img/home_logo.png" class="home-logo" alt="" />
      </div>
    </div>

    <ul class="ex-feature flex between wrap-wrap">
      <li
        class="ex-feature-item white wow fadeIn"
        data-wow-delay="0.2s"
        v-for="(item, index) of list"
        :key="index"
      >
        <div>
          <img :src="item.src" />
          <p>
            {{ item.sup }}<br />
            {{ item.sub }}
          </p>
        </div>
      </li>
    </ul>

    <img src="../assets/img/home_white2.svg" class="ex-header-white-2" alt="" />

    <img src="../assets/img/yuan.svg" class="ex-header-xian1" alt="" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";
import WOW from "wow.js";
new WOW().init();

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
  overflow: hidden;
  position: relative;
  height: auto;
  background: url("./../assets/img/ex_bg.svg") center -110px no-repeat;
  padding-top: 240px;

  @media screen and (max-width: 1024px) {
    background: url("./../assets/img/ex_bg.svg") center top no-repeat;
  }

  .ex-bg1 {
    user-select: none;
  }

  .header-title {
    user-select: none;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;

    .header-title-icon {
      .x {
        width: 40px;
        margin: 0 70px;

        @media screen and (max-width: 768px) {
          width: 4vw;
          margin: 0 7vw;
        }
      }

      .home-logo {
        width: 160px;
        height: 160px;

        @media screen and (max-width: 768px) {
          width: 16vw;
          height: 16vw;
        }
      }

      @media screen and (max-width: 1366px) {
        margin-top: 50px;
      }
    }
  }

  .ex-feature {
    width: 90%;
    max-width: 1200px;
    margin: 150px auto;

    & > :nth-child(3n + 1) {
      div {
        margin: 0;
      }
    }

    & > :nth-child(3n + 2) {
      div {
        margin: 0 auto;
      }
    }

    & > :nth-child(3n + 3) {
      div {
        float: right;
      }
    }

    @media screen and (max-width: 768px) {
      margin: 100px auto;

      & > :nth-child(3n + 1) {
        div {
          margin: 0 auto;
        }
      }

      & > :nth-child(3n + 3) {
        div {
          margin: 0 auto;
          float: none;
        }
      }
    }

    .ex-feature-item {
      margin-top: 122px;
      width: 33%;

      @media screen and (max-width: 768px) {
        width: 50%;
        margin-top: 50px;
      }

      & > div {
        width: 240px;
        text-align: center;

        @media screen and (max-width: 768px) {
          width: 100%;
        }

        img {
          width: 140px;
          @media screen and (max-width: 768px) {
            width: 14vw;
          }
        }

        p {
          width: 240px;
          font-size: 30px;
          font-weight: bold;
          color: rgba(56, 114, 249, 1);
          line-height: 37px;
          text-align: center;

          @media screen and (max-width: 768px) {
            width: 100%;
            font-size: 18px;
            line-height: 24px;
            font-weight: 500;
          }
        }
      }
    }
  }
  .ex-header-white-2 {
    width: 1000px;
    position: absolute;
    right: -300px;
    bottom: 90px;
    z-index: -1;
    user-select: none;

    @media screen and (max-width: 768px) {
      // display: none;
      width: 80vw;
      top: 68vw;
      right: 0;
    }

    @media screen and (max-width: 435px) {
      width: 80vw;
      top: 500px;
    }
  }

  .ex-header-xian1 {
    width: 260px;
    position: absolute;
    right: 0;
    top: 300px;
    z-index: -1;
    user-select: none;

    @media screen and (max-width: 768px) {
      width: 25vw;
      // min-width: 150px;
      top: 330px;
      bottom: inherit;
    }

    @media screen and (max-width: 435px) {
      top: 430px;
      // min-width: 120px;
    }
  }
}
</style>
