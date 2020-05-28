<template>
  <div class="test">
    <Test :msg.sync="msg" @updates="update" />
    {{ 1000 | test }}
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "msg",
    };
  },
  components: {
    Test,
  },
  methods: {
    update(msg) {
      console.log("msg:", msg);
    },
  },
};
</script>
