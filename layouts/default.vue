<template>
  <keep-alive>
    <div class="flex" :style="{ backgroundColor: darkModeColor }">
      <sidebar />
      <Nuxt />
      <avatar />
    </div>
  </keep-alive>
</template>

<script>
import Avatar from '../components/Avatar/Avatar.vue'
import Sidebar from '../components/Sidebar/Sidebar.vue'
export default {
  components: { Sidebar, Avatar },
  computed: {
    darkModeColor() {
      return this.$store.getters['darkmode/getDarkModeColor']
    },
  },
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
</style>