<template>
  <div id="app">
    <router-view />
    <!-- <img class="test-img" src="./assets/img/1.webp" width="100%" alt="" /> -->
  </div>
</template>

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
}
</style>
