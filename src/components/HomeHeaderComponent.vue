<template>
  <header class="home-header">
    <img
      src="../assets/img/home_bg1.svg"
      class="home-bg1"
      width="100%"
      alt=""
    />

    <NavComponent></NavComponent>

    <canvas class="home-white-wrap" id="home-white-wrap">
      <!-- <img
        src="../assets/img/home_white.svg"
        class="home-white"
        width="50%"
        alt=""
      />
      <img src="../assets/img/home_logo.png" class="home-logo" alt="" />
      <img src="../assets/img/home_tu.svg" class="home-tu" alt="" /> -->
    </canvas>

    <div v-show="false">
      <img id="source" src="../assets/img/dsp.png" width="141" height="40" />
    </div>

    <div class="header-title white bold">
      <h1>DSP</h1>
      <p>Distributed Storage Protocol</p>
    </div>

    <div class="header-graph-wrap">
      <div class="header-graph ab-1">
        <div>
          <i class="iconfont iconhome_icon_encryp"></i>
        </div>
        <p>ENCRYPTION</p>
      </div>
      <img src="../assets/img/home_bg2.svg" class="header-line-1" alt="" />
      <div class="header-graph ab-2">
        <div>
          <i class="iconfont iconhome_icon_distrbution"></i>
        </div>
        <p>DISTRIBUTION</p>
      </div>
      <img src="../assets/img/home_bg2.svg" class="header-line-2" alt="" />

      <div class="header-graph ab-3">
        <div>
          <i class="iconfont iconhome_icon_storage"></i>
        </div>
        <p>STORAGE</p>
      </div>
      <img src="../assets/img/home_bg2.svg" class="header-line-3" alt="" />

      <div class="header-graph ab-4">
        <div>
          <i class="iconfont iconhome_icon_sharing"></i>
        </div>
        <p>SHARING</p>
      </div>
    </div>

    <img src="../assets/img/home_dian.svg" class="home-dian" alt="" />

    <img src="../assets/img/home_yuan1.svg" class="home-yuan" alt="" />

    <img src="../assets/img/home_xian.svg" class="home-xian" alt="" />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";

@Component({
  components: { NavComponent },
})
export default class HeaderComponent extends Vue {
  public canvasObj: any = null;

  public goHome(): void {
    this.$router.push({
      path: "/",
    });
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
  position: relative;

  .home-bg1 {
    user-select: none;
  }

  .home-white-wrap {
    width: 40%;
    max-width: 720px;
    height: 40vw;
    position: absolute;
    top: 5%;
    right: 10vw;

    // .home-white {
    //   width: 100%;
    //   height: 100%;
    //   user-select: none;
    // }

    // .home-logo {
    //   position: absolute;
    //   bottom: 22%;
    //   left: 20%;
    //   width: 29%;
    //   user-select: none;
    // }

    // .home-tu {
    //   position: absolute;
    //   bottom: 46%;
    //   left: 47%;
    //   width: 35%;
    //   user-select: none;
    // }
  }

  .header-title {
    position: absolute;
    width: 90%;
    left: 5%;
    top: 19.9%;
    left: 5%;
    user-select: none;
    max-width: 1200px;

    @media screen and (min-width: 1320px) {
      left: 50%;
      transform: translateX(-50%);
    }

    h1 {
      font-size: 10vw;
      line-height: 12.5vw;

      @media screen and (min-width: 1320px) {
        font-size: 130px;
        line-height: 150px;
      }
    }

    p {
      font-size: 2.75vw;
      line-height: 1.4vw;

      @media screen and (min-width: 1320px) {
        font-size: 36px;
        line-height: 30px;
      }
    }
  }

  .header-graph-wrap {
    position: absolute;
    left: 18%;
    top: 50%;
    width: 68%;
    height: 34%;
    user-select: none;

    @media screen and (min-width: 1300px) {
      width: 900px;
      height: 560px;
      left: 50%;
      transform: translateX(-400px);
      bottom: 10%;
      top: auto;
    }

    .header-graph {
      position: absolute;
      width: 25%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: white;

      div {
        width: 5.2vw;
        height: 5.2vw;
        border-radius: 2.6vw;
        border: 2px solid white;
        line-height: 5.2vw;

        @media screen and (min-width: 1300px) {
          width: 70px;
          height: 70px;
          border-radius: 35px;
          line-height: 70px;
        }

        @media screen and (max-width: 768px) {
          width: 30px;
          height: 30px;
          border-radius: 15px;
          line-height: 26px;
        }

        i {
          font-size: 2.4vw;
          @media screen and (min-width: 1300px) {
            font-size: 30px;
          }

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }

      p {
        font-size: 1.9vw;
        margin-top: 1.8vw;

        @media screen and (min-width: 1300px) {
          font-size: 26px;
          margin-top: 24px;
        }
      }

      &.ab-1 {
        left: -0.8vw;
        top: 0.2vw;
        @media screen and (min-width: 1300px) {
          left: -12px;
          top: 3px;
        }

        @media screen and (max-width: 768px) {
          left: 1vw;
          top: -2vw;
        }
      }
      &.ab-2 {
        left: 14.4vw;
        top: 20vw;

        @media screen and (min-width: 1300px) {
          left: 184px;
          top: 260px;
        }
      }
      &.ab-3 {
        left: 37.6vw;
        top: 5.8vw;
        @media screen and (min-width: 1300px) {
          left: 486px;
          top: 73px;
        }
      }
      &.ab-4 {
        left: 52.7vw;
        top: 24.5vw;

        @media screen and (min-width: 1300px) {
          left: 683px;
          top: 319px;
        }
      }
    }

    .header-line-1 {
      position: absolute;
      width: 10vw;
      top: 11vw;
      left: 5vw;
      user-select: none;

      @media screen and (min-width: 1300px) {
        left: 67px;
        top: 144px;
        width: 130px;
      }
    }

    .header-line-2 {
      position: absolute;
      top: 14.4vw;
      left: 31.5vw;
      width: 9vw;
      transform: rotateZ(250deg);

      @media screen and (min-width: 1300px) {
        left: 410px;
        top: 190px;
        width: 117px;
      }
    }

    .header-line-3 {
      position: absolute;
      top: 10vw;
      left: 52.3vw;
      width: 11.2vw;
      transform: rotateZ(280deg) rotateY(180deg);

      @media screen and (min-width: 1300px) {
        left: 683px;
        top: 130px;
        width: 144px;
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
</style>
