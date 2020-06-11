<template>
  <div class="publish">
    <el-form
      ref="form"
      class="public-form"
      max-width="400"
      :model="form"
      label-width="80px"
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
    <el-button @click="pulishNews" type="primary" v-if="!id">publish</el-button>
    <el-button @click="editNews" type="primary" v-else>update</el-button>
    <el-button @click="resetNews">reset</el-button>
    <el-button @click="back">back</el-button>
  </div>
</template>

<script>
import imageCut from "@/components/imageCut.vue";
import E from "wangeditor";
import axios from "./../axios/http";
import api from "./../assets/config/api";

export default {
  name: "Publish",
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
      editor: null,
      id: "",
      publishAt: 0,
      loadingObj: null,
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
        this.$message.error("image typemust be .gif,jpeg,jpg,png,bmp中的一种");
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
      const vm = this;
      let _desc = this.editor.txt.text();
      let params = Object.assign(this.form, {
        main: this.editor.txt.html(),
        main_desc: _desc.slice(0, 100),
      });
      this.loadingObj = this.$loading({
        target: ".publish",
        text: "Loading...",
        lock: true,
      });
      axios
        .post(api.create, params)
        .then((res) => {
          if (res.error === 0) {
            this.$message.success("publish news success!!!");
            this.resetNews();
          } else {
            this.$message.error("pulish failed!!!");
          }
        })
        .finally(() => {
          vm.loadingObj && vm.loadingObj.close();
        });
    },
    editNews() {
      const vm = this;
      let _desc = this.editor.txt.text();
      let params = Object.assign(this.form, {
        main: this.editor.txt.html(),
        main_desc: _desc.slice(0, 100),
        id: vm.id,
        publish_at: vm.publishAt,
      });
      this.loadingObj = this.$loading({
        target: ".publish",
        text: "Loading...",
        lock: true,
      });
      axios
        .post(api.update, params)
        .then((res) => {
          if (res.error === 0) {
            this.$message.success("update news success!!!");
            this.resetNews();
          } else {
            this.$message.error("edit failed!!!");
          }
        })
        .finally(() => {
          vm.loadingObj && vm.loadingObj.close();
        });
    },
    resetNews() {
      if (this.id) {
        axios.get(`${api.getInfoById}/${this.id}`).then((res) => {
          if (res.error === 0) {
            this.form = {
              title: res.result.title,
              banner: res.result.banner,
              auther: res.result.auther,
            };
            this.editor.txt.html(res.result.main);
            this.publishAt = res.result.publish_at;
          }
        });
      } else {
        this.form = {
          title: "",
          banner: "",
          auther: "",
        };
        this.editor.txt.clear();
      }
    },
    back() {
      this.$router.push({
        path: "/edit",
      });
    },
  },
  mounted() {
    this.editor = new E("#editor");
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create();
    this.id = this.$router.currentRoute.query.id;
    this.resetNews();
  },
};
</script>

<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.publish {
  padding: 20px;
  max-width: 1200px;

  .movie-pic {
    width: 260px;
    height: 150px;
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
