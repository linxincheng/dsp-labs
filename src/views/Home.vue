<template>
  <div class="home">
    <a name="home"></a>
    <HomeHeaderComponent></HomeHeaderComponent>
    <div
      class="distributed-storage-protocol flex between"
      v-if="videoComponenetDialog"
    >
      <img src="../assets/img/home_white2.svg" class="home-white-2" alt="" />
      <img src="../assets/img/home_xian1.svg" class="home-xian1" alt="" />
      <div
        class="distributed-storage-protocol-wrap flex between ai-center wrap-wrap"
      >
        <div class="video-banner-wrap wow fadeIn">
          <i class="iconfont iconbofang circle" @click="playVideo"></i>
          <img
            src="./../assets/img/video_banner.png"
            class="video-banner"
            alt
          />
        </div>
        <article>
          <title-component msg="Distributed Storage Protocol"></title-component>
          <p class="wow fadeIn" data-wow-delay="0.3s">
            The DSP (Distributed Storage Protocol) protocol is a new-generation
            Internet protocol paradigm based on data file encryption,
            distribution, storage, sharing and other multi-dimensional new
            generation Internet protocol paradigms, the goal of the DSP protocol
            is to become the core infrastructure of the next generation Internet
            (NGI).
          </p>
        </article>
      </div>
    </div>
    <div
      class="architecture flex between wrap-wrap"
      v-if="videoComponenetDialog"
    >
      <title-component msg="Architecture"></title-component>
      <div class="architecture-circle-wrap">
        <div
          class="architecture-circle-1 wow fadeInRight"
          data-wow-duration="0.6s"
        >
          <div class="architecture-circle-1-desc-1">
            <img src="./../assets/img/DSP_transaction.png" alt="" />
          </div>
          <div class="architecture-circle-1-desc-2">
            <img src="./../assets/img/DSP_search.png" alt="" />
          </div>
          <div class="architecture-circle-1-desc-3">
            <img src="./../assets/img/DSP_monitoring.png" alt="" />
          </div>
          <div class="architecture-circle-1-desc-4">
            <img src="./../assets/img/DSP_payment.png" alt="" />
          </div>
          <div class="architecture-circle-1-title">
            <div class="wow bounceInLeft" data-wow-delay="1.2s">DSP</div>
          </div>
        </div>
        <div
          class="architecture-circle-2 wow fadeInRight"
          data-wow-delay="0.3s"
          data-wow-duration="0.6s"
        >
          <div class="architecture-circle-2-wrap">
            <i class="iconfont icontubiao--dns architecture-circle-icon-1"></i>
            <i class="iconfont icontubiao--dns architecture-circle-icon-2"></i>
            <i class="iconfont icontubiao--dns architecture-circle-icon-3"></i>
            <div class="architecture-circle-2-title">
              <div class="wow bounceInLeft" data-wow-delay="1.2s">DNS</div>
            </div>
          </div>
        </div>
        <div
          class="architecture-circle-3 wow fadeInRight"
          data-wow-delay="0.6s"
          data-wow-duration="0.6s"
        >
          <div class="architecture-circle-3-wrap">
            <i class="iconfont icontubiao--fs architecture-circle-icon-1"></i>
            <i class="iconfont icontubiao--fs architecture-circle-icon-2"></i>
            <i class="iconfont icontubiao--fs architecture-circle-icon-3"></i>
            <i class="iconfont icontubiao--fs architecture-circle-icon-4"></i>

            <div class="architecture-circle-3-title">
              <div class="wow bounceInLeft" data-wow-delay="1.2s">FS</div>
            </div>
          </div>
        </div>
        <div
          class="architecture-circle-4 flex ai-center jc-center wow fadeInRight"
          data-wow-delay="0.9s"
          data-wow-duration="0.6s"
        >
          Chain
        </div>
        <img src="../assets/img/home_xiu2.svg" class="home-xiu2" alt="" />
      </div>
    </div>
    <a name="homeValueAnchor"></a>
    <section class="article-list" v-if="videoComponenetDialog">
      <img
        src="../assets/img/new_cai1.svg"
        class="home-cai1 wow fadeIn"
        alt=""
      />
      <img
        src="../assets/img/home_xian4.svg"
        class="home-xian4 wow fadeIn"
        alt=""
      />
      <img
        src="../assets/img/home_yuan.svg"
        class="home-yuan wow fadeIn"
        alt=""
      />
      <title-component msg="Value" class="article-list-title"></title-component>
      <ul>
        <li class="wow fadeInUp">
          <h4>
            <div>
              <i class="iconfont iconhome_icon_b1"></i>
            </div>
            <span class="theme-color-text-fill">
              Internet of Everything
            </span>
          </h4>
          <p>
            Based on the connection of the standardized network protocol
            interface provided by the DSP, different IOT devices are connected
            to the same network through the standardized protocol interface for
            data transmission, sharing and storage.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b2"></i>
            </div>
            <span class="theme-color-text-fill">
              Copyright Control
            </span>
          </h4>
          <p>
            The ownership and control of the data are completely returned to the
            user. Whether the file is deleted or viewed, the data owner needs to
            be authorized. Nodes and others have no right to operate on files.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b3"></i>
            </div>
            <span class="theme-color-text-fill">
              Data Control
            </span>
          </h4>
          <p>
            The ownership and control of the data are completely returned to the
            user. Whether the file is deleted or viewed, the data owner needs to
            be authorized. Nodes and others have no right to operate on files.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b4"></i>
            </div>
            <span class="theme-color-text-fill">
              Avoid Data Leakage
            </span>
          </h4>
          <p>
            The same file will be fragmented. Even if you get all the data of a
            node, you can't get a complete file. Nesting based on multiple
            encryption methods fundamentally eliminates the possibility of data
            leakage.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b5"></i>
            </div>
            <span class="theme-color-text-fill">
              Anti-Monitoring and Anti-Examination
            </span>
          </h4>
          <p>
            All personally generated data and uploaded and downloaded file data
            are processed with multiple encryptions, and even path obfuscation
            can be performed through routing protocols, so that they cannot be
            traced to specific senders and receivers, ensuring maximum personal
            privacy.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b6"></i>
            </div>
            <span class="theme-color-text-fill">
              Data Persistence
            </span>
          </h4>
          <p>
            Multiple ways to ensure the timeliness and consistency of network
            content through multi-node storage throughout the network, backup
            node status monitoring and strategic synchronization of backup
            content. Avoid data loss or temporary interruption of access caused
            by a single point of failure.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b7"></i>
            </div>
            <span class="theme-color-text-fill">
              Link Intelligence Autonomous Optimization
            </span>
          </h4>
          <p>
            Automatically capture the transmission status between nodes across
            the network. Through analysis and intelligent adjustment, the
            optimal path between nodes can be dynamically adjusted to ensure the
            optimization of the transmission status across the network.
          </p>
        </li>
        <li class="wow fadeInUp">
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b8"></i>
            </div>
            <span class="theme-color-text-fill">
              Developer Friendly
            </span>
          </h4>
          <p>
            Interfaces, components, and modules are standardized and open
            sourced for reuse. Avoid duplication of development, reduce
            redundant development work, and developers return to the business
            itself.
          </p>
        </li>
      </ul>
    </section>
    <section class="dsp-labs-wrap" v-if="videoComponenetDialog">
      <div class="home-bj2"></div>
      <img src="../assets/img/home_zs1.svg" class="home-zs1" alt="" />
      <img src="../assets/img/home_xiu3.svg" class="home-xiu3" alt="" />
      <img src="../assets/img/home_xian2.svg" class="home-xian2" alt="" />
      <a name="dsplabs"></a>
      <div class="dsp-labs-content">
        <title-component msg="DSP Labs" theme="white"></title-component>
        <p class="wow fadeIn" data-wow-delay="0.5s">
          DSP Labs, established by Onchain, is a research, development and
          deployment organization that improves next-generation Internet
          technologies. We hope to establish a new set of free and open network
          protocols-based on this set of protocols, people can achieve true
          freedom of data and freedom of interconnection. DSP Labs hopes to
          accelerate the creation of a distributed, decentralized, and
          interconnected parallel world network to create a higher performance,
          more economical, safer, and more open data sharing transmission
          protocol and file storage network as the next generation The
          foundation of the Internet provides fast, free and safe interaction of
          information and data for the entire network, reduces data transmission
          and storage costs, and accelerates the revolution in the era of
          information freedom.
        </p>
      </div>
    </section>
    <FooterComponent></FooterComponent>
    <div class="videoDialog" v-show="videoDialog" v-if="videoComponenetDialog">
      <div
        class="video-screen-mask"
        v-show="videoDialog"
        @click="pauseVideo"
      ></div>
      <div class="video-wrap">
        <VideoComponent></VideoComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHeaderComponent from "@/components/HomeHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import TitleComponent from "@/components/TitleComponent.vue";
