<template>
  <div class="test">
    <h1 @click="setMsg">{{ msg }}</h1>
    <input v-model="test_data" />
    {{ test_data }}
    {{ test_computed }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue, Watch } from "vue-property-decorator";

interface inter {
  startDate?: string;
  endDate?: string;
  name?: string;
  thirdProductId?: string;
  thirdSku?: string;
  id?: string;
  categoryId?: string;
  siteId?: string;
}

@Component
export default class Test extends Vue {
  // prop
  @Prop() private msg!: string;

  // data
  public test_data: string = "";
  public interfaceDate: inter = {};

  // method
  setMsg(): void {
    console.log(2);
  }

  // watch
  @Watch("test_data")
  public onRouteChanged(): void {
    console.log("12345678");
    this.$emit("update:msg", this.test_data);
    this.$emit("updates", this.test_data);
  }

  // computed
  get test_computed(): string {
    return this.test_data + "---this is this compued";
  }

  // created
  public created(): void {
    console.log("this is life cycle created");
    console.log(this.interfaceDate);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
