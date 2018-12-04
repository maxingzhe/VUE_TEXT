<template>
  <div class="warp">
    <div class="newArrival">
      <div class="newArrivalHead">
        <a href="javascript:;" class="inner">
          <span class="innerTop">人气推荐.好物精选</span>
          <div class="innerB">
            <span class="innerBsm">查看全部></span>
          </div>
        </a>
      </div>
      <div class="swiper-container" id="mazong2">
        <div class="swiper-wrapper newArrivalBottom">
          <div class="swiper-slide Binner" v-for="(item,index) in popularity" :key="index" >
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
      this.$store.dispatch('getPopularity')
      new Swiper()
    },
    computed:{
      ...mapState(['popularity'])
    },
    watch:{
      popularity(){
        this.$nextTick(()=>{
          new Swiper('#mazong2',{
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
      background #FEF7E3
      display flex
      justify-content: center
      align-items: center
      margin-bottom px2rem(25)
      .inner
        display inline-block
        width px2rem(334)
        height px2rem(126)
        background #FEF7E3
        text-align: center
        .innerTop
          display block
          font-size px2rem(38)
          color #B7A37C
          font-weight normal
        .innerB
          width 60%
          height 50%
          background #F4E9CB
          margin-left 20%
          margin-top 5%
          line-height 100%
          .innerBsm
            font-size px2rem(30)
            color #B7A37C
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
