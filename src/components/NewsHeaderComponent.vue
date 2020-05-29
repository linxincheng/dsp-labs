<template>
  <div class="news-header">
    <img src="../assets/img/new_bj.svg" width="100%" class="new-bg" />

    <NavComponent class="nav-component"></NavComponent>

    <div class="header-white-wrap">
      <h2>News</h2>
      <section>
        <!-- <section class="flex between"> -->
        <div class="header-content">
          <img src="../assets/img/new_tuda.png" />
          <h4>
            Proof of challenge
          </h4>
          <p>
            The data download node initiates the holding challenge of the data
            to be downloaded as required. The data challenge exists in the form
            of contract transactions; the storage node drives the submission of
            the corresponding PDP certificate by monitoring the contract
          </p>
        </div>
      </section>
    </div>

    <img src="../assets/img/new_bai.svg" class="new-bai" />
    <img src="../assets/img/new_cai1.svg" class="new-cai1" />
    <img src="../assets/img/new_xiu1.svg" class="new-xiu1" />
    <img src="../assets/img/new_xian.svg" class="new-xian" />
    <img src="../assets/img/home_xiu2.svg" class="new-xiu2" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import NavComponent from "@/components/NavComponent.vue";

@Component({
  components: {
    NavComponent,
  },
})
export default class ClassName extends Vue {}
</script>
<style lang="scss" scoped>
.news-header {
  width: 100%;
  position: relative;
  height: auto;

  .new-bg {
    user-select: none;
  }

  .header-white-wrap {
    width: 61%;
    // position: absolute;
    position: relative;
    // top: 30vw;
    left: 10%;
    margin-top: -35vw;
    z-index: 9;

    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: -30vw;
      left: 5%;
    }

    & > h2 {
      font-size: 13vw;
      color: rgba(47, 147, 255, 1);
      line-height: 17vw;
      position: relative;
      top: -10vw;
      left: 6.2vw;
      user-select: none;
    }

    & > section {
      margin-top: 9vw;

      .header-content {
        margin-left: 0;

        & > img {
          float: left;
          width: 30vw;
          min-width: 140px;
          max-width: 400px;
          display: inline-block;
          margin-right: 10px;
          margin-bottom: 10px;
          user-select: none;
        }

        & > h4 {
          font-size: 22px;
          color: rgba(47, 147, 255, 1);
          line-height: 40px;
          user-select: none;

          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }

        & > p {
          margin-top: 2vw;
          font-size: 16px;
          color: rgba(100, 100, 100, 1);
          line-height: 26px;
        }
      }
    }
  }

  .new-bai {
    position: absolute;
    top: 12.8vw;
    left: 0;
    width: 26vw;
    user-select: none;
    z-index: 9;
  }

  .new-cai1 {
    position: absolute;
    top: 15.3vw;
    right: 0;
    width: 33.5vw;
    user-select: none;
  }

  .new-xiu1 {
    position: absolute;
    top: 9.7vw;
    right: 24.4vw;
    width: 6.7vw;
    user-select: none;
  }

  .new-xian {
    position: absolute;
    z-index: -1;
    top: 9.5vw;
    width: 55vw;
    right: 0;
    opaction: 0.7;
    user-select: none;
  }

  .new-xiu2 {
    position: absolute;
    top: 70.2vw;
    height: 15.5vw;
    right: 23.4vw;
    user-select: none;
  }
}
</style>
