<template>
  <div class="cropper-content">
    <div class="cropper" style="text-align:center">
      <vue-cropper
        ref="cropper"
        :img="fileSrc"
        :outputSize="option.outputSize"
        :outputType="option.outputType"
        :full="option.full"
        :canMove="option.canMove"
        :canMoveBox="option.canMoveBox"
        :original="option.original"
        :autoCrop="option.autoCrop"
        :autoCropWidth="option.autoCropWidth"
        :autoCropHeight="option.autoCropHeight"
        :fixed="option.fixed"
        :fixedNumber="option.fixedNumber"
        :centerBox="option.centerBox"
        :infoTrue="option.infoTrue"
        :fixedBox="option.fixedBox"
      ></vue-cropper>
    </div>
  </div>
</template>

<style lang="scss">
// 截图
.cropper-content {
  .cropper {
    width: auto;
    height: 300px;
  }
}
</style>

<script>
import vueCropper from "vue-cropper";

export default {
  props: {
    fileSrc: {
      type: String,
      default: "",
    },
  },
  components: {
    vueCropper,
  },
  data() {
    return {
      dialogVisible: false,
      // cut base config
      option: {
        img: "", // cut image url
        outputSize: 0.8, // cut generate image quality
        outputType: "webp", // cut generate image format
        canScale: true, // image is not allow scroll zoom
        autoCrop: true, // is not show cut frame
        autoCropWidth: 138, // cut frame default width
        autoCropHeight: 138, // cut frame default height
        fixedBox: false, // is not set cut frame size,no change
        fixed: true, // is not open cut frame width height fixed scale
        fixedNumber: [1, 1], // cut frame width height fixed scale size
        full: false, // is not generate artwork master image
        canMoveBox: true, // cut frame is not drag move
        original: false, // 上传图片按照原始比例渲染
        centerBox: false, // 截图框是否被限制在图片里面
        infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
    };
  },
  methods: {
    // 上传按钮   限制图片大小
    changeUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$msg.error("上传文件大小不能超过 2MB!");
        return false;
      }
      this.fileinfo = file;

      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        this.option.img = file.url;
        this.dialogVisible = true;
      });
    },
    // 点击裁剪，这一步是可以拿到处理后的地址
    finish() {
      this.$refs.cropper.getCropData((data) => {
        this.$emit("finish", data);
      });
    },
  },
};
</script>
