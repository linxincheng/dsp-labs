<template>
  <div class="nav">
    <img
      src="../assets/img/home_bailogo.svg"
      width="140px"
      class="home-bailog"
      @click="goHome"
      title="go home page"
      alt="dsp logo"
    />

    <nav class="flex between white">
      <router-link to="/" title="HOME">HOME</router-link>
      <router-link to="/" title="DSP LABS">DSP LABS</router-link>
      <!-- <router-link to="/ipfsex" title="IPFSEX">IPFSEX</router-link>
      <router-link to="/ethfx" title="ETHFX">ETHFX</router-link> -->
      <router-link to="/news" title="NEWS">NEWS</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NavComponent extends Vue {
  public goHome(): void {
    this.$router.push({
      path: "/",
    });
  }
}
</script>
<style lang="scss" scoped>
.home-bailog {
  position: absolute;
  top: 2.8vw;
  left: 9.3%;
  cursor: pointer;
  user-select: none;
}

nav {
  position: absolute;
  top: 2.3vw;
  right: 9.8%;
  width: 19.4%;
  min-width: 250px;
  font-size: 16px;
  z-index: 9;
  user-select: none;

  a {
    transition: all 0.1s ease;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 1;
    }
  }
}
</style>
