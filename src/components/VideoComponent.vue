<template>
  <div class="video-component">
    <video id="dsp-video" class="video-js vjs-16-9" controls>
      <source :src="`${_static}/DSP_2.mp4`" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import videojs from "video.js";
import "video.js/dist/video-js.css";

@Component
export default class VideoComponent extends Vue {
  public mounted() {
    window.player = videojs(
      "dsp-video",
      {
        autoplay: false,
        controls: true,
      },
      function() {
        console.log("ready");
      }
    );
  }

  get _static(): string {
    return process.env.BASE_URL;
  }
}
</script>

<style lang="scss" scope>
div,
a,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
form,
fieldset,
form,
input,
p,
blockquote,
table,
th,
td,
embed {
  word-break: inherit;
}
</style>
