<template>
  <header class="home-header">
    <NavComponent></NavComponent>

    <div class="home-header-wrap">
      <canvas class="home-white-wrap" id="home-white-wrap"> </canvas>
      <div v-show="false">
        <img id="source" src="../assets/img/dsp.png" width="141" height="40" />
      </div>

      <div class="header-title white">
        <h1>Distributed Storage Protocol</h1>
        <p>
          DSP is the core infrastructure of<br />
          Next Generation Internet
        </p>
      </div>

      <div class="learn-more flex jc-center" @click="goLearnMore">
        Learn more
      </div>

      <ul class="home-dsp-feature flex between wrap-wrap">
        <li
          class="flex column ai-center wow fadeIn"
          data-wow-delay="0.2s"
          v-for="(item, index) in list"
          :key="index"
        >
          <img :src="item.src" alt="" />
          <h4 class="white">{{ item.title }}</h4>
          <p class="white">{{ item.content }}</p>
        </li>
      </ul>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";
import WOW from "wow.js";
new WOW().init();

@Component({
  components: { NavComponent },
})
export default class HeaderComponent extends Vue {
  public canvasObj: any = null;

  public list: Array<any> = [
    {
      src: `${process.env.BASE_URL}/img/home_icon_encryp.svg`,
      title: "ENCRYPTION",
      content:
        "End-to-end encrypted storage to ensure network storage security",
    },
    {
      src: `${process.env.BASE_URL}/img/home_icon_dis.svg`,
      title: "DISTRIBUTION",
      content:
        "Multi-node distributed storage across the network to ensure network availability",
    },
    {
      src: `${process.env.BASE_URL}/img/home_icon_storage.svg`,
      title: "STORAGE",
      content:
        "Large capacity and efficient storage, providing a distributed storage environment for large files",
    },
    {
      src: `${process.env.BASE_URL}/img/home_icon_sharing.svg`,
      title: "SHARING",
      content:
        "Network-wide dynamic distribution mechanism, providing file sharing authority control",
    },
  ];

  public goHome(): void {
    this.$router.push({
      path: "/",
    });
  }

  public goLearnMore(): void {
    location.href = "#homeValueAnchor";
  }

  public mounted() {
    const CanvasObj: any = require("./globalRotate/index.js");
    this.canvasObj = new CanvasObj();
  }

  public destroyed() {
    this.canvasObj.destroyed();
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.home-header {
  width: 100%;
  height: 1570px;
  position: relative;
  background: url("./../assets/img/home_2kbj.svg") center top no-repeat;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    height: 1900px;
    background: url("./../assets/img/home_2kbj.svg") center -80px no-repeat;
    background-size: auto 100%;
  }

  & > .home-header-wrap {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    position: relative;

    .home-white-wrap {
      width: 40vw;
      max-width: 720px;
      height: 40vw;
      max-height: 720px;
      position: absolute;
      top: -8vw;
      right: -5vw;
      margin-top: 290px;

      @media screen and (max-width: 767px) {
        top: -35vw;
        right: auto;
        left: -5vw;
      }

      @media screen and (max-width: 435px) {
        top: -60vw;
        right: auto;
        left: -7vw;
        width: 60vw;
        height: 60vw;
      }
    }

    .header-title {
      user-select: none;
      height: auto;
      padding-top: 290px;

      h1 {
        font-size: 34px;
        height: 143px;
        line-height: 147px;
        background: url("./../assets/img/dsp_bg.svg") no-repeat 4px 0;

        @media screen and (max-width: 768px) {
          font-size: 24px;
          background: url("./../assets/img/dsp_bg.svg") no-repeat 4px 24px;
          background-size: 242px, 88px;
        }

        @media screen and (max-width: 435px) {
          font-size: 18px;
        }
      }

      p {
        margin-top: 60px;
        font-size: 22px;
        line-height: 36px;

        @media screen and (max-width: 768px) {
          font-size: 16px;
          line-height: 28px;
          margin-top: 30px;
        }
      }
    }

    .learn-more {
      margin-top: 64px;
      width: 180px;
      height: 50px;
      background: url("./../assets/img/btn.svg") no-repeat center center;
      font-size: 16px;
      color: #0078fa;
      line-height: 43px;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;

      &:hover {
        opacity: 0.8;
      }

      &:active {
        opacity: 1;
      }
    }

    .home-dsp-feature {
      margin-top: 125px;

      @media screen and (max-width: 768px) {
        margin-top: 80px;
        justify-content: center;
      }

      li {
        width: 48%;
        max-width: 470px;
        margin-top: 96px;

        @media screen and (max-width: 768px) {
          width: 100%;
          margin-top: 65px;
          max-width: 100%;
        }

        img {
          width: 115px;
          height: 82px;
          position: relative;
          left: 10px;

          @media screen and (max-width: 768px) {
            width: 100px;
            height: 71px;
            left: 7px;
          }
        }

        h4 {
          font-size: 30px;

          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }

        p {
          text-align: center;
          height: 60px;
          font-size: 18px;
          line-height: 30px;
          width: 100%;

          @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-top: 10px;
            line-height: 26px;
          }
        }
      }
    }

    .home-dian {
      position: absolute;
      top: 80.5%;
      left: 36.7%;
      width: 50.4%;
      opacity: 0.1;
      user-select: none;
    }

    .home-yuan {
      position: absolute;
      width: 25vw;
      top: 51vw;
      left: 0;
      user-select: none;
    }

    .home-xian {
      position: absolute;
      width: 40vw;
      top: 73vw;
      left: -10vw;
      z-index: -1;
      transform: rotate(50deg);
      user-select: none;
    }
  }
}
</style>
