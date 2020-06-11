<template>
  <footer>
    <div class="flex footer-content between ai-center wrap-wrap">
      <section class="footer-left">
        <i
          class="iconfont iconicon_facebook"
          title="https://www.facebook.com/DSP-Labs-110430797334480/"
          @click="linkTo('https://www.facebook.com/DSP-Labs-110430797334480/')"
        ></i>
        <i
          class="iconfont icontuite"
          title="https://twitter.com/DSP_Labs"
          @click="linkTo('https://twitter.com/DSP_Labs')"
        ></i>
        <i
          class="iconfont iconicon_reddit"
          title="https://www.reddit.com/user/DSP-Lab/"
          @click="linkTo('https://www.reddit.com/user/DSP-Lab/')"
        ></i>
        <i
          class="iconfont iconmedium"
          title="https://medium.com/@dsplabs"
          @click="linkTo('https://medium.com/@dsplabs')"
        ></i>
        <i
          class="iconfont iconicon_githubb"
          title="https://github.com/DSP-Labs"
          @click="linkTo('https://github.com/DSP-Labs')"
        ></i>
      </section>
      <section class="footer-right flex ai-center">
        <img src="../assets/img/qr.png" class="qr" alt="" />
        <p>
          <span><i class="iconfont iconemail"></i> Email:</span>
          <a href="mailto:@onchain.com">dsp@onchain.com</a> <br /><span
            ><i class="iconfont icontelegram"></i> Telegram:</span
          >
          <a href="t.me/DSP_Official" title="link to t.me/DSP_Official">
            t.me/DSP_Official
          </a>
        </p>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {
  public linkTo(url: string): void {
    window.open(url);
  }
}
</script>

<style scope lang="scss">
footer {
  background: #5171de;
  height: 227px;

  @media screen and (max-width: 1100px) {
    height: auto;
  }

  .footer-content {
    position: relative;
    z-index: 999;
    width: 90%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 auto;
    height: 100%;
    // max-width: 1200px;

    @media screen and (max-width: 1100px) {
      margin: 0 auto;
      padding: 15px 0;
    }

    .footer-left {
      user-select: none;

      @media screen and (max-width: 1100px) {
        margin: 0 auto;
        padding: 15px 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .iconfont {
        font-size: 50px;
        color: white;
        margin-right: 40px;
        cursor: pointer;
        transition: all 0.1s ease;

        @media screen and (max-width: 768px) {
          margin: 10px 20px;
        }

        &:hover {
          opacity: 0.7;
        }

        &:active {
          opacity: 1;
        }
      }
    }

    .footer-right {
      margin-right: 28px;
      @media screen and (max-width: 1100px) {
        margin: 30px auto 20px;
      }

      @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .qr {
        width: 100px;
        height: 100px;
        margin-right: 42px;
        user-select: none;

        @media screen and (max-width: 768px) {
          margin-right: 0px;
        }
      }

      p {
        font-size: 18px;
        line-height: 32px;
        color: white;

        span {
          user-select: none;
        }

        @media screen and (max-width: 768px) {
          margin-top: 15px;
          font-size: 14px;
          line-height: 28px;
        }

        & > a {
          &:hover {
            opacity: 0.7;
          }

          &:active {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
