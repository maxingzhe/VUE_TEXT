<template>
  <div class="detailsWarp">
    <div class="detailwarp" v-for="(item,index) in cateList" :key="index">
      <div class="detail_head">
        <a href="javascript:;">
          <span class="left"></span>
          <span class="center">{{item.name}}</span>
          <span class="right"></span>
        </a>
      </div>
      <ul class="list">
        <li v-for="(a,b) in item.itemList" :key="b" v-if="b<7">
          <a href="javascript:;">
            <img v-lazy="a.primaryPicUrl" alt="">
            <div class="desc ellipsis">{{a.simpleDesc}}</div>
            <div class="name ellipsis">{{a.name}}</div>
            <div class="price">￥{{a.retailPrice}}</div>
          </a>
        </li>
        <div class="other">
          <span>更多好物</span>
          <i></i>
        </div>
      </ul>
      <Split/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['cateList'])
    },
    mounted(){
      this.$store.dispatch('getCateList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .detailsWarp
    width 100%
    .detailwarp
      width 100%
      height px2rem(2268)
      position relative
      .detail_head
        width 100%
        height px2rem(120)
        box-sizing border-box
        padding 0 px2rem(25)
        position relative
        span
          display block
          line-height px2rem(90)
          text-align center
        .left
          border-top 3px solid #333
          width px2rem(25)
          position absolute
          top px2rem(60)
          left px2rem(220)
        .right
          border-top 3px solid #333
          width px2rem(25)
          position absolute
          top px2rem(60)
          right px2rem(220)
        .center
          font-size px2rem(36)
          color #333
          position absolute
          top px2rem(14)
          left px2rem(340)
      .list
        width 100%
        height px2rem(2148)
        clearFix()
        li
          width px2rem(375)
          height px2rem(537)
          box-sizing border-box
          padding-left px2rem(16)
          padding-bottom px2rem(30)
          display inline-block
          float left
          img
            width px2rem(345)
            height px2rem(345)
            display: block
            background #F4F4F4
          .desc
            width px2rem(345)
            height px2rem(70)
            font-size px2rem(23)
            color #A6936C
            box-sizing border-box
            padding px2rem(20) 0
            padding-left px2rem(15)
            background #F1ECE2
            overflow hidden
          .name
            width px2rem(345)
            height px2rem(48)
            font-size px2rem(25)
            color #333
            margin-top px2rem(10)
            padding-left px2rem(15)
            box-sizing border-box
          .price
            width px2rem(345)
            height px2rem(32)
            font-size px2rem(32)
            color #aaa
      .other
        width px2rem(360)
        height px2rem(416)
        background #f4f4f4
        float left
        position relative
        span
          font-size px2rem(34)
          position absolute
          top 40%
          left 30%
        i
          display inline-block
          background-image url("../../../common/images/gsmove.png")
          background-repeat no-repeat
          width px2rem(67)
          height px2rem(67)
          position absolute
          top: 60%
          left: 39%
</style>
