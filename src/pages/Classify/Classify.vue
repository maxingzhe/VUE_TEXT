<template>
  <div class="warp">
    <!--头部-->
    <header class="header_warp">
      <a href="javascript:;" class="header_content">
        <div class="search">
          <i class="icon"></i>
          <span class="placeholder">搜索商品，共19712款好物</span>
        </div>
      </a>
    </header>
    <section class="main">
      <div class="listMenu">
        <div class="inner">
          <ul class="list">
            <li class="" v-for="(item,index) in categoryL1List" :key="index" @click="tap(index)" :class="{active:currentIndex===index}">
              <a href="javascript:;">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="listDetail">
        <div class="warp" v-if="ListMenu">
          <img class="images" :src="ListMenu.wapBannerUrl" alt="">
          <div class="listDetail_head">
            <a href="javascript:;">
              <span class="left"></span>
              <span class="center">{{ListMenu.name}}</span>
              <span class="right"></span>
            </a>
          </div>
          <ul class="inner">
            <li v-for="(item,index) in ListMenu.subCateList" :key="index">
              <img class="tu" v-lazy="item.wapBannerUrl" alt="">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getCategoryL1List')
      setTimeout(()=>{
        new BScroll('.listMenu',{
          click:true
        })
      },100)
      setTimeout(()=>{
        new BScroll('.listDetail',{
          click:true
        })
      },100)
    },
    computed:{
      ...mapState(['categoryL1List','currentIndex']),
      ListMenu(){
        return this.categoryL1List[this.currentIndex]
      }//categoryL1List[0]
    },
    methods:{
      tap(index){
        this.$store.dispatch('getCurrentIndex',index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .warp
    width 100%
    .header_warp
      width 100%
      height px2rem(88)
      box-sizing border-box
      position fixed
      z-index 20
      background #fff
      .header_content
        width 100%
        height px2rem(88)
        display flex
        justify-content: center
        align-items: center
        padding 0 px2rem(25)
        box-sizing border-box
        bottom-border-1px(gray)
        .search
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          width 100%
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
            margin-right px2rem(20)
          .placeholder
            color #666
    .main
      width 100%
      padding-top px2rem(88)
      box-sizing border-box
      position relative
      .listMenu
        position absolute
        top px2rem(88)
        left 0
        width px2rem(163)
        height px2rem(1150)
        box-sizing border-box
        border-right 1px solid gray
        .inner
          width 100%
          padding-top px2rem(20)
          .list
            width 100%
            box-sizing border-box
            li
              width 100%
              height px2rem(76)
              margin-top px2rem(20)
              font-size px2rem(30)
              text-align: center
              line-height px2rem(76)
              a
                color #000
              &.active
                font-size px2rem(38)
                a
                  color #000
                  font-weight bold
      .listDetail
        margin-left px2rem(162)
        width px2rem(588)
        height px2rem(1170)
        box-sizing border-box
        overflow hidden
        .warp
          width 100%
          padding px2rem(30) px2rem(30)
          box-sizing border-box
          .images
            display block
            width px2rem(528)
            height px2rem(192)
          .listDetail_head
            width 100%
            height px2rem(108)
            box-sizing border-box
            display flex
            flex-wrap nowrap
            justify-content: space-around
            align-items: center
            span
              display inline-block
              line-height px2rem(90)
              text-align center
              color black
            .left
              border-top 3px solid black
              width px2rem(25)
              margin-bottom px2rem(8)
            .right
              border-top 3px solid black
              width px2rem(25)
              margin-bottom px2rem(8)
            .center
              font-size px2rem(25)
              color black
          .inner
            width 100%
            box-sizing border-box
            clearFix()
            li
              text-align: center
              width px2rem(144)
              height px2rem(216)
              margin-right px2rem(30)
              float left
              .tu
                width px2rem(144)
                height px2rem(144)
                display flex
              span
                font-size px2rem(24)
</style>
