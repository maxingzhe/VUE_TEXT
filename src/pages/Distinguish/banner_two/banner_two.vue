<template>
  <!--<div class="warp">-->
    <!--<a href="javascript:;">-->
      <!--<img src="" alt="">-->
      <!--<div class="shu">-->
        <!--<span>316篇文章</span>-->
      <!--</div>-->
      <!--<div class="bottom">-->
        <!--<span>严选推荐</span>-->
      <!--</div>-->
    <!--</a>-->
  <!--</div>-->
  <div class="swiper-container" id="mazong4">
    <div class="swiper-wrapper">
      <div class="swiper-slide warp" v-for="(item,index) in column" :key="index">
        <a href="javascript:;">
          <img :src="item.picUrl" alt="">
          <div class="shu">
            <span>{{item.articleCount}}</span>
          </div>
          <div class="bottom">
            <span>{{item.title}}</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  export default {
    computed:{
      ...mapState(['column'])
    },
    mounted(){
      this.$store.dispatch('getColumn')
    },
    watch:{
      column(){
        this.$nextTick(()=>{
          new Swiper('#mazong4',{
            slidesPerView:3.5,
            spaceBetween :20,
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .warp
    width 100%
    height px2rem(284)
    box-sizing border-box
    padding px2rem(30)
    a
      display block
      width px2rem(163)
      height px2rem(218.5)
      position relative
      img
        display inline-block
        width px2rem(163)
        height px2rem(163)
        border-radius px2rem(10)
        margin-bottom px2rem(20)
      .shu
        position absolute
        right 0
        top 0
        span
          display inline-block
          font-size px2rem(23)
          vertical-align top
          color white
          margin-top px2rem(8)
          margin-right px2rem(2)
      .bottom
        text-align: center
        width 100%
        height px2rem(35)
        span
          font-size px2rem(22)
          vertical-align top
          color #333
</style>
