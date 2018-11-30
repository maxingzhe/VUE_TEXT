<template>
  <div class="warp">
    <div class="header-warp">
      <!--头部-->
      <header class="header-content">
        <a href="javascript:;" class="logo"></a>
        <div class="search">
          <i class="icon"></i>
          <span class="placeholder">搜索商品，共19712款好物</span>
        </div>
        <div class="loginBtn">
          登录
        </div>
      </header>
      <!--滑动导航-->
      <nav-list/>
    </div>
    <!--轮播图-->
    <banner/>
    <!--退款退货-->
    <div class="newUser">
      <ul class="newUserWarp">
        <li>
          <a href="javascript:;">
            <i></i>
            <span>网易自营品牌</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>30天无忧退货</span>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <i></i>
            <span>48小时快速退款</span>
          </a>
        </li>
      </ul>
    </div>
    <!--分割线-->
    <Split/>
    <div class="newPerson">
      <span class="left"></span>
      <span class="center">新人专享礼</span>
      <span class="right"></span>
    </div>
    <div class="newPersonDatail">
      <a href="javascript:;" class="left">
        <span class="newtop">新人专享礼包</span>
        <div class="imgwarp">
          <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
        </div>
      </a>
      <div class="right">
        <a href="javascript:;">
          <div class="top">
            <span class="one">福利社</span>
            <span class="two">今日特价</span>
            <img class="imga" src="http://yanxuan.nosdn.127.net/21d9f858fe4b1e2d37ce09c1c399a6b2.png" alt="">
          </div>
        </a>
        <div class="bottom">
          <span class="three">新人拼团</span>
          <span class="four">1元起包邮</span>
          <img class="imgb" src="http://yanxuan.nosdn.127.net/1a3caca777017b5c595e6a9587a5cfc1.png" alt="">
        </div>
      </div>
    </div>
    <Split/>
    <!--品牌直供-->
    <div class="brand">
      <div class="other_header">
        <a href="javascript:;">
          <span class="one">品牌制造商直供</span>
        </a>
        <a href="javascript:;">
          <span class="two">更多></span>
        </a>
      </div>
      <ul class="brand_pinpai">
        <a href="javascript:;">
          <div class="one">
            <span class="a">海外制造商</span>
            <span class="b">9.9元起</span>
            <span class="c">上新</span>
          </div>
          <span></span>
        </a>
        <a href="javascript:;">
          <div class="two">
            <span class="a">ck制造商</span>
            <span class="b">25元起</span>
          </div>
        </a>
        <a href="javascript:;">
          <div class="three">
            <span class="a">新秀丽制造商</span>
            <span class="b">34.9元起</span>
          </div>
        </a>
        <a href="javascript:;">
          <div class="four">
            <span class="a">MUJI制造商</span>
            <span class="b">35元起</span>
          </div>
        </a>
      </ul>
    </div>
    <Split/>
  </div>
</template>

