<template>
  <div class="ethfs">
    <ExHeaderComponent :list="list">
      <template slot="icon">
        <img src="../assets/img/ethlogo.png" class="ipfslog" alt="" />
      </template>
      <template slot="title">
        <div class="ex-title">
          <img
            src="../assets/img/ethfs_logo2.svg"
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
        <!-- <h4 class="theme-color-text-fill  wow fadeInLeft">
          <span class="title-first theme-color-text-fill"
            >W
            <img src="../assets/img/home_xiu2.svg" class="home-xiu" alt="" />
          </span>
          hat is ETHFSX
        </h4> -->
        <TitleComponent msg="What is ETHFSX"></TitleComponent>
        <p class="wow fadeIn" data-wow-delay="0.3s">
          An extended communication and data storage network based on DSP
          protocol. The purpose is to provide a stable and safe file storage
          network for DApp / Dweb of the Ethernet.
        </p>
        <button
          class="btn-theme flex ai-center jc-center wow fadeIn"
          data-wow-delay="0.3s"
          title="https://github.com/ETHFSx"
          @click="linkTo('https://github.com/ETHFSx')"
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

    <ul class="feature-content flex between wrap-wrap">
      <li v-for="(item, index) of list2" class="wow fadeInUp" :key="index">
        <div class="title flex ai-center">
          <div class="order-number white flex ai-center jc-center">
            {{ index + 1 }}
          </div>
          <h4>{{ item.title }}</h4>
        </div>
        <p>{{ item.content }}</p>
      </li>
    </ul>

    <section class="ipfsx-brings">
      <div class="ex-bj2"></div>

      <img src="../assets/img/ipfsex_zs2.svg" class="ipfsx-brings-cai" alt="" />

      <img
        src="../assets/img/ipfsex_zs1.svg"
        class="ipfsx-brings-white3"
        alt=""
      />
      <!-- <h2 class="ethfs-brings-title wow fadeInLeft">
        <span
          >T<img src="../assets/img/home_xiu3.svg" class="home-xiu" alt="" />
        </span>
        he value of ETHFSX
      </h2> -->
      <TitleComponent
        msg="The value of ETHFSX"
        theme="white"
        class="ethfs-brings-title"
      ></TitleComponent>
      <div class="ethfs-brings-distribution">
        <p class="wow fadeIn">
          1. DApp / Dweb can store large file data and service data in ETHFSX,
          no need to record, no review and no server.
        </p>
        <p class="wow fadeIn">
          2. The introduction of the ETH incentive layer ensures that the
          storage node has sufficient power to continue to provide stable data
          services, so that the data files in the network will be copied in
          large numbers throughout the network, even if the initial DApp / Dweb
          server is shut down It still exists around the world, and others
          cannot close DApp / Dweb and delete user data. It can realize the
          self-running state of no host mode of DApp / Dweb.
        </p>
        <p class="wow fadeIn">
          3. By optimizing the storage structure of distributed storage, the
          storage cost is extremely low, about 1/10 or less of the ordinary
          storage cost.
        </p>
        <p class="wow fadeIn">
          4. The mechanism of cross-regional multi-node storage through data
          files will greatly improve the stability and speed of data
          transmission in different parts of the world.
        </p>
        <p class="wow fadeIn">
          5. The account system built under the more mature Ethernet can greatly
          ensure the security and stability of the account.
        </p>
        <p class="wow fadeIn">
          6. Integrated ENS service to help provide a more friendly file site
          index
        </p>
        <img
          src="../assets/img/ipfsex_yuan.svg"
          class="ethfs-brings-yuan wow fadeIn"
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
import TitleComponent from "@/components/TitleComponent.vue";
import WOW from "wow.js";
new WOW().init();

interface FeatrueIconStru {
  src: string;
  sup: string;
  sub: string;
}

interface FeatrueContentStru {
  title: string;
  content: string;
}