// import VideoComponent from "@/components/VideoComponent.vue";
import WOW from "wow.js";
new WOW().init();

@Component({
  components: {
    HomeHeaderComponent,
    TitleComponent,
    FooterComponent,
    // VideoComponent,
    VideoComponent: () =>
      import(
        /* webpackChunkName: "video-component" */ "@/components/VideoComponent.vue"
      ),
  },
})
export default class Home extends Vue {
  public canvasObj: any = null;

  public videoDialog: boolean = false;

  public videoComponenetDialog: boolean = false;

  public VideoComponent: any = null;

  public mounted() {
    if (this.$router.currentRoute.hash === "#dsplabs") {
      this.$nextTick(() => {
        location.href = "#dsplabs";
      });
    } else if (this.$router.currentRoute.hash === "#home") {
      this.$nextTick(() => {
        location.href = "#home";
      });
    } else if (this.$router.currentRoute.hash === "homeValueAnchor") {
      this.$nextTick(() => {
        location.href = "#home";
      });
    }

    this.videoComponenetDialog = true;
  }

  public playVideo() {
    this.videoDialog = true;
    window.player.play();
  }

  public pauseVideo() {
    window.player.pause();
    this.videoDialog = false;
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.home {
  .distributed-storage-protocol {
    position: relative;
    height: 870px;

    @media screen and (max-width: 1024px) {
      height: auto;
      margin-bottom: 30vw;
    }

    .home-white-2 {
      width: 1069px;
      position: absolute;
      right: 0;
      top: -440px;
      z-index: -1;
      user-select: none;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    .home-xian1 {
      width: 377px;
      position: absolute;
      right: 0;
      top: -490px;
      z-index: -1;
      user-select: none;

      @media screen and (max-width: 768px) {
        width: 170px;
        top: -290px;
      }
    }

    .distributed-storage-protocol-wrap {
      width: 90%;
      max-width: 1200px;
      margin: 45px auto 0;
      font-size: 0;

      .video-banner-wrap {
        position: relative;
        transition: all 0.3s ease;
        margin: 240px auto 0;

        @media screen and (max-width: 768px) {
          width: 100%;
          margin-top: 0;

          .video-banner {
            width: 100%;
          }
        }

        // &:hover {
        // .circle {
        //   opacity: 1;
        // }

        &:after {
          content: "";
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        // }

        .circle {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          left: 50%;
          top: 50%;
          color: rgba(255, 255, 255, 1);
          transform: translateX(-50%) translateY(-50%);
          font-size: 50px;
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
          z-index: 2;
        }
      }

      article {
        width: 700px;
        margin: 0 auto;
        // padding-top: 145px;
        position: relative;

        @media screen and (max-width: 1024px) {
          width: 90%;
        }

        @media screen and (max-width: 768px) {
          padding-top: 15px;
        }

        p {
          margin-top: 3vw;
          font-size: 22px;
          color: rgba(100, 100, 100, 1);
          line-height: 42px;

          @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 26px;
          }
        }
      }
    }
  }

  .architecture {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 200px;
    margin-bottom: 40px;

    @media screen and (max-width: 1366px) {
      display: block;
      margin-top: 160px;
    }

    @media screen and (max-width: 1024px) {
      margin-bottom: 250px;
      margin-top: 0;
    }

    & > .architecture-circle-wrap {
      width: 720px;
      height: 630px;
      position: relative;

      @media screen and (max-width: 1366px) {
        margin: 0 auto;
      }

      @media screen and (max-width: 1024px) {
        width: 72vw;
        height: 63vw;
      }

      .architecture-circle-1 {
        height: 630px;
        width: 630px;
        border-radius: 315px;
        background: linear-gradient(220deg, #6374fb 10%, #7c6bf9 100%);
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        position: relative;
        z-index: 1;

        @media screen and (max-width: 1024px) {
          height: 63vw;
          width: 63vw;
        }

        & > div {
          color: white;
          text-align: center;

          & > img {
            height: 40px;

            @media screen and (max-width: 1024px) {
              height: 4vw;
            }
          }

          &.architecture-circle-1-desc-1 {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);

            @media screen and (max-width: 1024px) {
              top: 2vw;
            }
          }

          &.architecture-circle-1-desc-2 {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);

            @media screen and (max-width: 1024px) {
              left: 2vw;
            }
          }

          &.architecture-circle-1-desc-3 {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);

            @media screen and (max-width: 1024px) {
              bottom: 2vw;
            }
          }

          &.architecture-circle-1-desc-4 {
            position: absolute;
            left: 550px;
            top: 50%;
            transform: translateY(-50%);

            @media screen and (max-width: 1024px) {
              left: 55vw;
            }
          }

          &.architecture-circle-1-title {
            position: absolute;
            width: 412px;
            height: 66px;
            line-height: 66px;
            top: 0;
            left: 50%;
            z-index: -1;
            overflow: hidden;

            @media screen and (max-width: 1024px) {
              width: 41.2vw;
              height: 6.6vw;
              line-height: 6.6vw;
            }

            div {
              background: #6673fb;
              border-radius: 0 33px 33px 0;
              width: 100%;
              position: relative;
              left: -10%;
              height: 100%;
              text-align: right;
              box-sizing: border-box;
              padding-right: 50px;
              font-size: 36px;
              font-weight: 600;
              color: rgba(255, 255, 255, 1);
              letter-spacing: 2px;
              transform: translate(0%);

              @media screen and (max-width: 1024px) {
                padding-right: 5vw;
                font-size: 3.6vw;
                letter-spacing: 0.2vw;
              }
            }
          }
        }
      }
      .architecture-circle-2 {
        width: 460px;
        height: 460px;
        background: #a1c2ff;
        border-radius: 230px;
        position: absolute;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        left: 85px;
        top: 85px;
        z-index: 2;

        @media screen and (max-width: 1024px) {
          width: 46vw;
          height: 46vw;
          left: 8.5vw;
          top: 8.5vw;
        }

        & > .architecture-circle-2-wrap {
          width: 100%;
          height: 100%;
          position: relative;

          & > i {
            font-size: 44px;
            color: white;
            position: absolute;

            @media screen and (max-width: 1024px) {
              font-size: 4.4vw;
            }

            &.architecture-circle-icon-1 {
              left: 80px;
              top: 60px;

              @media screen and (max-width: 1024px) {
                left: 8.8vw;
                top: 6vw;
              }
            }
            &.architecture-circle-icon-2 {
              left: 330px;
              top: 60px;

              @media screen and (max-width: 1024px) {
                left: 33vw;
                top: 6vw;
              }
            }
            &.architecture-circle-icon-3 {
              left: 80px;
              top: 350px;

              @media screen and (max-width: 1024px) {
                left: 8vw;
                top: 35vw;
              }
            }
          }

          .architecture-circle-2-title {
            position: absolute;
            top: 40px;
            left: 360px;
            width: 368px;
            height: 66px;
            line-height: 66px;
            z-index: -1;
            overflow: hidden;

            @media screen and (max-width: 1024px) {
              top: 4vw;
              left: 36vw;
              height: 6.6vw;
              line-height: 6.6vw;
              width: 36.8vw;
            }

            div {
              background: #a1c2ff;
              border-radius: 0 33px 33px 0;
              width: 100%;
              position: relative;
              left: -10%;
              height: 100%;
              text-align: right;
              box-sizing: border-box;
              padding-right: 50px;
              font-size: 36px;
              font-weight: 600;
              color: rgba(255, 255, 255, 1);
              letter-spacing: 2px;
              transform: translate(0%);

              @media screen and (max-width: 1024px) {
                padding-right: 5vw;
                font-size: 3.6vw;
                letter-spacing: 0.2vw;
              }
            }
          }
        }
      }
      .architecture-circle-3 {
        width: 330px;
        height: 314px;
        background: #edf4ff;
        border-radius: 157px;
        position: absolute;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        left: 158px;
        top: 158px;
        z-index: 3;

        @media screen and (max-width: 1024px) {
          width: 33vw;
          height: 31.4vw;
          left: 15.8vw;
          top: 15.8vw;
        }

        & > .architecture-circle-3-wrap {
          width: 100%;
          height: 100%;
          position: relative;

          & > i {
            font-size: 35px;
            color: #c2ccdc;
            position: absolute;

            @media screen and (max-width: 1024px) {
              font-size: 3.5vw;
            }

            &.architecture-circle-icon-1 {
              top: 30px;
              left: 50%;
              transform: translateX(-50%);

              @media screen and (max-width: 1024px) {
                top: 3vw;
              }
            }
            &.architecture-circle-icon-2 {
              top: 50%;
              left: 30px;
              transform: translateY(-50%);

              @media screen and (max-width: 1024px) {
                left: 3vw;
              }
            }
            &.architecture-circle-icon-3 {
              bottom: 30px;
              left: 50%;
              transform: translateX(-50%);

              @media screen and (max-width: 1024px) {
                bottom: 3vw;
              }
            }
            &.architecture-circle-icon-4 {
              top: 50%;
              right: 30px;
              transform: translateY(-50%);

              @media screen and (max-width: 1024px) {
                right: 3vw;
              }
            }
          }

          & > .architecture-circle-3-title {
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 430px;
            height: 66px;
            line-height: 66px;
            z-index: -1;
            overflow: hidden;

            @media screen and (max-width: 1024px) {
              width: 43vw;
              height: 6.6vw;
              line-height: 6.6vw;
            }

            div {
              background: #edf4ff;
              border-radius: 0 33px 33px 0;
              width: 100%;
              position: relative;
              left: -10%;
              height: 100%;
              text-align: right;
              box-sizing: border-box;
              padding-right: 50px;
              font-size: 36px;
              font-weight: 600;
              color: #c2ccdc;
              letter-spacing: 2px;
              transform: translate(0%);

              @media screen and (max-width: 1024px) {
                padding-right: 5vw;
                font-size: 3.6vw;
                letter-spacing: 0.2vw;
              }
            }
          }
        }
      }
      .architecture-circle-4 {
        width: 136px;
        height: 136px;
        background: white;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
        border-radius: 68px;
        position: absolute;
        left: 247px;
        top: 247px;
        z-index: 4;
        font-size: 26px;
        color: rgba(195, 195, 195, 1);

        @media screen and (max-width: 1024px) {
          width: 13.6vw;
          height: 13.6vw;
          left: 24.7vw;
          top: 24.7vw;
          font-size: 2.6vw;
        }
      }

      .home-xiu2 {
        position: absolute;
        bottom: -260px;
        z-index: 2;
        right: 20px;
        height: 220px;
        user-select: none;

        @media screen and (max-width: 1366px) {
          bottom: -180px;
          right: 100px;
          height: 160px;
        }

        @media screen and (max-width: 1024px) {
          bottom: -130px;
          height: 110px;
        }
      }
    }
  }

  .article-list {
    position: relative;
    z-index: -1;
    margin-top: -180px;
    padding-top: 280px;

    @media screen and (max-width: 768px) {
      padding-top: 150px;
    }

    .home-cai1 {
      position: absolute;
      left: -70px;
      top: 0px;
      width: 260px;
      transform: rotateZ(180deg);
      z-index: -2;

      @media screen and (max-width: 768px) {
        width: 130px;
        left: -35px;
        top: -50px;
      }
    }

    .home-xian4 {
      position: absolute;
      top: -200px;
      left: -470px;
      width: 900px;
      z-index: -2;

      @media screen and (max-width: 768px) {
        width: 450px;
        top: -150px;
        left: -235px;
      }
    }

    .home-yuan {
      position: absolute;
      right: 0;
      width: 300px;
      top: 660px;
      z-index: -2;

      @media screen and (max-width: 768px) {
        width: 150px;
      }
    }

    & > .article-list-title {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }

    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 90%;
      max-width: 1200px;
      margin: 10px auto;

      @media screen and (max-width: 768px) {
        margin-top: 0;
      }

      li {
        width: 43%;
        margin-top: 80px;

        @media screen and (max-width: 1024px) {
          width: 100%;
        }

        @media screen and (max-width: 768px) {
          margin-top: 60px;
        }

        h4 {
          font-size: 22px;
          // color: rgba(47, 147, 255, 1);
          display: flex;
          align-items: center;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }

          div {
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50px;
            background: linear-gradient(
              90deg,
              rgba(72, 78, 237, 1) 0%,
              rgba(58, 114, 240, 1) 100%
            );
            border-radius: 25px;
            flex-shrink: 0;
            i {
              font-size: 26px;
              color: white;
            }
          }

          span {
            margin-left: 13px;
          }
        }

        p {
          margin-top: 20px;
          font-size: 16px;
          line-height: 28px;
          color: rgba(100, 100, 100, 1);

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }
    }
  }

