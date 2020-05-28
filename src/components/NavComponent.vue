<template>
  <div :class="{ pop: pop }" class="nav">
    <img
      class="logo"
      @click.stop="goHome"
      src="../assets/img/home_bailogo.svg"
      alt=""
    />
    <nav>
      <div class="menu-line" @click="pop = !pop" :class="{ pop: pop }">
        <span class="top-line line" :class="{ pop: pop }"></span>
        <span class="mid-line line" :class="{ pop: pop }"></span>
        <span class="bottom-line line" :class="{ pop: pop }"></span>
      </div>
      <ul class="nav_ul" :class="{ pop: pop }">
        <li>
          <router-link active-class="nav-active" to="/" title="HOME"
            >HOME</router-link
          >
        </li>
        <li>
          <router-link active-class="nav-active" to="/" title="DSP LABS"
            >DSP LABS</router-link
          >
        </li>
        <li>
          <router-link active-class="nav-active" to="/news" title="NEWS"
            >NEWS</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavComponent extends Vue {
  public pop: boolean = false;
  public goHome(): void {
    this.$router.push({
      path: "/",
    });
  }
}
</script>
<style lang="scss" scoped>
.nav {
  position: absolute;
  z-index: 99;
  top: 0px;
  width: 100%;
  padding: 36px 0;
  transition: all 0.5s;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 26px 0;
  }

  & > .logo {
    position: absolute;
    top: 28px;
    left: 120px;
    transition: all 0.5s;
    z-index: 99;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      left: calc(50% - 40px);
      width: 100px;
    }
  }

  &.pop {
    background: #208afd;
    color: #fff !important;
    padding: 24px 0;
  }

  nav {
    position: relative;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    .menu-line {
      display: none;
    }

    @media screen and (max-width: 768px) {
      justify-content: flex-start;
      .menu-line {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 28px;
        height: 28px;

        .line {
          transition: 0.3s all;
        }

        & > span {
          display: block;
          width: 100%;
          height: 3px;
          background: #fff;

          &.pop {
            background: #fff;
          }
        }

        &.pop {
          .top-line {
            transform: rotateZ(45deg) translateY(5px) translateX(10.2px);
          }

          .mid-line {
            opacity: 0;
          }

          .bottom-line {
            transform: rotateZ(-45deg) translateY(-4px) translateX(8px);
          }
        }
      }

      padding: 0px 30px;
    }

    .nav_ul {
      position: relative;
      display: flex;
      flex: 1;
      //   margin: 0 150px 0 50%;
      margin-right: 150px;
      font-size: 16px;
      justify-content: flex-end;

      @media screen and (max-width: 768px) {
        transition: all 0.5s;
        transform: translateX(100%);
        border-top: 1px solid rgba(255, 255, 255, 0.2);

        &.pop {
          transform: translateX(0);
        }

        position: fixed;
        flex-direction: column;
        justify-content: flex-start;
        right: 0px;
        top: 75px;
        bottom: 0px;
        width: 100%;
        margin: 0px;
        background: #208afd;
        color: #fff !important;

        li {
          font-size: 16px;
          text-align: center;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          a {
            width: 100%;
            margin: 15px auto;
          }
        }
      }

      li {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;

        a {
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
