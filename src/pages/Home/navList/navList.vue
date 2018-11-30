<template>
  <div class="navWarp">
    <div class="navListWarp">
      <header>
        <div class="inner">
          <ul class="ul">
            <li v-for="(item,index) in navList" :key="index" @click="tap(index)" :class="{active:currentIndex===index}">
              <span class="txt">
                <a href="javascript:;">
                <span :class="{on:currentIndex===index}">{{item}}</span>
              </a>
              </span>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <div class="lineWarp">
      <div class="liner"></div>
      <div class="toggle">
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        navList:['推荐','居家','鞋包配饰','服饰','电器','洗护','饮食','餐厨','婴童','文体','特色区'],
        currentIndex:0}
    },
    methods:{
      tap(index){
        this.currentIndex = index
      }
    },
    mounted(){
      new BScroll('.inner',{
        scrollX:true,
        click:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .navWarp
    position relative
    z-index 2
    background #fff
    .navListWarp
      padding-right px2rem(62)
      width 100%
      header
        display flex
        flex-flow row nowrap
        background-color #fff
        position relative
        .inner
          position relative
          height 100%
          width 100%
          overflow hidden
          display flex
          flex-flow row nowrap
          ul
            display flex
            flex-flow row nowrap
            flex-shrink 0
            padding-left px2rem(30)
            padding-right px2rem(150)
            background-color #fff
            li
              margin-left px2rem(30)
              display flex
              flex-flow row nowrap
              -webkit-box-align center
              align-items center
              justify-content center
              text-align center
              -webkit-box-pack center
              z-index 1
              &.active
                border-bottom: 4px solid $main
              .txt
                position relative
                display inline-block
                padding 0 px2rem(10)
                line-height px2rem(60)
                font-size px2rem(30)
                text-align center
                span
                  color #333
                  &.on
                    color $main
              &:first-of-type
                margin-left 0
    .lineWarp
      display flex
      -webkit-box-flex 0
      flex-grow 0
      -webkit-box-align center
      align-items center
      -webkit-box-pack center
      justify-content center
      position absolute
      top 0
      right 0
      .liner
        width px2rem(10)
        height px2rem(60)
        background-image: linear-gradient(to right,rgba(255,255,255,0) 0,#fff 100%)
      .toggle
        width px2rem(60)
        height px2rem(60)
        text-align: center
        background #fff
        padding-left px2rem(50)
        padding-right px2rem(30)
        .icon
          margin-top px2rem(9)
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
          background-repeat no-repeat
          background-size 100% 100%
          width px2rem(35)
          height px2rem(35)
          transition: transform .5s
          -webkit-transform .5s
</style>