@Component({
  components: {
    ExHeaderComponent,
    FooterComponent,
    TitleComponent,
  },
})
export default class Ethfs extends Vue {
  public list: Array<FeatrueIconStru> = [
    {
      src: `${process.env.BASE_URL}/img/disabled.svg`,
      sup: "Open and",
      sub: "Free",
    },
    {
      src: `${process.env.BASE_URL}/img/jiedian_1.svg`,
      sup: "No Hosting",
      sub: "Fee",
    },

    {
      src: `${process.env.BASE_URL}/img/jiamicaogaoxiang.svg`,
      sup: "Stable Data",
      sub: "Sorage",
    },
    {
      src: `${process.env.BASE_URL}/img/disabled.svg`,
      sup: "Safe and",
      sub: "Efficient",
    },
    {
      src: `${process.env.BASE_URL}/img/quanxiankongzhi.svg`,
      sup: "Low",
      sub: "Storage Costs",
    },
    {
      src: `${process.env.BASE_URL}/img/iconquanxiankongzhi.svg`,
      sup: "ENS Service",
      sub: "",
    },
  ];

  public list2: Array<FeatrueContentStru> = [
    {
      title: "Staking",
      content: `In order to restrict the storage node to provide stable and reliable storage distribution service, the system will require the storage node to pledge a certain amount of Token to the ETH network;
  When a node in the ETHFSX network stores a file, it will actively broadcast to the entire network, and other storage nodes can also actively obtain the file to be stored through the Pubsub mode. At the same time, the node stake a certain amount of token to the Ethernet for the file;`,
    },
    {
      title: "Proof of challenge",
      content: `The data download node initiates the holding challenge of the data to be downloaded as required. The data challenge exists in the form of contract transactions; the storage node drives the submission of the corresponding PDP certificate by monitoring the contract transactions. And through the smart contract of the ETH network to verify the authenticity of the storage node to store a file.
  `,
    },
    {
      title: "Verification and Share Profit",
      content: `Based on the storage node's competition mechanism, for the same file, the PDP verification contract will prioritize (up to) the first three challenge proofs. If the verification is passed and the storage staking behavior of the node is valid, the node will be rewarded for storing token according to the size of the file to be challenged while the Ethernet is generating blocks; when the staking token of a specific file is consumed, the storage node may choose to ignore Challenge response.`,
    },
    {
      title: "Punishment",
      content: `When the storage node sends malicious data to the download node, the download node can initiate a penalty request through the ETH appeal contract. After the ETH contract verification appeal request is passed, the Token compensation will be paid to the file storage party by a certain amount based on the staking token of the storage node.
  Based on the above file distribution strategy and incentive strategy, the number of file backups exists in the network as much as possible. Gradually make files, websites, Dapp data into a state that can never be deleted and can run on the entire network, and finally achieve a truly complete business decentralized network world.`,
    },
  ];

