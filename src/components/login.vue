<template>
  <div class="login_container">
    <div class="title">HMR-旅游后台管理</div>
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-mima" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "Zd102117",
      },
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到  个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    //点击重置按钮，重置登录表单
    resetLoginForm() {
      console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      let t = this;
      this.$refs.loginFormRef.validate(async (valid) => {
        console.log(valid);
        if (!valid) {
          t.$message.error("登录失败");
          return;
        } else {
          let params = {
            page: 1,
            limit: 10,
          };
          const res = await t.$axios.get("detail", {
            params: params,
          });
          if (res.status !== 200) {
            t.$message.error("登录失败");
          } else {
            t.$message.success("登录成功");
            //登录成功后，保存token，保存到客户端的sessionStorage中(网站关闭之后就会清楚)
            // window.sessionStorage.setItem("token", res.data.token);
            window.sessionStorage.setItem("token", 101216);
            //通过编程式导航跳转到后台首页，路由地址是/home
            setTimeout(() => {
              this.$router.push("/home");
            }, 1000);
          }
          console.log(res);
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
.login_container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2b4b6b;
  .title {
    position: absolute;
    top: 15%;
    font-size: 36px;
    color: #ffffff;
    font-weight: bold;
  }
  .login_box {
    position: relative;
    display: flex;
    justify-content: center;
    width: 450px;
    height: 300px;
    background: #fff;
    border-radius: 3px;
    .avatar_box {
      position: absolute;
      top: -80px;
      padding: 10px;
      width: 130px;
      height: 130px;
      border-radius: 100%;
      border: 1px solid #eee;
      box-shadow: 0 0 10px #ddd;
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .login_form {
      position: absolute;
      bottom: 0;
      padding: 0 30px;
      width: 100%;
      box-sizing: border-box;
      .btns {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>