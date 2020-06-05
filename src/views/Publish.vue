<template>
  <div class="publish">
    <el-form
      ref="form"
      class="public-form"
      max-width="400"
      :model="form"
      label-width="120px"
    >
      <el-form-item label="Title" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="Auther" prop="auther">
        <el-input v-model="form.auther"></el-input>
      </el-form-item>
      <el-form-item label="Banner" prop="banner">
        <div class="movie-pic">
          <label class="uploadsLabel" for="uploads">
            <img
              width="100%"
              height="100%"
              v-if="form.banner"
              :src="form.banner"
            />
            <div class="flex ai-center jc-center" v-else>
              +
              <!-- <i class="iconfont icon-tianjia"></i> -->
            </div>
          </label>
        </div>
        <input
          type="file"
          id="uploads"
          accept="image/png, image/jpeg, image/jpg"
          @change="uploadImg($event)"
        />
      </el-form-item>
      <el-form-item label="Content">
        <div class="public-editor" id="editor"></div>
      </el-form-item>
    </el-form>
    <el-button @click="pulishNews">confirm</el-button>
    <el-button>reset</el-button>
  </div>
</template>

<script>
import imageCut from "@/components/imageCut.vue";
import E from "wangeditor";
import axios from "./../axios/http";
import api from "./../assets/config/api";

export default {
  components: {
    imageCut,
  },
  props: {
    // Upload or Edit
    type: {
      type: String,
      default: "Upload",
    },
  },
  data() {
    return {
      form: {
        title: "",
        banner: "",
        auther: "",
      },
      dialogVisible: false,
      fileSrc: "",
      editor: null,
    };
  },
  methods: {
    //upload image
    uploadImg(e) {
      const vm = this;
      if (!e.target.value) return;
      // this.option.img
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        console.dir(this);
        this.$msg.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data = e.target.result;
        vm.form.banner = data;
        console.log(data);
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // this.dialogVisible = true;
      e.target.value = "";
    },
    pulishNews() {
      let _desc = this.editor.txt.text();
      console.log(_desc);
      let params = Object.assign(this.form, {
        main: this.editor.txt.html(),
        main_desc: _desc.slice(0, 100),
      });
      console.log(params);
      axios.post(api.create, params).then((data) => {
        console.log(data);
      });
    },
  },
  mounted() {
    this.editor = new E("#editor");
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create();
  },
};
</script>
<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.publish {
  .movie-pic {
    width: 138px;
    height: 138px;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #a6a6a6;
    font-size: 62px;
    color: #d8d8d8;
    font-weight: bolder;
    overflow: hidden;
  }

  .uploadsLabel {
    & > div {
      width: 100%;
      height: 100%;
    }
  }

  .public-editor {
    width: 100%;
    height: 500px;
  }
}
</style>
