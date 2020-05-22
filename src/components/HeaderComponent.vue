<template>
  <div class="header">header</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeaderComponent extends Vue {
  created() {}
}
</script>
<style scope lang="scss">
.header {
  color: brown;
}
</style>
