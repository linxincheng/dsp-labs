<template>
  <div class="edit">
    <div class="whitebg" style="text-align:center; color:#fff" v-if="!door">
      <h2 style="margin-bottom:20px;">DSPLABS</h2>
      <el-form
        ref="form"
        class="public-form"
        max-width="400"
        :model="form"
        label-width="100px"
      >
        <el-form-item label="User Name" prop="userId">
          <el-input v-model="form.userId" show-password></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="login" style="margin-top:20px;">Enter</el-button>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "./../axios/http";
import api from "./../assets/config/api";
import "./../assets/tool/filter";

import {
  Pagination,
  Message,
  Loading,
  Input,
  Form,
  FormItem,
  Button,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Pagination);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

@Component
export default class Edit extends Vue {
  public door: boolean = false;

  public form: any = {
    userId: "",
    password: "",
  };

  public getCookie(cookie_name: string): any {
    let allcookies = document.cookie;
    //索引长度，开始索引的位置
    let cookie_pos = allcookies.indexOf(cookie_name);

    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
      // 把cookie_pos放在值的开始，只要给值加1即可
      //计算取cookie值得开始索引，加的1为“=”
      cookie_pos = cookie_pos + cookie_name.length + 1;
      //计算取cookie值得结束索引
      let cookie_end = allcookies.indexOf(";", cookie_pos);

      if (cookie_end == -1) {
        cookie_end = allcookies.length;
      }
      //得到想要的cookie的值
      let value = unescape(allcookies.substring(cookie_pos, cookie_end));
      return value;
    }
    return "123";
  }

  public mounted() {
    // let session_egg = localStorage.getItem("EGG_SESS");
    let toekn = sessionStorage.getItem("token");
    console.log(toekn);
    if (toekn) {
      this.door = true;
    } else {
      this.door = false;
    }
  }

  public login() {
    axios.post(api.login, this.form).then((res: any) => {
      //   console.log(res);
      if (res.error !== 0) {
        if (res.error === 100) {
          this.$message.error("username or password incorrect");
        } else {
          this.$message.error("login failed");
        }
      } else {
        sessionStorage.setItem("token", "true");
        this.door = true;
      }
    });
  }
}
</script>

<style lang="scss" scoped="this api replaced by slot-scope in 2.5.0+">
.edit {
  .whitebg {
    height: 100vh;
    background: linear-gradient(
      270deg,
      rgba(71, 128, 255, 0.8) 0%,
      rgba(155, 97, 247, 0.8) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input-password {
      display: block;
      width: 200px;
      border: none;
      border: solid 1px #ccc;
      text-align: center;
      border-radius: 5px;
      height: 40px;
      color: #333;
      font-size: 14px;
      margin: 0 auto;
    }

    .el-button {
      width: 100px;
    }
  }
}
</style>
