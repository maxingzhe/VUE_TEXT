<template>
  <div class="yanxuan_Look">
    <h3 class="title">严选Look</h3>
    <a href="javascript:;" class="tu">
      <img :src="yxLook.picUrl" alt="">
    </a>
    <div class="user">
      <img :src="yxLook.avatar" alt="" class="avatar">
      <span class="username">{{yxLook.nickname}}</span>
    </div>
    <div class="content">{{yxLook.content}}</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['yxLook'])
    },
    mounted(){
      this.$store.dispatch('getYxLook')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
.yanxuan_Look
  width 100%
  height px2rem(1124)
  .title
    width 100%
    height px2rem(120)
    font-size px2rem(36)
    text-align: center
    line-height px2rem(120)
  .tu
    display: block
    width px2rem(750)
    height px2rem(750)
    img
      display block
      width px2rem(750)
      height px2rem(750)
  .user
    width 100%
    height px2rem(88)
    box-sizing border-box
    padding px2rem(20)
    overflow hidden
    .avatar
      width px2rem(46)
      height px2rem(46)
      display inline-block
      border-radius 50%
      float left
      padding-right px2rem(15)
    .username
      font-size px2rem(30)
      display block
      float left
      padding-top px2rem(10)
  .content
    display block
    box-sizing border-box
    margin 0 px2rem(10)
    padding px2rem(10)
    font-size px2rem(25)
    color #7e8c8d
    line-height px2rem(35)
</style>
