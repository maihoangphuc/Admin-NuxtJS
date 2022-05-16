<template>
  <div class="container-home">
    <home />
  </div>
</template>

<script>
import Home from '../components/Home/Home.vue'
export default {
  components: { Home },
  layout: 'default',
  name: 'IndexPage',
  head(){
    return{
      title: `Admin - Trang chủ`
    }
  }
}
</script>


<style lang="scss" scoped>
  .container-home {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
