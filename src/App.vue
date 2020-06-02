<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
    <!-- <img class="test-img" src="./assets/img/2.webp" width="100%" alt="" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
  mounted() {
    //   this.$axios
    //     .get(
    //       "https://medium.com/dsp-labs/who-pried-the-cake-of-data-storage-46e2639d673e",
    //       {},
    //       {
    //         Headers: {
    //           "user-agent": "curl/7.54.0",
    //           accept: "*/*",
    //           host: "medium.com",
    //           "content-type": "text/html",
    //           connection: "keep-alive",
    //         },
    //       }
    //     )
    //     .then((data) => {
    //       console.log(data);
    //     });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat-Medium;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .test-img {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
  }

  @media screen and (max-width: 1024px) {
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
      will-change: transform;
      transition: all 500ms;
      position: absolute;
    }
    .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
}
</style>
