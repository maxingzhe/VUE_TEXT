<template>
  <div class="more_warp">
    <div class="more_header">
      <span class="left"></span>
      <span>更多精彩</span>
      <span class="right"></span>
    </div>
    <div class="more_cotent" v-for="(item,index) in yxWeek">
      <img :src="item.itemPicUrl" alt="">
      <div class="text">
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['yxWeek'])
    },
    mounted(){
      this.$store.dispatch('getYxWeek')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
  .more_warp
    width 100%
    background #f4f4f4
    padding 0 px2rem(30)
    box-sizing border-box
    .more_header
      margin-top px2rem(30)
      width 100%
      height px2rem(140)
      text-align: center
      line-height px2rem(140)
      span
        font-size px2rem(26)
      .left,.right
        display inline-block
        height 1px
        width px2rem(264)
        background #d9d9d9
        vertical-align middle
    .more_cotent
      width px2rem(690)
      height px2rem(500)
      box-sizing border-box
      padding px2rem(25)
      background white
      margin-bottom px2rem(30)
      img
        width px2rem(642)
        height px2rem(360)
        display flex
      .text
        width px2rem(642)
        height px2rem(89)
        padding px2rem(28) 0
        box-sizing border-box
        span
          font-size px2rem(24)
          vertical-align top
          color #999
    .more_cotent:last-child
      margin-bottom 0
</style>