  .dsp-labs-wrap {
    position: relative;
    z-index: -1;
    margin-top: 220px;
    width: 100%;
    background: linear-gradient(#7659d2, #5171de);

    & > .home-bj2 {
      height: 190px;
      z-index: -1;
      width: 100%;
      background: url("../assets/img/home_bj2.svg") bottom center no-repeat;
      background-size: 120%, 120%;
      position: absolute;
      bottom: 99%;
    }

    .home-zs1 {
      position: absolute;
      right: 0;
      max-width: 605px;
      width: 30%;
      bottom: 100%;
      transform: translateY(25%);
      z-index: -1;

      @media screen and (max-width: 768px) {
        width: 40%;
        transform: translateY(35%);
      }
    }

    .home-xiu3 {
      position: absolute;
      right: 10%;
      top: 10%;
      transform: rotate(90deg);
      max-width: 170px;
      min-width: 100px;
      width: 10%;
      z-index: 9;
    }

    .home-xian2 {
      position: absolute;
      width: 500px;
      top: -480px;
      left: -20px;
      transform: rotate(180deg);
      z-index: -1;

      @media screen and (max-width: 768px) {
        width: 250px;
        top: -240px;
        left: -10px;
      }
    }

    .dsp-labs-content {
      position: relative;
      width: 638px;
      margin: 0 auto;
      // left: -20px;
      padding: 160px 0 180px;
      // padding: 10vw 0 10vw;
      transform: translateX(-40px);

      @media screen and (max-width: 1024px) {
        width: 90%;
        transform: translateX(0px);
        left: 0;
      }

      h3 {
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

      p {
        margin-top: 40px;
        color: white;
        font-size: 16px;
        line-height: 28px;

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}

.videoDialog {
  position: fixed;
  margin: 0;
  z-index: 2001;
  padding: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  .video-screen-mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
  }

  .video-wrap {
    max-width: 654px;
    width: 100%;
  }
}
</style>
