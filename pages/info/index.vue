<template>
  <div class="container-info">
    <info/>
  </div>
</template>

<script>
import Info from '../../components/Info/Info.vue';
export default {
  components: { Info },
  head(){
    return{
      title: `Admin - Thông tin`
    }
  }
}
</script>

<style lang="scss" scoped>
.container-info {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
