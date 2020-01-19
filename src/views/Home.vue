<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    console.log(this.$store.state)
  }
}
</script>
<style lang="scss">
.img {
  width: 100px;
}
</style>
