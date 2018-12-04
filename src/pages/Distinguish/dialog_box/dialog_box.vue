<template>
<div>
  <!--<div class="warp" v-for="(item,index) in tenfifteen" :key="index">-->
    <!--<div class="header">-->
      <!--<span>十点一刻</span>-->
    <!--</div>-->
    <!--<a href="javascript:;" class="box">-->
      <!--<div class="top">-->
        <!--<span>- 今日话题 -</span>-->
      <!--</div>-->
      <!--<div class="center">-->
        <!--<div class="one">{{item.title}}</div>-->
        <!--<div class="two">{{item.desc}}</div>-->
      <!--</div>-->
      <!--<div class="bottom">-->
        <!--<div>{{item.participantNum}}人参与话题</div>-->
      <!--</div>-->
    <!--</a>-->
  <!--</div>-->
  <div class="header">
    <span>十点一刻</span>
  </div>
  <div class="swiper-container" id="mazong5">
    <div class="swiper-wrapper">
      <div class="swiper-slide warp" v-for="(item,index) in tenfifteen" :key="index">
        <div class="mian">
          <a href="javascript:;" class="box">
            <div class="top">
              <span>- 今日话题 -</span>
            </div>
            <div class="center">
              <div class="one">{{item.title}}</div>
              <div class="two">{{item.desc}}</div>
            </div>
            <div class="bottom">
              <div>{{item.participantNum}}人参与话题</div>
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-slide warp">
        <div class="box">
          <span class="aaa">查看更多话题 > </span>
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
    computed:{
      ...mapState(['tenfifteen'])
    },
    mounted(){
      this.$store.dispatch('getTenfifteen')
    },
    watch:{
      tenfifteen(){
        this.$nextTick(()=>{
          new Swiper('#mazong5',{
            slidesPerView:1,
            spaceBetween :30
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../../common/stylus/mixins.styl'

  .warp
    width 100%
    padding 0 px2rem(30)
    box-sizing border-box
    text-align: center
    .header
      width 100%
      height px2rem(120)
      text-align: center
      line-height px2rem(120)
      span
        font-size px2rem(30)
    .box
      width px2rem(632)
      height px2rem(412)
      background url("../../../common/images/qipao.png")
      background-repeat no-repeat
      background-size 100% 100%
      margin-bottom px2rem(20)
      display inline-block
      box-sizing border-box
      padding px2rem(40) px2rem(30) px2rem(100)
      .aaa
        display inline-block
        margin-top 20%
        color #333
      .top
        width 100%
        height px2rem(30)
        text-align: center
        line-height px2rem(30)
        span
          width px2rem(30)
          height px2rem(30)
          font-size px2rem(22)
          color #7f7f7f
          vertical-align top
      .center
        text-align: center
        .one
          font-size px2rem(35)
          font-weight bold
          margin-top px2rem(40)
          color: #000;
        .two
          font-size px2rem(22)
          margin-top px2rem(20)
          color: #000;
      .bottom
        text-align: center
        div
          font-size px2rem(20)
          color #000
          margin-top px2rem(80)
</style>
