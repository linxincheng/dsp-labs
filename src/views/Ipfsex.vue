<template>
  <div class="ipfsex">
    <ExHeaderComponent :list="list">
      <template slot="icon">
        <img src="../assets/img/ipfslogo.svg" class="ipfslogo" alt="" />
      </template>
      <template slot="title">
        <div class="ex-title">
          <img
            src="../assets/img/ipfsex_logo.svg"
            class="ex-title-ipfsex-logo"
            alt=""
          />
          <p>
            IPFSEX is a distributed storage protocol implementation project that
            upgrades the IPFS protocol network based on DSP
          </p>
        </div>
      </template>
    </ExHeaderComponent>

    <div class="ex-introduce">
      <div class="article">
        <h4 class="theme-color-text-fill  wow fadeInLeft">
          <span class="title-first theme-color-text-fill"
            >W
            <img src="../assets/img/home_xiu2.svg" class="home-xiu" alt="" />
          </span>
          hat is IPFSX
        </h4>
        <p class="wow fadeIn" data-wow-delay="0.3s">
          IPFSX is a distributed storage protocol implementation project that
          upgrades the IPFS protocol network based on the DSP protocol. The goal
          is to bring more complete core protocol capabilities such as data file
          active distribution, file encryption, and authority control to the
          IPFS network. Finally, a more complete distributed storage network is
          established.
        </p>
        <button
          class="btn-theme flex ai-center jc-center wow fadeIn"
          data-wow-delay="0.3s"
          title="https://github.com/IPFS-eX"
          @click="linkTo('https://github.com/IPFS-eX')"
        >
          <i class="iconfont iconjiantou"></i>
          Github
          <i class="iconfont icongithub"></i>
        </button>
      </div>
      <img
        src="../assets/img/ipfsex_tu1.svg"
        class="ipfsex-tu1 wow fadeIn"
        alt=""
      />
      <img src="../assets/img/home_xiu.svg" class="ex-xiu wow fadeIn" alt="" />
      <img
        src="../assets/img/home_xian4.svg"
        class="ex-xian4 wow fadeIn"
        alt=""
      />
      <img
        src="../assets/img/home_yuan.svg"
        class="ex-yuan wow fadeIn"
        alt=""
      />
    </div>

    <section class="ipfsx-brings">
      <div class="ex-bj2"></div>
      <img src="../assets/img/ipfsex_zs2.svg" class="ipfsx-brings-cai" alt="" />

      <img
        src="../assets/img/ipfsex_zs1.svg"
        class="ipfsx-brings-white3"
        alt=""
      />
      <h2 class="ipfsex-brings-title wow fadeInLeft">
        <span
          >T<img src="../assets/img/home_xiu3.svg" class="home-xiu" alt="" />
        </span>
        he value that IPFSX brings
      </h2>
      <div class="ipfsex-brings-distribution ">
        <img
          src="../assets/img/new_xiu1.svg"
          class="ipfsx-brings-xiu1"
          alt=""
        />
        <h4 class="wow fadeIn">1. Distribution</h4>
        <p class="wow fadeIn">
          IPFSX provides end-to-end active distribution and sharing of data
          files. Data files can be actively distributed through protocols
          according to certain rules, so that file sources can be actively
          spread among network nodes, rather than relying on active downloading
          of data nodes. Therefore, it has the ability to actively control and
          adjust the security and stability of files in the network. You can
          flexibly customize different schemes to store and distribute files
          according to the importance of the files, hot and cold, and
          sensitivity. Make each file get enough spread to improve the
          transmission efficiency, safe storage status and availability of the
          file itself in the network.
        </p>
      </div>
      <div class="ipfsex-brings-wrap flex between">
        <div class="ipfsex-brings-privacy-protection">
          <h4 class="wow fadeIn">
            2. Privacy protection
          </h4>
          <p class="wow fadeIn">
            IPFSX increases the encryption of files from the terminal by
            introducing an encryption algorithm, which means that files uploaded
            to the network based on the IPFSX protocol can be encrypted and
            sharding. The user has absolute control over this data file and
            Access. Even if other people obtain the file Hash through irregular
            means and find the file, they cannot access the file itself. In this
            way, the ownership of the data is completely returned to the user.
          </p>
        </div>
        <div class="ipfsex-brings-authority-control">
          <h4 class="wow fadeIn">3. Authority Control</h4>
          <p class="wow fadeIn">
            Based on current application cryptography, the IPFSX protocol also
            supports the ability to control access rights to the same file, that
            is, the owner of the file has the ability to direct authorization to
            some end users to have access rights. Through such directional
            encryption capabilities, it actually brings the ability of copyright
            control to file storage to a certain extent. For example, the same
            movie file can be opened to users with copyrights according to the
            purchase and sale of copyright. And restrict authority to other
            users. In this way, from a certain point of view, it will also avoid
            a large amount of redundant content appearing on the network at the
            same time due to the singleness of the permissions of the file
            itself, and unnecessary storage resource waste.
          </p>
        </div>
        <img
          src="../assets/img/ipfsex_yuan.svg"
          class="ipfsex-brings-yuan wow fadeIn"
          data-wow-delay="0.5s"
          alt=""
        />
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExHeaderComponent from "@/components/ExHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import WOW from "wow.js";
new WOW().init();

