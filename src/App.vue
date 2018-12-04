<template>
  <div id="app">
    <router-view/>
    <FootNav v-show="this.$route.meta.showFoot"/>
  </div>
</template>

<script>
  import FootNav from './components/FootNav/FootNav.vue'
  export default {
    components:{
      FootNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
