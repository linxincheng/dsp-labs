<template>
  <div class="ipfsex">
    <ExHeaderComponent :list="list">
      <template slot="icon">
        <img src="../assets/img/ipfslogo.svg" class="ipfslog" alt="" />
      </template>
      <template slot="title">
        <!-- <img src="../assets/img/ipfslogo.svg" class="ipfslog" alt="" /> -->
        <img src="../assets/img/ipfsex_logo.svg" alt="" />
      </template>
    </ExHeaderComponent>
    <div class="ex-introduce">
      <div class="article">
        <h4>What is IPFSX</h4>
        <p>
          IPFSX is a distributed storage protocol implementation project that
          upgrades the IPFS protocol network based on the DSP protocol. The goal
          is to bring more complete core protocol capabilities such as data file
          active distribution, file encryption, and authority control to the
          IPFS network. Finally, a more complete distributed storage network is
          established.
        </p>
        <button
          class="btn-theme flex ai-center jc-center"
          title="https://github.com/IPFS-eX"
          @click="linkTo('https://github.com/IPFS-eX')"
        >
          <i class="iconfont iconjiantou"></i>
          Github
          <i class="iconfont icongithub"></i>
        </button>
      </div>
      <img src="../assets/img/IPFSEX.svg" class="ipfsex-bg" alt="" />
      <img src="../assets/img/ipfsex_tu1.svg" class="ipfsex-tu1" alt="" />
      <img src="../assets/img/home_xiu2.svg" class="ex-xiu2" alt="" />
      <img src="../assets/img/home_xiu.svg" class="ex-xiu" alt="" />
      <img src="../assets/img/home_dian.svg" class="ex-dian" alt="" />
    </div>

    <section class="ipfsx-brings">
      <img
        src="../assets/img/home_dicai.svg"
        class="ipfsx-brings-dicai"
        alt=""
      />
      <img src="../assets/img/home_cai.svg" class="ipfsx-brings-cai" alt="" />
      <img
        src="../assets/img/new_cai2.svg"
        class="ipfsx-brings-white3"
        alt=""
      />
      <h2 class="ipfsex-brings-title">
        The value that IPFSX brings
      </h2>
      <div class="ipfsex-brings-distribution ">
        <img
          src="../assets/img/new_xiu1.svg"
          class="ipfsx-brings-xiu1"
          alt=""
        />
        <h4>1. Distribution</h4>
        <p>
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
          <h4>2. Privacy protection</h4>
          <p>
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
          <h4>3. Authority Control</h4>
          <p>
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
          class="ipfsex-brings-yuan"
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
      src: "iconhome_icon_b2",
      sup: "Redundancy",
      sub: "Control",
    },
    {
      src: "iconhost",
      sup: "End-to-End",
      sub: "Sharing",
    },

    {
      src: "iconwendingbeifen6",
      sup: "Data",
      sub: "Security",
    },
    {
      src: "icongaoxiao",
      sup: "Privacy",
      sub: "Protection",
    },
    {
      src: "iconcunchujiedian",
      sup: "Permission",
      sub: "Control",
    },
    {
      src: "iconens",
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
  .ex-introduce {
    position: relative;
    margin-top: 25vw;
    height: 100vw;

    @media screen and (max-width: 435px) {
      height: 140vw;
    }

    .article {
      position: absolute;
      width: 47vw;
      right: 8.5vw;
      top: 4vw;
      min-height: 50vw;

      @media screen and (max-width: 768px) {
        width: 80vw;
      }

      & > h4 {
        font-size: 1.8vw;
        color: rgba(47, 147, 255, 1);
        line-height: 2.1vw;
        user-select: none;

        @media screen and (max-width: 768px) {
          line-height: 18px;
        }
      }

      & > p {
        margin-top: 3vw;
        font-size: 1.6vw;
        color: rgba(100, 100, 100, 1);
        line-height: 3.1vw;

        @media screen and (max-width: 768px) {
          line-height: 24px;
        }
      }

      & > .btn-theme {
        width: 30.7vw;
        height: 6.1vw;
        background: linear-gradient(
          217deg,
          rgba(155, 97, 247, 1) 0%,
          rgba(71, 128, 255, 1) 100%
        );
        box-shadow: 11px 12px 30px 4px rgba(106, 106, 106, 0.33);
        border-radius: 15vw;
        font-size: 1.6vw;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        top: 46.2vw;
        right: 17.3vw;
        outline: 0;
        border: 0;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;

        @media screen and (max-width: 435px) {
          top: 76.2vw;
        }

        &:active {
          opacity: 0.8;
        }

        .iconjiantou {
          //   font-size: 22px;
          font-size: 1.6vw;
          margin-right: 3vw;
          user-select: none;
        }
        .icongithub {
          //   font-size: 44px;
          font-size: 3vw;
          margin-left: 2.5vw;
          user-select: none;
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
      top: 23.2vw;
      left: 0;
      width: 57vw;
      user-select: none;

      @media screen and (max-width: 435px) {
        top: 53.2vw;
      }
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
      top: 53vw;
      left: 74vw;
      transform: rotateZ(-180deg) rotateX(180deg);
      width: 15vw;
      user-select: none;

      @media screen and (max-width: 435px) {
        top: 83vw;
      }
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
  }

  .ipfsx-brings {
    position: relative;
    z-index: -1;
    background: linear-gradient(#6763d7, #5171de);
    margin-top: -11vw;
    padding-bottom: 5vw;

    .ipfsx-brings-dicai {
      position: absolute;
      top: -37vw;
      width: 100%;
      user-select: none;
    }

    & > .ipfsx-brings-cai {
      position: absolute;
      top: -28.4vw;
      right: 0;
      width: 27%;
      user-select: none;
    }

    .ipfsx-brings-white3 {
      position: absolute;
      top: -68.5vw;
      width: 47%;
      user-select: none;
    }

    .ipfsex-brings-title {
      font-size: 6.2vw;
      color: rgba(255, 255, 255, 1);
      line-height: 7.3vw;
      position: relative;
      z-index: 9;
      width: 50vw;
      padding-top: 12vw;
      margin-left: 30.7vw;
      user-select: none;

      @media screen and (max-width: 768px) {
        width: 80vw;
        margin-left: 10vw;
      }
    }

    .ipfsex-brings-distribution {
      width: 45vw;
      margin-top: 5vw;
      margin-left: 30.7vw;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 80vw;
        margin-left: 10vw;
      }

      h4 {
        font-size: 22px;
        color: rgba(255, 255, 255, 1);
        line-height: 27px;
        user-select: none;
      }

      p {
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        line-height: 2.1vw;
        margin-top: 1.3vw;

        @media screen and (max-width: 1024px) {
          line-height: 24px;
        }
      }

      .ipfsx-brings-xiu1 {
        position: absolute;
        bottom: -11vw;
        transform: rotateY(180deg) rotateZ(-15deg);
        width: 9vw;
        left: -13vw;
        user-select: none;

        @media screen and (max-width: 768px) {
          left: 13vw;
        }
      }
    }

    .ipfsex-brings-wrap {
      margin-left: 9vw;
      width: 83vw;
      margin-top: 13vw;
      position: relative;

      @media screen and (max-width: 768px) {
        width: 100%;
        margin-left: 0vw;
        flex-wrap: wrap;
      }

      .ipfsex-brings-privacy-protection {
        @media screen and (max-width: 768px) {
          width: 80vw;
          margin-left: 10vw;
          margin-bottom: 13vw;
        }

        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
          user-select: none;
        }

        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          line-height: 2.1vw;
          margin-top: 1.3vw;

          @media screen and (max-width: 1024px) {
            line-height: 24px;
          }
        }
      }

      .ipfsex-brings-authority-control {
        margin-left: 11vw;

        @media screen and (max-width: 768px) {
          width: 80vw;
          margin-left: 10vw;
        }

        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
          user-select: none;
        }
        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          line-height: 2.1vw;
          margin-top: 1.3vw;

          @media screen and (max-width: 1024px) {
            line-height: 24px;
          }
        }
      }

      .ipfsex-brings-yuan {
        position: absolute;
        left: 13vw;
        width: 38vw;
        z-index: -1;
        top: -15vw;
        user-select: none;

        @media screen and (max-width: 768px) {
          opacity: 0;
          bottom: 2vw;
          top: auto;
        }
      }
    }
  }
}
</style>
