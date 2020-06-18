<template>
  <div class="video-component">
    <video id="dsp-video" class="video-js vjs-16-9" controls>
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import videojs from "video.js";
import "video.js/dist/video-js.css";

@Component
export default class VideoComponent extends Vue {
  public mounted() {
    this.initPlay();
  }

  public initPlay(): void {
    if (window.player) {
      window.player.src(this.videoSrc);
      window.player.load(this.videoSrc);
      return;
    }
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

  @Watch("videoSrc")
  public videoSrcChange(): void {
    this.initPlay();
  }

  get videoSrc(): any {
    return this.$t("videoSrc");
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
