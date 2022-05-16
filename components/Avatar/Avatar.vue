<template>
  <div>
    <el-row class="block-col-1">
      <el-col>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <div class="container-avatar">
              <div class="avatar">
                <el-avatar src="https://cliply.co/wp-content/uploads/2020/08/442008112_GLANCING_AVATAR_3D_400.png">
                </el-avatar>
              </div>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown"
            :style="`${isDarkMode ? 'backgroundColor: #25262b' : 'backgroundColor: #fff'}`">
            <el-dropdown-item v-if="darkMode" icon="el-icon-sunny" @click.native="clickDarkMode('light')">Chế độ sáng
            </el-dropdown-item>
            <el-dropdown-item v-else icon="el-icon-moon" @click.native="clickDarkMode('dark')">Chế độ tối
            </el-dropdown-item>
            <nuxt-link to="/login">
              <el-dropdown-item icon="el-icon-caret-top">Đăng xuất</el-dropdown-item>
            </nuxt-link>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters['darkmode/getIsDarkMode']
    },
  },
  methods: {
    clickDarkMode(payload) {
      if (payload === 'dark') {
        this.darkMode = true
        this.$store.dispatch('darkmode/setDarkModeColor', '#191919')
        this.$store.dispatch('darkmode/setIsDarkMode', this.darkMode)
      }
      else if (payload === 'light') {
        this.darkMode = false
        this.$store.dispatch('darkmode/setDarkModeColor', '#fff')
        this.$store.dispatch('darkmode/setIsDarkMode', this.darkMode)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variable.scss';
.avatar {
  cursor: pointer;
}

.container-avatar {
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-right: 25px;
}

.el-dropdown-menu {
  margin-right: 25px;
}

.el-dropdown-menu__item:not(.is-disabled):hover{
  background: transparent;
  color: $green;
}
</style>
