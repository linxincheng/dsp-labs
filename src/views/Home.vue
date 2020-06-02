<template>
  <div class="home">
    <a name="homeAnchor"></a>
    <HomeHeaderComponent></HomeHeaderComponent>
    <div class="distributed-storage-protocol">
      <img src="../assets/img/home_white2.svg" class="home-white-2" alt="" />
      <img src="../assets/img/home_xian1.svg" class="home-xian1" alt="" />
      <img src="../assets/img/home_xiu.svg" class="home-xiu" alt="" />
      <img src="../assets/img/home_xiu2.svg" class="home-xiu2" alt="" />
      <article>
        <h3>Distributed Storage Protocol</h3>
        <p>
          The DSP (Distributed Storage Protocol) protocol is a new-generation
          Internet protocol paradigm based on data file encryption,
          distribution, storage, sharing and other multi-dimensional new
          generation Internet protocol paradigms, the goal of the DSP protocol
          is to become the core infrastructure of the next generation Internet
          (NGI).
        </p>
      </article>
    </div>
    <section class="article-list">
      <ul>
        <li>
          <h4>
            <div>
              <i class="iconfont iconhome_icon_b1"></i>
            </div>
            <span>
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
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b2"></i>
            </div>
            <span>
              Copyright Control
            </span>
          </h4>
          <p>
            The ownership and control of the data are completely returned to the
            user. Whether the file is deleted or viewed, the data owner needs to
            be authorized. Nodes and others have no right to operate on files.
          </p>
        </li>
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b3"></i>
            </div>
            <span>
              Data Control
            </span>
          </h4>
          <p>
            The ownership and control of the data are completely returned to the
            user. Whether the file is deleted or viewed, the data owner needs to
            be authorized. Nodes and others have no right to operate on files.
          </p>
        </li>
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b4"></i>
            </div>
            <span>
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
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b5"></i>
            </div>
            <span>
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
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b6"></i>
            </div>
            <span>
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
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b7"></i>
            </div>
            <span>
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
        <li>
          <h4 class="flex ai-center">
            <div>
              <i class="iconfont iconhome_icon_b8"></i>
            </div>
            <span>
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
      <img src="../assets/img/home_xiu.svg" class="home-xiu-2" alt="" />
      <img src="../assets/img/home_dian.svg" class="home-dian-2" alt="" />
    </section>
    <section class="dsp-labs-wrap">
      <img src="../assets/img/home_dicai.svg" class="home-dicai" alt="" />
      <img src="../assets/img/home_cai.svg" class="home-cai" alt="" />
      <img src="../assets/img/home_xian2.svg" class="home-xian2" alt="" />
      <img src="../assets/img/home_white3.svg" class="home-white3" alt="" />
      <a name="firstAnchor"></a>
      <div class="dsp-labs-content">
        <h3>DSP Labs</h3>
        <p>
          DSP Labs is a research, development and deployment organization that
          improves next-generation Internet technologies. We hope to establish a
          new set of free and open network protocols-based on this set of
          protocols, people can achieve true freedom of data and freedom of
          interconnection. DSP Labs hopes to accelerate the creation of a
          distributed, decentralized, and interconnected parallel world network
          to create a higher performance, more economical, safer, and more open
          data sharing transmission protocol and file storage network as the
          next generation The foundation of the Internet provides fast, free and
          safe interaction of information and data for the entire network,
          reduces data transmission and storage costs, and accelerates the
          revolution in the era of information freedom.
        </p>
      </div>
    </section>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomeHeaderComponent from "@/components/HomeHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

