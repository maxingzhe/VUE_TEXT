<template>
  <div class="warp">
    <div class="newArrival">
      <div class="sfit_head">
        <a href="javascript:;">
          <span class="left"></span>
          <span class="center">专题精选</span>
          <span class="right"></span>
        </a>
      </div>
      <div class="swiper-container" id="mazong3">
        <div class="swiper-wrapper newArrivalBottom">
          <div class="swiper-slide Binner" v-for="(item,index) in sfit" :key="index" >
            <img v-lazy="item.itemPicUrl" alt="" class="imgP">
            <div class="top">{{item.title}}</div>
            <div class="center">{{item.subtitle}}</div>
            <div class="bottom">￥{{item.priceInfo}}元起</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    mounted(){
      this.$store.dispatch('getSfit')
      new Swiper()
    },
    computed:{
      ...mapState(['sfit'])
    },
    watch:{
      sfit(){
        this.$nextTick(()=>{
          new Swiper('#mazong3',{
            slidesPerView:1.25,
            spaceBetween :15
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .newArrival
    width 100%
    height px2rem(500)
    .sfit_head
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
        color #333
    .newArrivalBottom
      width 100%
      height px2rem(450)
      display flex
      align-items: center
      .Binner
        width px2rem(280)
        height 100%
        background #fff
        .imgP
          width px2rem(579)
          height px2rem(322)
          border-radius px2rem(20)
        .top
          font-size px2rem(30)
          padding 0 px2rem(2)
          margin px2rem(10)
        .center
          font-size px2rem(28)
          color #ccc
          padding 0 px2rem(2)
          margin px2rem(10)
        .bottom
          font-size px2rem(28)
          color #ddd
          padding 0 px2rem(2)
          margin px2rem(10)
</style>

