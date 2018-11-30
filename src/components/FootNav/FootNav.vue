<template>
  <footer class="footer_nav border-1px">
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-shouye2"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/classify'}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/distinguish'}" @click="goto('/distinguish')">
      <span class="item_icon">
        <i class="iconfont icon-fangkuai"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/shopcart'}" @click="goto('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="foot_item" :class="{on:$route.path==='/personal'}" @click="goto('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-icon-"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 @import "../../common/stylus/mixins.styl"
 .footer_nav
  top-border-1px(gray)
  width 100%
  height px2rem(98)
  position fixed
  left 0
  right 0
  bottom 0
  background-color white
  display flex
  z-index 100
  box-sizing border-box
  .foot_item
    display flex
    flex 1
    flex-direction column
    text-align: center
    align-items: center
    &.on
      color $main
    span
      font-size px2rem(26)
      margin-top px2rem(10)
      margin-bottom px2rem(3)
      .iconfont
        font-size px2rem(40)
</style>