@Component({
  components: {
    HomeHeaderComponent,
    FooterComponent,
  },
})
export default class Home extends Vue {
  public mounted() {
    if (this.$router.currentRoute.hash === "#firstAnchor") {
      this.$nextTick(() => {
        location.href = "#firstAnchor";
      });
    } else if (this.$router.currentRoute.hash === "#homeAnchor") {
      this.$nextTick(() => {
        location.href = "#homeAnchor";
      });
    }
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.home {
  .distributed-storage-protocol {
    position: relative;
    height: 75vw;

    @media screen and (max-width: 1024px) {
      height: auto;
      margin-bottom: 30vw;
    }

    .home-white-2 {
      width: 78.5vw;
      position: absolute;
      top: -62vw;
      z-index: -1;
      right: 0;
      user-select: none;

      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    .home-xian1 {
      width: 19vw;
      position: absolute;
      right: 0;
      top: -25vw;
      z-index: -1;
      user-select: none;
    }

    .home-xiu {
      position: absolute;
      top: 9vw;
      right: 31vw;
      width: 8.6vw;
      user-select: none;
    }

    .home-xiu2 {
      position: absolute;
      bottom: 1.5vw;
      z-index: 2;
      right: 49.7vw;
      height: 15vw;
      user-select: none;
      @media screen and (max-width: 1024px) {
        bottom: -20vw;
      }
    }

    article {
      position: absolute;
      top: 24.8vw;
      left: 38vw;
      min-height: 50vw;

      @media screen and (max-width: 1300px) {
        top: 22vw;
      }

      @media screen and (max-width: 1024px) {
        position: relative;
        width: 90%;
        left: 5%;
        // padding: 10vw 3vw 30vw;
        padding: 0;
        z-index: -2;
        box-sizing: border-box;
        min-height: 0vw;
      }

      h3 {
        font-size: 26px;
        color: rgba(47, 147, 255, 1);
        user-select: none;

        @media screen and (max-width: 1320px) {
          font-size: 22px;
        }
      }

      p {
        margin-top: 3vw;
        font-size: 22px;
        color: rgba(100, 100, 100, 1);
        line-height: 42px;
        width: 43vw;

        @media screen and (max-width: 1320px) {
          font-size: 16px;
        }

        @media screen and (max-width: 1024px) {
          width: 100%;
        }
      }
    }
  }

  .article-list {
    width: 90%;
    max-width: 1200px;
    margin: 9vw auto 45vw;
    position: relative;
    z-index: 2;

    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      li {
        width: 43%;
        margin-top: 50px;

        @media screen and (max-width: 1024px) {
          width: 100%;
        }

        h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          display: flex;
          align-items: center;
          user-select: none;

          @media screen and (max-width: 1024px) {
            font-size: 20px;
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
          line-height: 26px;
          color: rgba(100, 100, 100, 1);
        }
      }
    }

    .home-xiu-2 {
      position: absolute;
      bottom: -18vw;
      right: 7vw;
      transform: rotateY(180deg);
      width: 14vw;
      user-select: none;
    }

    .home-dian-2 {
      position: absolute;
      bottom: -37vw;
      right: 13vw;
      width: 30vw;
      opacity: 0.8;
      user-select: none;
    }
  }

  .dsp-labs-wrap {
    position: relative;
    margin-top: 30vw;
    background: linear-gradient(#6763d7, #5171de);

    .home-dicai {
      position: absolute;
      top: -36vw;
      width: 100%;
      user-select: none;
    }

    .home-cai {
      position: absolute;
      top: -27.4vw;
      right: 0;
      width: 27%;
      user-select: none;
      z-index: 2;
    }

    .home-xian2 {
      position: absolute;
      bottom: -130px;
      height: 50vw;
      right: 0;
      user-select: none;
    }

    .home-white3 {
      position: absolute;
      top: -67.5vw;
      width: 47%;
      user-select: none;
    }

    .dsp-labs-content {
      position: relative;
      width: 638px;
      margin: 0 auto;
      left: -20px;
      padding: 10vw 0 10vw;
      transform: translateX(-40px);

      @media screen and (max-width: 1024px) {
        width: 90%;
        transform: translateX(0px);
        left: 0;
      }

      h3 {
        color: white;
        font-size: 88px;
        user-select: none;
        @media screen and (max-width: 1024px) {
          font-size: 9vw;
        }
      }

      p {
        margin-top: 40px;
        color: white;
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>
