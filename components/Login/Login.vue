<template>
  <div class="container-login-form" :style="{ backgroundColor: darkModeColor }">
    <div class="borderForm">
      <el-form class="login-form">

        <el-form-item label="Email">
          <el-input type="email" placeholder="Nhập email" v-model="email"></el-input>
        </el-form-item>

        <el-form-item label="Password">
          <el-input type="password" placeholder="Nhập mật khẩu" v-model="password" show-password></el-input>
        </el-form-item>

        <el-form-item>
          <nuxt-link to="/">
            <el-button type="primary" class="btn-login">Đăng nhập</el-button>
          </nuxt-link>
        </el-form-item>

      </el-form>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    darkModeColor() {
      return this.$store.getters['darkmode/getDarkModeColor']
    },
    isDarkMode() {
      return this.$store.getters['darkmode/getIsDarkMode']
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variable.scss';

.container-login-form {
  height: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.borderForm {
  border: 1px solid rgb(206, 196, 196);
  padding: 20px 50px;
}

.login-form {
  width: 230px;
  height: auto;
}

.btn-login {
  background: $green;
  border: none
}

.btn-login:hover {
  background: $green-hover;
}
</style>