<template>
  <footer>
    <div class="flex footer-content between ai-center wrap-wrap">
      <section class="footer-left">
        <i class="iconfont iconicon_facebook"></i>
        <i class="iconfont iconicon_twitter"></i>
        <i class="iconfont iconicon_reddit"></i>
        <i class="iconfont iconicon_medium"></i>
        <i class="iconfont iconicon_githubb"></i>
      </section>
      <section class="footer-right flex ai-center">
        <img src="../assets/img/qr.png" class="qr" alt="" />
        <p>
          Email: dsp@onchain.com <br />Telegram:
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
  created() {}
}
</script>

<style scope lang="scss">
footer {
  background: #5171de;
  height: 227px;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  .footer-content {
    position: relative;
    z-index: 999;
    width: 80%;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 auto;
    height: 100%;
    user-select: none;

    .footer-left {
      @media screen and (max-width: 1100px) {
        margin: 0 auto;
      }

      @media screen and (max-width: 768px) {
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

        &.iconicon_twitter {
          font-size: 48px;
        }

        &.iconicon_medium {
          font-size: 46px;
        }
      }
    }

    .footer-right {
      margin-right: 28px;
      @media screen and (max-width: 1100px) {
        margin: 20px auto;
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

        @media screen and (max-width: 768px) {
          margin-right: 0px;
        }
      }

      p {
        font-size: 18px;
        line-height: 32px;
        color: white;

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
