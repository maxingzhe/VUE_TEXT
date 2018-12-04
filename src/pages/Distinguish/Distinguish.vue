<template>
  <div class="warp">
    <header>
      <div class="header_content">
        <i class="iconfont icon-shouye2 go_back" @click="$router.replace('/home')"></i>
        <div class="logo">网易严选</div>
        <img src="../../common/images/search.png" alt="">
        <span class="iconfont icon-gouwuchekong"></span>
      </div>
    </header>
    <section class="mian">
      <banner_one/>
      <banner_two/>
      <Split/>
      <recommend/>
      <Split/>
      <dialog_box/>
      <Split/>
      <best/>
      <Split/>
      <yanxuan_Look/>
      <more/>
      <Split/>
    </section>
  </div>
</template>

<script>
  import best from './best/best.vue'
  import banner_one from './banner_one/banner_one.vue'
  import banner_two from './banner_two/banner_two.vue'
  import recommend from './recommend/recommend.vue'
  import dialog_box from './dialog_box/dialog_box.vue'
  import yanxuan_Look from './yanxuan_Look/yanxuan_Look.vue'
  import more from  './more/more.vue'
  export default {
    components:{
      banner_one,
      banner_two,
      recommend,
      dialog_box,
      best,
      yanxuan_Look,
      more
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .warp
    width 100%
    height 100%
    padding-bottom px2rem(98)
    header
      width 100%
      height px2rem(90)
      box-sizing border-box
      padding 0 px2rem(30)
      line-height px2rem(90)
      bottom-border-1px(grey)
      .header_content
        width 100%
        height 100%
        box-sizing border-box
        text-align: center
        overflow hidden
        position relative
        i
          font-size px2rem(55)
          float left
        .logo
          font-size px2rem(38)
          margin 0 auto
          margin-right 10%
        img
          position absolute
          top: px2rem(25)
          right: px2rem(80)
          width px2rem(46)
          height px2rem(46)
        .icon-gouwuchekong
          position absolute
          top: px2rem(5)
          right: 0
          font-size px2rem(55)
          color #898989
</style>
