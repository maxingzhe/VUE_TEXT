<template>
  <div class="warp">
    <div class="shopCart">
      <span class="center">购物车</span>
      <span class="right">领卷</span>
    </div>
    <div class="content">
      <ul class="list">
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i class="iconfont icon-yuanquan"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="middle">
        <img src="../../common/images/cart.png" alt="">
        <div class="remind">去添加点什么吧</div>
        <div class="logo" @click="toLogin">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      toLogin(){
        this.$router.replace('/Personal')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .warp
    width 100%
    height 100%
    .shopCart
      width 100%
      height px2rem(88)
      box-sizing border-box
      padding 0 px2rem(25)
      position relative
      span
        display inline-block
        line-height px2rem(90)
      .right
        font-size px2rem(32)
        float right
        color $main
      .center
        font-size px2rem(36)
        margin-left px2rem(300)
    .content
      width 100%
      height px2rem(1150)
      background #f4f4f4
      box-sizing border-box
      .list
        width 100%
        height px2rem(70)
        box-sizing border-box
        padding 0 px2rem(30)
        display flex
        justify-content: space-between
        align-items: center
        li
          width px2rem(195)
          height px2rem(36)
          line-height px2rem(28)
          span
            font-size px2rem(23)
            display inline-block
            vertical-align middle
            color #666
          i
            font-size px2rem(10)
            vertical-align middle
            color #666
      .middle
        width 100%
        height px2rem(1080)
        box-sizing border-box
        padding px2rem(300) 0
        img
          display block
          margin 0 auto
        .remind
          font-size px2rem(25)
          margin-left px2rem(280)
          color #9d9d9d
          margin-bottom px2rem(50)
        .logo
          width px2rem(300)
          height px2rem(92)
          box-sizing border-box
          margin 0 auto
          background $main
          color white
          font-size px2rem(30)
          text-align: center
          line-height px2rem(92)
</style>
