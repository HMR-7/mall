<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录表单区域 -->
      <el-form label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-yonghu"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input prefix-icon="iconfont icon-mima"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang='less' scoped>
.login_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #2b4b6b;
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