interface FeatrueIconStru {
  src: string;
  sup: string;
  sub: string;
}

@Component({
  components: {
    ExHeaderComponent,
    FooterComponent,
  },
})
export default class Ipfsex extends Vue {
  public list: Array<FeatrueIconStru> = [
    {
      src: `${process.env.BASE_URL}/img/disabled.svg`,
      sup: "Redundancy",
      sub: "Control",
    },
    {
      src: `${process.env.BASE_URL}/img/jiedian_1.svg`,
      sup: "End-to-End",
      sub: "Sharing",
    },

    {
      src: `${process.env.BASE_URL}/img/jiamicaogaoxiang.svg`,
      sup: "Data",
      sub: "Security",
    },
    {
      src: `${process.env.BASE_URL}/img/disabled.svg`,
      sup: "Privacy",
      sub: "Protection",
    },
    {
      src: `${process.env.BASE_URL}/img/quanxiankongzhi.svg`,
      sup: "Permission",
      sub: "Control",
    },
    {
      src: `${process.env.BASE_URL}/img/iconquanxiankongzhi.svg`,
      sup: "Copyright",
      sub: "Control",
    },
  ];

  public linkTo(url: string): void {
    window.open(url);
  }
}
</script>
<style lang="scss" scoped>
.ipfsex {
  .ipfslogo {
    width: 160px;

    @media screen and (max-width: 768px) {
      width: 16vw;
    }
  }

  .ex-title {
    background: url("./../assets/img/EX.svg") no-repeat top left;
    width: 50%;

    @media screen and (max-width: 1366px) {
      width: 720px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      background-size: 200px;
    }

    & > .ex-title-ipfsex-logo {
      width: 276px;
      padding: 46px 0 70px;

      @media screen and (max-width: 768px) {
        width: 160px;
        padding: 43px 0 70px;
      }
    }

    & > p {
      font-size: 22px;
      color: rgba(255, 255, 255, 1);
      line-height: 36px;
      font-weight: 500;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .ex-introduce {
    position: relative;
    height: auto;
    margin-top: 300px;
    margin-bottom: 100px;
    // z-index: -1;

    @media screen and (max-width: 1024px) {
      margin-top: 10vw;
      margin-bottom: 200px;
    }

    & > .article {
      width: 667px;
      margin: 0 auto;
      position: relative;
      left: 270px;

      @media screen and (max-width: 1366px) {
        left: 70px;
      }

      @media screen and (max-width: 1024px) {
        width: 90%;
        left: 0;
      }

      & > h4 {
        font-size: 40px;
        font-weight: 600;
        color: rgba(47, 147, 255, 1);
        user-select: none;

        @media screen and (max-width: 768px) {
          font-size: 22px;
        }

        .title-first {
          font-size: 160px;
          position: relative;
          left: 5px;
          display: inline-block;

          @media screen and (max-width: 768px) {
            font-size: 60px;
          }

          .home-xiu {
            position: absolute;
            top: -10px;
            right: -88px;
            height: 136px;
            transform: rotate(270deg);
            user-select: none;

            @media screen and (max-width: 768px) {
              height: 70px;
              right: -44px;
              top: -5px;
            }
          }
        }
      }

      & > p {
        font-size: 24px;
        color: rgba(100, 100, 100, 1);
        line-height: 44px;
        margin-top: 30px;

        @media screen and (max-width: 768px) {
          line-height: 24px;
          font-size: 16px;
        }
      }

      & > .btn-theme {
        width: 240px;
        height: 50px;
        background: linear-gradient(
          217deg,
          rgba(155, 97, 247, 1) 0%,
          rgba(71, 128, 255, 1) 100%
        );
        box-shadow: 11px 12px 30px 4px rgba(106, 106, 106, 0.33);
        border-radius: 25px;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        outline: 0;
        border: 0;
        cursor: pointer;
        transition: all 0.2s ease;
        // user-select: none;
        margin-top: 110px;

        &:hover {
          opacity: 0.8;
        }

        &:active {
          opacity: 1;
        }

        .iconjiantou {
          font-size: 14px;
          margin-right: 20px;
          user-select: none;
        }
        .icongithub {
          font-size: 14px;
          margin-left: 20px;
          user-select: none;

          @media screen and (min-width: 1200px) {
            font-size: 30px;
          }
        }
      }
    }

    & > .ipfsex-bg {
      position: absolute;
      top: 0;
      left: 25vw;
      width: 62vw;
      z-index: -1;
      user-select: none;
    }

    & > .ipfsex-tu1 {
      position: absolute;
      top: 300px;
      left: 0;
      width: 818px;
      user-select: none;

      @media screen and (max-width: 1024px) {
        bottom: 15vw;
        top: inherit;
        width: 51vw;
      }

      // @media screen and (max-width: 768px) {
      // }
    }

    & > .ex-xiu2 {
      position: absolute;
      top: 31.7vw;
      left: 62.3vw;
      height: 16vw;
      user-select: none;

      @media screen and (max-width: 435px) {
        top: 61.7vw;
      }
    }

    & > .ex-xiu {
      position: absolute;
      bottom: -70px;
      width: 180px;
      right: 275px;
      transform: rotateZ(-180deg) rotateX(180deg);
      user-select: none;

      @media screen and (max-width: 768px) {
        bottom: 7vw;
        width: 18vw;
        right: 27.5vw;
      }

      // @media screen and (max-width: 435px) {
      //   top: 83vw;
      // }
    }

    & > .ex-dian {
      position: absolute;
      top: 70vw;
      left: 44vw;
      width: 38vw;
      user-select: none;

      @media screen and (max-width: 435px) {
        top: 100vw;
      }
    }

    & > .ex-xian4 {
      position: absolute;
      left: -440px;
      top: -630px;
      height: 850px;
      z-index: -1;

      @media screen and (max-width: 768px) {
        left: -44vw;
        top: -63vw;
        height: 85vw;
      }
    }

    & > .ex-yuan {
      position: absolute;
      left: -50px;
      top: -460px;
      transform: rotateZ(180deg);
      height: 500px;
      z-index: -1;

      @media screen and (max-width: 768px) {
        left: -5vw;
        top: -46vw;
        height: 50vw;
      }
    }
  }

  .ipfsx-brings {
    position: relative;
    z-index: -2;
    background: linear-gradient(#7659d2, #5171de);
    margin-top: 260px;
    padding-bottom: 150px;
    width: 100%;

    @media screen and (max-width: 768px) {
      margin-top: 100px;
      padding-bottom: 100px;
    }

    .ex-bj2 {
      height: 190px;
      z-index: -1;
      width: 100%;
      background: url("../assets/img/home_bj2.svg") bottom center no-repeat;
      background-size: 120%, 120%;
      position: absolute;
      bottom: 99%;
    }

    .ipfsx-brings-dicai {
      position: absolute;
      top: -37vw;
      width: 100%;
      user-select: none;
    }

    & > .ipfsx-brings-cai {
      position: absolute;
      top: -350px;
      right: 0px;
      height: 700px;
      user-select: none;

      @media screen and (max-width: 1024px) {
        top: -25vw;
        right: 0;
        height: 60vw;
      }
    }

    .ipfsx-brings-white3 {
      position: absolute;
      top: -320px;
      width: 500px;
      user-select: none;
      transform: rotateZ(0deg);

      @media screen and (max-width: 1024px) {
        top: -24vw;
        width: 50vw;
      }
    }

    .ipfsex-brings-title {
      position: relative;
      z-index: 9;
      padding-top: 200px;
      min-width: 657px;
      width: 40%;
      margin: 0 auto;
      user-select: none;
      font-size: 40px;
      color: rgba(255, 255, 255, 1);

      @media screen and (max-width: 768px) {
        min-width: 0;
        width: 90%;
        padding-top: 180px;
        font-size: 20px;
      }

      span {
        font-size: 160px;
        position: relative;
        left: 5px;

        @media screen and (max-width: 768px) {
          font-size: 80px;
        }

        .home-xiu {
          position: absolute;
          top: 40px;
          right: -148px;
          width: 136px;
          user-select: none;

          @media screen and (max-width: 768px) {
            top: 4vw;
            right: -14.8vw;
            width: 13.6vw;
          }
        }

        // @media screen and (max-width: 768px) {
        //   height: 70px;
        //   top: -5px;
        //   right: -44px;
        // }
      }
    }

    .ipfsex-brings-distribution {
      width: 45vw;
      // margin-top: 5vw;
      // margin-left: 30.7vw;
      margin: 5vw auto 0;
      position: relative;
      min-width: 657px;

      @media screen and (max-width: 768px) {
        width: 90vw;
        min-width: 0;
        margin-left: 5vw;
      }

      h4 {
        font-size: 22px;
        color: rgba(255, 255, 255, 1);
        line-height: 27px;
        user-select: none;

        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }

      p {
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        margin-top: 1.3vw;

        // @media screen and (max-width: 1024px) {
        // line-height: 24px;
        // }

        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }

      .ipfsx-brings-xiu1 {
        position: absolute;
        bottom: -188px;
        transform: rotateY(180deg) rotateZ(-15deg);
        width: 108px;
        left: -188px;
        user-select: none;

        @media screen and (max-width: 768px) {
          left: 13vw;
        }
      }
    }

    .ipfsex-brings-wrap {
      margin-left: 9vw;
      width: 83vw;
      position: relative;
      max-width: 1200px;
      margin: 200px auto 0;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
        margin-top: 13vw;
        flex-wrap: wrap;
      }

      .ipfsex-brings-privacy-protection {
        @media screen and (max-width: 768px) {
          width: 90vw;
          margin-left: 5vw;
          margin-bottom: 13vw;
        }

        // TO DO!!!!
        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }

        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          // line-height: 2.1vw;
          margin-top: 1.3vw;

          // @media screen and (max-width: 1024px) {
          line-height: 24px;
          // }

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }

      .ipfsex-brings-authority-control {
        margin-left: 75px;

        @media screen and (max-width: 768px) {
          width: 90vw;
          margin-left: 5vw;
        }

        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 18px;
          }
        }
        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          // line-height: 2.1vw;
          margin-top: 1.3vw;
          // @media screen and (max-width: 1024px) {
          line-height: 24px;
          // }

          @media screen and (max-width: 768px) {
            font-size: 14px;
          }
        }
      }

      .ipfsex-brings-yuan {
        position: absolute;
        left: 13vw;
        width: 488px;
        z-index: -1;
        bottom: 230px;
        user-select: none;

        @media screen and (max-width: 768px) {
          display: none;
          // opacity: 0;
          // bottom: 2vw;
          // top: auto;
        }
      }
    }
  }
}
</style>