<script>
  import navList from './navList/navList.vue'
  import banner from './Banner/Banner.vue'
  export default {
    components:{
      navList,
      banner
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .warp
    width 100%
    padding-bottom px2rem(98)
    .header-warp
      position fixed
      z-index 3
      width 100%
      height px2rem(148)
      .header-content
        position relative
        z-index 2
        display flex
        flex-flow row nowrap
        -webkit-box-align center
        align-items center
        background #fff
        padding px2rem(20) px2rem(30)
        box-sizing border-box
        height px2rem(88)
        .logo
          width px2rem(138)
          height px2rem(40)
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
          display inline-block
          margin-right px2rem(20)
          background-size cover
          background-position center
        .search
          display flex
          flex-flow row nowrap
          -webkit-box-align center
          align-items center
          -webkit-box-pack center
          justify-content center
          width px2rem(442)
          height px2rem(56)
          font-size px2rem(25)
          background-color #ededed
          border-radius px2rem(10)
          .icon
            display inline-block
            vertical-align middle
            width px2rem(28)
            height px2rem(28)
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
            background-repeat no-repeat
            background-size 100% 100%
            margin-right px2rem(5)
          .placeholder
            color #666
        .loginBtn
          width px2rem(74)
          height px2rem(40)
          line-height px2rem(40)
          text-align center
          color $main
          border: 1px solid $main
          font-size px2rem(25)
          border-radius px2rem(10)
          margin-left px2rem(20)
    .newUser
      width 100%
      height px2rem(72)
      margin-top px2rem(-10)
      .newUserWarp
        width 100%
        height 100%
        padding 0 px2rem(25)
        box-sizing border-box
        display flex
        align-items:center
        zoom 1
        li
          -webkit-box-flex 1
          flex 1
          float left
          i
            background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
            display inline-block
            vertical-align middle
            background-repeat no-repeat
            background-size 100% 100%
            width px2rem(30)
            height px2rem(30)
          span
            font-size px2rem(25)
            display inline-block
            line-height px2rem(32)
            color #333
    .newPerson
      width 100%
      height px2rem(90)
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
        top px2rem(45)
        left px2rem(220)
      .right
        border-top 3px solid #333
        width px2rem(25)
        position absolute
        top px2rem(45)
        right px2rem(220)
      .center
        font-size px2rem(36)
    .newPersonDatail
      width 100%
      height px2rem(438)
      padding 0 px2rem(30) px2rem(28)
      box-sizing border-box
      .left
        display inline-block
        float left
        width px2rem(343)
        height 100%
        background #F9E9CF
        box-sizing border-box
        .newtop
          font-size px2rem(32)
          color #333
          display block
          padding-top px2rem(40)
          padding-left px2rem(30)
        .imgwarp
          box-sizing border-box
          img
            width px2rem(220)
            height px2rem(215)
            margin px2rem(60)
      .right
        width px2rem(342)
        height 100%
        float right
        .top
          width 100%
          height 49%
          background #FBE2D3
          position relative
          .one
            font-size px2rem(34)
            color #333
            margin-left px2rem(20)
            position absolute
            top px2rem(15)
            left 0
          .two
            position absolute
            top px2rem(55)
            left px2rem(23)
            font-size px2rem(24)
            color #7e8c8d
          .imga
            width px2rem(200)
            height px2rem(200)
            float right
        .bottom
          width 100%
          height 50%
          background #F9E9CF
          margin-top px2rem(5)
          position relative
          .three
            position absolute
            top px2rem(15)
            left px2rem(23)
            font-size px2rem(34)
          .four
            position absolute
            top px2rem(55)
            left px2rem(35)
            font-size px2rem(24)
            color white
            background #CBB693
            opacity 0.9
            font-weight bold
          .imgb
            width px2rem(200)
            height px2rem(200)
            float right
    .brand
      width 100%
      height px2rem(682)
      /*box-sizing border-box*/
      .other_header
        width 100%
        height px2rem(100)
        background white
        .one,.two
          font-size px2rem(32)
          line-height px2rem(100)
          display block
          padding 0 px2rem(30)
          color #333
        .one
          float left
        .two
          float right
      .brand_pinpai
        width 100%
        height px2rem(540)
        box-sizing border-box
        padding 0 px2rem(30)
        margin-bottom px2rem(40)
        display flex
        flex-wrap wrap
        .one,.two,.three,.four
          width px2rem(341)
          height px2rem(265)
          justify-content: center
          align-items: center
          color #333
          margin px2rem(0.7)
        .one
          position relative
          background-image url(http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1)
          .a
            font-size px2rem(30)
            position absolute
            top px2rem(20)
            left px2rem(100)
          .b
            font-size px2rem(25)
            color #7e8c8d
            position absolute
            top px2rem(60)
            left px2rem(90)
          .c
            font-size px2rem(25)
            width px2rem(50)
            color white
            background #CBB693
            position absolute
            top px2rem(60)
            left px2rem(200)
            opacity 0.9
        .two
          background-image:url(http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1)
          position relative
          .a
            font-size px2rem(30)
            position absolute
            top px2rem(20)
            left px2rem(100)
          .b
            font-size px2rem(25)
            color #7e8c8d
            position absolute
            top px2rem(60)
            left px2rem(120)
        .three
          background-image:url(http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1)
          position relative
          .a
            font-size px2rem(30)
            position absolute
            top px2rem(20)
            left px2rem(100)
          .b
            font-size px2rem(25)
            color #7e8c8d
            position absolute
            top px2rem(60)
            left px2rem(140)
        .four
          background-image:url(http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1)
          position relative
          .a
            font-size px2rem(30)
            position absolute
            top px2rem(20)
            left px2rem(100)
          .b
            font-size px2rem(25)
            color #7e8c8d
            position absolute
            top px2rem(60)
            left px2rem(140)
</style>
