<template>
  <div :class="{ scroll: scroll, pop: pop }" class="nav">
    <div class="nav-wrap">
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
            <a @click="goHomeTopLabs">{{ $t("nav.home") }}</a>
          </li>
          <li>
            <a @click="goHomeDspLabs">{{ $t("nav.dsplabs") }}</a>
          </li>
          <li>
            <a @click="goGithub">
              {{ $t("nav.github") }}
            </a>
          </li>
          <li>
            <el-select @change="setLanguage" v-model="lang" style="width: 40px">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavComponent extends Vue {
  public pop: boolean = false;
  public scroll: boolean = false;
  public lang: string = localStorage.getItem("lang") || "en";
  public options: Array<any> = [
    {
      value: "en",
      label: "En",
    },
    {
      value: "zh",
      label: "中文",
    },
  ];
  public goHome(): void {
    this.$router.push({
      path: "/",
    });
  }

  public goHomeTopLabs(): void {
    if (this.$router.currentRoute.name === "Home") {
      location.href = "#home";
      this.pop = false;
    } else {
      this.$router.push({
        path: "/",
      });
    }
  }

  public goHomeDspLabs(): void {
    if (this.$router.currentRoute.name === "Home") {
      location.href = "#dsplabs";
      this.pop = false;
    } else {
      this.$router.push({
        path: "/",
        hash: "#dsplabs",
      });
    }
  }

  public mounted() {
    document.addEventListener("scroll", (): void => {
      const scrollTop: number =
        document.documentElement.scrollTop || window.pageYOffset;
      if (scrollTop > 0) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    });
  }

  public goGithub(): void {
    this.pop = false;
    window.open("https://github.com/DSP-Labs");
  }

  public setLanguage(lang: string): void {
    localStorage.setItem("lang", lang || "en");
    this.$i18n.locale = localStorage.getItem("lang") || "en";
  }
}
</script>
<style lang="scss" scoped>
.nav {
  // position: absolute;
  z-index: 99;
  top: 0;
  width: 100%;
  padding: 36px 0;
  transition: all 0.5s;
  color: #fff;

  position: fixed;

  // left: 50%;
  // transform: translateX(-50%);

  @media screen and (max-width: 768px) {
    padding: 26px 0;
    width: 100%;
    left: 0;
    transform: none;
  }

  &.scroll {
    padding: 24px 0;
    background: linear-gradient(
      270deg,
      rgba(71, 128, 255, 0.8) 0%,
      rgba(155, 97, 247, 0.8) 100%
    );
  }

  &.pop {
    @media screen and (max-width: 768px) {
      background: linear-gradient(
        270deg,
        rgba(71, 128, 255, 1) 0%,
        rgba(155, 97, 247, 1) 100%
      );
      color: #fff !important;
      padding: 24px 0;
      position: fixed;
    }
  }

  & > .nav-wrap {
    width: 90%;
    // max-width: 1200px;
    margin: 0 auto;
    position: relative;
    // left: 50%;
    // transform: translateX(-50%);

    & > .logo {
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      // left: 10vw;
      transition: all 0.5s;
      z-index: 99;
      cursor: pointer;
      user-select: none;
      left: 0;

      @media screen and (max-width: 768px) {
        left: calc(50% - 40px);
        width: 100px;
      }
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
      user-select: none;

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
        // position: relative;
        display: flex;
        flex: 1;
        // margin-right: 150px;
        font-size: 16px;
        justify-content: flex-end;
        transition: all 0.5s ease;

        // @media screen and (max-width: 1024px) {
        //   margin-right: 120px;
        // }

        @media screen and (max-width: 768px) {
          transition: all 0.5s;
          transform: translateX(101%);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0;
          background: white;

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
          // background: #208afd;
          background: linear-gradient(
            270deg,
            rgba(71, 128, 255, 1) 0%,
            rgba(155, 97, 247, 1) 100%
          );
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
          transition: all 0.5s ease;

          @media screen and (max-width: 1024px) {
            margin: 0 10px;
          }

          @media screen and (max-width: 768px) {
            margin: 0;
          }

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
}
</style>

<style lang="scss">
.nav {
  .el-select {
    @media screen and (max-width: 768px) {
      padding: 5px 0;
    }

    .el-input {
      user-select: none;
      input {
        font-size: 16px;
      }

      .el-input__suffix {
        right: -15px;
        top: 2px;
      }

      .el-select__caret {
        color: #fff;
      }

      .el-input__inner {
        padding-left: 0px;
        padding-right: 0px;
        border: none !important;
        background: none;
        color: #ffffff !important;
        text-align: center;
        font-family: Montserrat-Medium;
        line-height: 100%;
      }
    }
  }
}
</style>
