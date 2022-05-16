<template>
  <div>
   <login/>
  </div>
</template>

<script>
import Login from '../../components/Login/Login.vue'
export default {
  components: { Login },
  layout: 'empty',
  head(){
    return{
      title: `Admin - Đăng nhập`
    }
  }
}
</script>

<style>

</style>