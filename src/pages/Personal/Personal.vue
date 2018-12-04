<template>
  <div class="warp">
    <header>
      <div class="header_content">
        <i class="iconfont icon-shouye2 go_back" @click="$router.replace('/home')"></i>
        <div class="logo">网易严选</div>
        <img src="../../common/images/search.png" alt="" @click="$router.replace('/classify')">
        <span class="iconfont icon-gouwuchekong" @click="$router.replace('/shopcart')"></span>
      </div>
    </header>
    <section class="main">
      <div class="title">
        <img src="../../common/images/logo.png" alt="">
      </div>
      <div class="phone">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="email">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="other">
        <span>手机号快速注册></span>
      </div>
      <div class="footer">
        <span>
          <i class="iconfont icon-weixin"></i>
          微信
        </span>
        <span class="line">|</span>
        <span>
          <i class="iconfont icon-QQ"></i>
          QQ
        </span>
        <span class="line">|</span>
        <span>
          <i class="iconfont icon-weibo"></i>
          微博
        </span>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .warp
    width 100%
    height 100%
    overflow-x hidden
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
    .main
      width 100%
      height px2rem(1243)
      background #f4f4f4
      position relative
      .title
        width 100%
        height px2rem(480)
        img
          display inline-block
          width px2rem(250)
          height px2rem(84)
          margin px2rem(200) px2rem(260)
      .phone
        width px2rem(666)
        height px2rem(88)
        background $main
        margin 0 auto
        text-align: center
        line-height px2rem(88)
        color white
        box-sizing border-box
        margin-bottom px2rem(20)
        i
          font-size px2rem(35)
          margin-left px2rem(55)
        span
          font-size px2rem(23)
          display inline-block
          vertical-align middle
      .email
        width px2rem(666)
        height px2rem(88)
        border: 1px solid $main
        margin 0 auto
        text-align: center
        line-height px2rem(88)
        color white
        box-sizing border-box
        margin-bottom px2rem(20)
        i
          font-size px2rem(35)
          margin-left px2rem(55)
          color $main
        span
          font-size px2rem(23)
          display inline-block
          vertical-align middle
          color $main
      .other
        text-align: center
        span
          font-size px2rem(23)
      .footer
        position absolute
        bottom: 5%
        left 20%
        text-align: center
        span
          font-size px2rem(25)
          color #7d7d7d
          .iconfont
            font-size px2rem(30)
        .line
          margin 0 px2rem(40)
</style>
