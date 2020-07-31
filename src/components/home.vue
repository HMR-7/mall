<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../assets/logo.png" alt style="width: 50px;height: 50px;" />
        <span>HMR-旅游后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">登出</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 用户管理 -->
        <el-menu background-color="#393d49" text-color="#fff" active-text-color="#ffd04b">
          <!-- 一级菜单 -->
          <el-menu-item index="1" @click="current=1">
            <i class="el-icon-reading"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <!-- 日志管理 -->
          <el-menu-item index="2" @click="toArticle(allList)">
            <i class="el-icon-reading"></i>
            <span slot="title">日志管理</span>
          </el-menu-item>
          <!-- 景点管理 -->
          <el-menu-item index="3">
            <i class="el-icon-guide"></i>
            <span slot="title">景点管理</span>
          </el-menu-item>
          <!-- 酒店管理 -->
          <el-menu-item index="4">
            <i class="el-icon-office-building"></i>
            <span slot="title">酒店管理</span>
          </el-menu-item>
          <!-- 美食管理 -->
          <el-menu-item index="5">
            <i class="el-icon-eleme"></i>
            <span slot="title">美食管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <!-- 用户管理 -->
        <el-table v-if="current==1" :data="userList" style="width: 100%">
          <el-table-column prop="id" label="用户id"></el-table-column>
          <el-table-column prop="nickName" label="微信昵称"></el-table-column>
          <el-table-column prop="userPhone" label="手机号"></el-table-column>
          <el-table-column prop="isAdmin" label="管理员"></el-table-column>
          <el-table-column prop="openid" label="openid"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row,userList)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      allList: null,
      userList: [],
    };
  },
  mounted() {
    this.isAdmin();
  },
  methods: {
    async isAdmin() {
      let t = this;
      t.current = 1;
      let params = {
        isAdmin: 1,
      };
      const res = await t.$axios.get("isAdminCheck", { params: params });
      res.data[0].map((v) => {
        if (v.isAdmin == 0) {
          v.isAdmin = "普通成员";
        } else {
          v.isAdmin = "管理员";
        }
      });
      t.userList = res.data[0];
      t.allList = res.data;
      console.log(res);
      console.log(t.userList);
    },
    /* 删除按钮 */
    async handleDelete(index, row, Arr) {
      console.log(index, row);
      let t = this;
      let isAdmin = -1;
      if (row.isAdmin === "管理员") {
        isAdmin = 1;
      } else {
        isAdmin = 0;
      }
      let params = {
        isAdmin: isAdmin,
        userId: row.id,
      };
      let res = await t.$axios.post("toDelUserMegs", params);
      console.log(res);
      if (res.data.msg == "删除成功!!") {
        Arr.map((v, i, arr) => {
          if (v.id == row.id) {
            arr.splice(i, 1);
            return arr;
          }
        });
        t.$message.success(res.data.msg);
      } else {
        t.$message.warning(res.data.msg);
      }
    },
    /* 网站退出按钮 */
    logout() {
      window.sessionStorage.clear();
      this.$router.push("./login");
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 20px;
    background: #23262e;
    > div {
      display: flex;
      align-items: center;
      span {
        margin-left: 15px;
      }
    }
  }
  .el-aside {
    background: #393d49;
  }
  .el-main {
    background: #eaedf1;
  }
}
</style>