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

@Component
export default class VideoComponent extends Vue {
  public mounted() {
    console.log(123123);
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

<style lang="scss" scoped></style>
