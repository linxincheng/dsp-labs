<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {},
};
</script>
