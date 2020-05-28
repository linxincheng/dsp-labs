<template>
  <div class="bg-header-right"></div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ClassName extends Vue {}
</script>
<style lang="scss" scoped>
.bg-header-right {
  width: 60%;
  height: 14vw;
  background: white;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 1000px;
}
</style>
