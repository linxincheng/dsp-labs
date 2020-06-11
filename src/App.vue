<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
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
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
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