  public linkTo(url: string): void {
    window.open(url);
  }
}
</script>
<style lang="scss" scoped>
.ethfs {
  .ipfslog {
    width: 190px;

    @media screen and (max-width: 768px) {
      width: 19vw;
    }
  }

  .ex-title {
    background: url("./../assets/img/FSX.svg") no-repeat top left;
    width: 50%;

    @media screen and (max-width: 1366px) {
      width: 720px;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      background-size: 200px;
    }

    & > .ex-title-ipfsex-logo {
      width: 310px;
      padding: 46px 0 70px;

      @media screen and (max-width: 768px) {
        width: 175px;
        padding: 26px 0 70px;
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
    margin-top: 300px;
    margin-bottom: 100px;
    height: auto;
    // z-index: -1;

    @media screen and (max-width: 1024px) {
      margin-top: 10vw;
      margin-bottom: 100px;
    }

    .article {
      width: 667px;
      margin: 0 auto;
      position: relative;
      // left: 15%;
      left: 270px;

      @media screen and (max-width: 1366px) {
        left: 70px;
      }

      @media screen and (max-width: 1024px) {
        width: 90%;
        left: 0;
      }

      // & > h4 {
      //   font-size: 40px;
      //   font-weight: 600;
      //   color: rgba(47, 147, 255, 1);
      //   user-select: none;

      //   @media screen and (max-width: 768px) {
      //     font-size: 22px;
      //   }

      //   .title-first {
      //     font-size: 160px;
      //     position: relative;
      //     left: 5px;
      //     display: inline-block;

      //     @media screen and (max-width: 768px) {
      //       font-size: 60px;
      //     }

      //     .home-xiu {
      //       position: absolute;
      //       top: -10px;
      //       right: -88px;
      //       height: 136px;
      //       transform: rotate(270deg);
      //       user-select: none;

      //       @media screen and (max-width: 768px) {
      //         height: 70px;
      //         right: -44px;
      //         top: -5px;
      //       }
      //     }
      //   }
      // }

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
        user-select: none;
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
      top: 380px;
      left: 0;
      width: 818px;
      user-select: none;

      @media screen and (max-width: 1024px) {
        bottom: 15vw;
        top: inherit;
        width: 51vw;
      }

      // @media screen and (max-width: 435px) {
      //   top: 53.2vw;
      // }
    }

    & > .ex-xiu {
      position: absolute;
      bottom: -70px;
      width: 180px;
      right: 275px;
      transform: rotateZ(-180deg) rotateX(180deg);
      user-select: none;

      @media screen and (max-width: 435px) {
        top: 83vw;
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

  .feature-content {
    width: 90%;
    max-width: 1200px;
    margin: 240px auto;

    @media screen and (max-width: 1024px) {
      margin: 20px auto 120px;
    }

    li {
      width: 44%;
      margin: 30px 3%;

      @media screen and (max-width: 768px) {
        width: 100%;
      }

      .title {
        user-select: none;
        & > .order-number {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background: linear-gradient(
            90deg,
            rgba(72, 78, 237, 1) 0%,
            rgba(58, 114, 240, 1) 100%
          );
        }

        h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          line-height: 27px;
          margin-left: 27px;
        }
      }

      & > p {
        font-size: 16px;
        color: rgba(100, 100, 100, 1);
        line-height: 26px;
        margin-top: 14px;
      }
    }
  }

  .ipfsx-brings {
    position: relative;
    z-index: -1;
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

    .ipfsx-brings-cai {
      position: absolute;
      top: -350px;
      right: 0px;
      height: 700px;
      // width: 27%;
      user-select: none;

      @media screen and (max-width: 1024px) {
        top: -25vw;
        right: 0;
        height: 60vw;
      }
    }

    .ipfsx-brings-white3 {
      position: absolute;
      top: -360px;
      width: 500px;
      user-select: none;
      transform: rotateZ(0deg);

      @media screen and (max-width: 1024px) {
        top: -24vw;
        width: 50vw;
      }
    }

    .ethfs-brings-title {
      position: relative;
      z-index: 9;
      padding-top: 200px;
      min-width: 657px;
      width: 40%;
      margin: 0 auto;
      // user-select: none;
      // font-size: 40px;
      // color: rgba(255, 255, 255, 1);

      @media screen and (max-width: 768px) {
        min-width: 0;
        width: 90%;
        padding-top: 180px;
        // font-size: 20px;
      }

      // span {
      //   font-size: 160px;
      //   position: relative;
      //   left: 10px;

      //   @media screen and (max-width: 768px) {
      //     font-size: 80px;
      //   }

      //   .home-xiu {
      //     position: absolute;
      //     top: 40px;
      //     right: -148px;
      //     width: 136px;
      //     user-select: none;
      //   }

      //   @media screen and (max-width: 768px) {
      //     height: 70px;
      //     top: -5px;
      //     right: -44px;
      //   }
      // }
    }

    .ethfs-brings-distribution {
      position: relative;
      width: 40%;
      min-width: 657px;
      margin: 70px auto 0;

      @media screen and (max-width: 768px) {
        min-width: 0;
        width: 90%;
        // padding-top: 180px;
        // font-size: 20px;
      }

      p {
        margin-top: 30px;
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        line-height: 30px;
      }

      .ethfs-brings-yuan {
        position: absolute;
        left: -270px;
        width: 488px;
        z-index: -1;
        bottom: -110px;
        user-select: none;

        @media screen and (max-width: 768px) {
          opacity: 0;
          bottom: 2vw;
          top: auto;
        }
      }
    }

    .ethfs-brings-wrap {
      margin-left: 9vw;
      width: 83vw;
      margin-top: 13vw;
      position: relative;

      .ethfs-brings-privacy-protection {
        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
        }

        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          line-height: 2.1vw;
          margin-top: 1.3vw;
        }
      }

      .ethfs-brings-authority-control {
        margin-left: 11vw;
        h4 {
          font-size: 22px;
          color: rgba(255, 255, 255, 1);
          line-height: 27px;
        }
        p {
          font-size: 16px;
          color: rgba(255, 255, 255, 1);
          line-height: 2.1vw;
          margin-top: 1.3vw;
        }
      }
    }
  }
}
</style>
