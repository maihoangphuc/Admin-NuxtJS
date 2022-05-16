<template>
  <div class="container-store">
    <store/>
  </div>
</template>

<script>
import Store from '../../components/Store/Store.vue'
export default {
  components: { Store },
  head(){
    return{
      title: `Admin - Mua sắm`
    }
  }
}
</script>

<style lang="scss" scoped>
.container-store {
  width: 100%;
  height: 730px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
