<template>
  <div>

    <!-- sidebar -->
    <el-menu :default-active="activeMenu" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      background-color="#25262b" text-color="#fff" class="h-[730px] xs:w-[200px] sm:w-[230px] lg:w-[280px]">
      <div class="flex flex-col justify-center w-[100%] h-[100%]">

        <!-- button collapse -->
        <el-radio-group v-model="isCollapse">
          <el-row class="button-right" v-if="isCollapse">
            <el-button :style="`${isDarkMode ? 'backgroundColor: #062C30' : 'backgroundColor: #fff'}`" @click="clickButtonRight" icon="el-icon-caret-right" circle></el-button>
          </el-row>
          <el-row class="button-left" v-else>
            <el-button :style="`${isDarkMode ? 'backgroundColor: #062C30' : 'backgroundColor: #fff'}`" @click="clickButtonLeft" icon="el-icon-caret-left" circle></el-button>
          </el-row>
        </el-radio-group>


        <!-- menu -->
        <nuxt-link to="/">
          <el-menu-item index="/">
            <i class="el-icon-s-home"></i>
            <span slot="title">{{ showTitle ? 'Trang chủ' : 'Trang chủ' }}</span>
          </el-menu-item>
        </nuxt-link>

        <!-- store -->
        <nuxt-link to="/store">

          <el-submenu index="/store">
            <!-- parent -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ showTitle ? 'Mua sắm' : '' }}</span>
            </template>


            <!-- child -->
            <el-submenu index="2-1">
              <span slot="title">Quần</span>
              <el-menu-item index="2-1-1">Quần 1</el-menu-item>
              <el-menu-item index="2-1-2">Quần 2</el-menu-item>
            </el-submenu>

            <!-- child -->
            <el-submenu index="2-2">
              <span slot="title">Áo</span>
              <el-menu-item index="2-2-1">Áo 1</el-menu-item>
              <el-menu-item index="2-2-2">Áo 2</el-menu-item>
            </el-submenu>
          </el-submenu>
        </nuxt-link>

        <!-- information -->
        <nuxt-link to="/info">
          <el-menu-item index="/info">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ showTitle ? 'Thông tin' : 'Thông tin' }}</span>
          </el-menu-item>
        </nuxt-link>

        <!-- setting -->
        <nuxt-link to="/setting">
          <el-menu-item index="/setting">
            <i class="el-icon-setting"></i>
            <span slot="title">{{ showTitle ? 'Cài đặt' : 'Cài đặt' }}</span>
          </el-menu-item>
        </nuxt-link>
      </div>


      <!-- end button collapse -->
    </el-menu>
    <!-- end sidebar -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: this.$route.path,
      isCollapse: true,
      showTitle: false,
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters['darkmode/getIsDarkMode']
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickButtonLeft() {
      this.isCollapse = true
      this.showTitle = false
    },
    clickButtonRight() {
      this.isCollapse = false
      this.showTitle = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/_variable.scss';

.is-active {
  color: $green;
}

.button-left,
.button-right {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 60px;
  transform: translateX(50%);
}

.is-circle:hover {
  color: $green;
  border-color: $green;
}
</style>
