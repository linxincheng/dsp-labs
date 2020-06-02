<template>
  <div class="ethfs">
    <ExHeaderComponent :list="list">
      <template slot="icon">
        <img src="../assets/img/ethlogo.png" class="ipfslog" alt="" />
      </template>
      <template slot="title">
        <!-- <img src="../assets/img/ipfslogo.svg" class="ipfslog" alt="" /> -->
        <img src="../assets/img/ethfs_logo.svg" alt="" />
      </template>
    </ExHeaderComponent>
    <div class="ex-introduce">
      <div class="article">
        <h4>What is ETHFSX</h4>
        <p>
          An extended communication and data storage network based on DSP
          protocol. The purpose is to provide a stable and safe file storage
          network for DApp / Dweb of the Ethernet.
        </p>
        <button
          class="btn-theme flex ai-center jc-center"
          title="https://github.com/ETHFSx"
          @click="linkTo('https://github.com/ETHFSx')"
        >
          <i class="iconfont iconjiantou"></i>
          Github
          <i class="iconfont icongithub"></i>
        </button>
      </div>
      <img src="../assets/img/ETHFSX.svg" class="ethfs-bg" alt="" />
      <img src="../assets/img/ipfsex_tu1.svg" class="ethfs-tu1" alt="" />
      <img src="../assets/img/home_xiu2.svg" class="ex-xiu2" alt="" />
    </div>

    <ul class="feature-content flex between wrap-wrap">
      <li v-for="(item, index) of list2" :key="index">
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
      <img src="../assets/img/home_xiu.svg" class="ex-xiu" alt="" />
      <img src="../assets/img/home_dian.svg" class="ex-dian" alt="" />
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
      <h2 class="ethfs-brings-title">
        The value of ETHFSX
      </h2>
      <div class="ethfs-brings-distribution ">
        <img
          src="../assets/img/new_xiu1.svg"
          class="ipfsx-brings-xiu1"
          alt=""
        />
        <p>
          1. DApp / Dweb can store large file data and service data in ETHFSX,
          no need to record, no review and no server.
        </p>
        <p>
          2. The introduction of the ETH incentive layer ensures that the
          storage node has sufficient power to continue to provide stable data
          services, so that the data files in the network will be copied in
          large numbers throughout the network, even if the initial DApp / Dweb
          server is shut down It still exists around the world, and others
          cannot close DApp / Dweb and delete user data. It can realize the
          self-running state of no host mode of DApp / Dweb.
        </p>
        <p>
          3. By optimizing the storage structure of distributed storage, the
          storage cost is extremely low, about 1/10 or less of the ordinary
          storage cost.
        </p>
        <p>
          4. The mechanism of cross-regional multi-node storage through data
          files will greatly improve the stability and speed of data
          transmission in different parts of the world.
        </p>
        <p>
          5. The account system built under the more mature Ethernet can greatly
          ensure the security and stability of the account.
        </p>
        <p>
          6. Integrated ENS service to help provide a more friendly file site
          index
        </p>
        <img
          src="../assets/img/ipfsex_yuan.svg"
          class="ethfs-brings-yuan"
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

// interface FeatrueContentStru {
//   title: string;
//   content: string;
// }
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
  },
})
export default class Ethfs extends Vue {
  public list: Array<FeatrueIconStru> = [
    {
      src: "iconhome_icon_b2",
      sup: "Open and",
      sub: "Free",
    },
    {
      src: "iconhost",
      sup: "No Hosting",
      sub: "Fee",
    },

    {
      src: "iconwendingbeifen6",
      sup: "Stable Data",
      sub: "Sorage",
    },
    {
      src: "icongaoxiao",
      sup: "Safe and",
      sub: "Efficient",
    },
    {
      src: "iconcunchujiedian",
      sup: "No Storage",
      sub: "Fee",
    },
    {
      src: "iconens",
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
  .ex-introduce {
    position: relative;
    margin-top: 25vw;
    height: 80vw;

    .article {
      position: absolute;
      width: 47vw;
      max-width: 764px;
      left: calc(50% + 200px);
      top: 4vw;
      min-height: 50vw;
      transform: translateX(-50%);

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
        max-width: 350px;
        height: 6.1vw;
        max-height: 70px;
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

        @media screen and (min-width: 1200px) {
          font-size: 20px;
        }

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

          @media screen and (min-width: 1200px) {
            font-size: 30px;
          }
        }
      }
    }

    & > .ethfs-bg {
      position: absolute;
      top: 0;
      left: 25vw;
      width: 62vw;
      z-index: -1;
      user-select: none;
    }

    & > .ethfs-tu1 {
      position: absolute;
      top: 23.2vw;
      left: 0;
      width: 57vw;
      user-select: none;
    }

    & > .ex-xiu2 {
      position: absolute;
      top: 31.7vw;
      left: 62.3vw;
      height: 16vw;
      user-select: none;
    }
  }

  .feature-content {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto 55vw;

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
    background: linear-gradient(#6763d7, #5171de);
    padding-bottom: 13vw;

    & > .ex-xiu {
      position: absolute;
      top: -45vw;
      left: 58vw;
      transform: rotateZ(-180deg) rotateX(180deg);
      width: 15vw;
      user-select: none;
    }

    & > .ex-dian {
      position: absolute;
      top: -20vw;
      left: 44vw;
      width: 38vw;
      user-select: none;
    }

    .ipfsx-brings-dicai {
      position: absolute;
      top: -37vw;
      width: 100%;
      user-select: none;
    }

    .ipfsx-brings-cai {
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

    .ethfs-brings-title {
      font-size: 5.2vw;
      color: rgba(255, 255, 255, 1);
      line-height: 7.3vw;
      position: relative;
      z-index: 9;
      // width: 50vw;
      width: 90%;
      max-width: 700px;
      padding-top: 12vw;
      // margin-left: 30.7vw;
      margin: 0 auto;
      user-select: none;

      @media screen and (min-width: 1200px) {
        font-size: 62px;
      }
    }

    .ethfs-brings-distribution {
      margin-top: 5vw;
      position: relative;
      width: 90%;
      max-width: 700px;
      margin: 0 auto;

      // @media screen and (max-width: 1024px) {
      // }

      // h4 {
      //   font-size: 22px;
      //   color: rgba(255, 255, 255, 1);
      //   line-height: 27px;
      // }

      p {
        font-size: 18px;
        color: rgba(255, 255, 255, 1);
        line-height: 28px;
        margin-top: 30px;
      }

      .ipfsx-brings-xiu1 {
        position: absolute;
        bottom: 11vw;
        transform: rotateY(180deg) rotateZ(-15deg);
        width: 9vw;
        left: -13vw;
        user-select: none;
      }

      .ethfs-brings-yuan {
        position: absolute;
        bottom: -15vw;
        left: -7vw;
        width: 38vw;
        z-index: -1;
        user-select: none;
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
