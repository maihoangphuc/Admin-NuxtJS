<template>
  <div class="container-setting">
    <setting/>
  </div>
</template>

<script>
import Setting from '../../components/Setting/Setting.vue'
export default {
  components: { Setting },
  head(){
    return{
      title: `Admin - Cài đặt`
    }
  }

}
</script>

<style lang="scss" scoped>
.container-setting {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
