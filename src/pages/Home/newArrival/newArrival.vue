<template>
  <div class="warp">
    <div class="newArrival">
      <div class="newArrivalHead">
        <a href="javascript:;" class="inner">
          <span class="innerTop">新品发布</span>
          <div class="innerB">
            <span class="innerBsm">查看全部></span>
          </div>
        </a>
      </div>
      <div class="swiper-container" id="mazong1">
        <div class="swiper-wrapper newArrivalBottom">
          <div class="swiper-slide Binner" v-for="(item,index) in newArrival" :key="index" >
            <img v-lazy="item.scenePicUrl" alt="" class="imgP">
            <div class="top ellipsis">{{item.name}}</div>
            <div class="center ellipsis">{{item.simpleDesc}}</div>
            <div class="bottom">￥{{item.retailPrice}}</div>
          </div>
          <div class="swiper-slide Binner other">
            <span>查看全部</span>
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
      this.$store.dispatch('getNewArrival')
      new Swiper()
    },
    computed:{
      ...mapState(['newArrival'])
    },
    watch:{
      newArrival(){
        this.$nextTick(()=>{
          new Swiper('#mazong1',{
            slidesPerView:2.55,
            spaceBetween :20
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
    height px2rem(732)
    .newArrivalHead
      width 100%
      height px2rem(260)
      background #f1f7fd
      display flex
      justify-content: center
      align-items: center
      margin-bottom px2rem(25)
      .inner
        display inline-block
        width px2rem(334)
        height px2rem(126)
        background #f1f7fd
        text-align: center
        .innerTop
          display block
          font-size px2rem(38)
          color #8ba0b6
          font-weight normal
        .innerB
          width 60%
          height 50%
          background #d8e5f1
          margin-left 20%
          line-height 100%
          margin-top 5%
          .innerBsm
            font-size px2rem(30)
            color #8ba0b6
    .newArrivalBottom
      width 100%
      height px2rem(440)
      display flex
      align-items: center
      .Binner
        width px2rem(280)
        height 100%
        .imgP
          width px2rem(280)
          height px2rem(280)
          background #E7E9E8
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
          color #eee
          padding 0 px2rem(2)
          margin px2rem(10)
      .other
        box-sizing border-box
        width px2rem(280)
        height px2rem(280)
        border: px2rem(8) solid #E7E9E8
        margin-top px2rem(-160)
        text-align: center
        line-height px2rem(240)
        span
          font-size px2rem(30)
</style>
