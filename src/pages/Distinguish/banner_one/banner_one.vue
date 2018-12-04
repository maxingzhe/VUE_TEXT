<template>
  <div class="swiper-container" id="mazong3">
    <div class="swiper-wrapper">
      <div class="swiper-slide banner" v-for="(item,index) in banner" :key="index">
        <a href="javascript:;">
          <img :src="item.picUrl" alt="">
          <div class="content">
            <span class="title">{{item.subTitle}}</span>
            <div class="center">{{item.title}}</div>
            <div class="bottom">{{item.desc}}</div>
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
      ...mapState(['banner'])
    },
    mounted(){
      this.$store.dispatch('getBanner')
    },
    watch:{
      banner(){
        this.$nextTick(()=>{
          new Swiper('#mazong3',{
            loop:true,
            autoplay:true,
            slidesPerView:1.15,
            spaceBetween :20,
            centeredSlides:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
    .banner
      width 100%
      height px2rem(433)
      box-sizing border-box
      padding px2rem(20) 0
      float left
      a
        width px2rem(650)
        height px2rem(385)
        display block
        color #333
        box-sizing border-box
        position relative
        border: 1px solid grey
        border-radius px2rem(20)
        img
          width px2rem(648)
          height px2rem(384)
          border-radius px2rem(20)
        .content
          position absolute
          top: 50%
          left: 50%
          transform translate(-50%,-50%)
          width px2rem(466)
          height px2rem(198)
          background white
          opacity 0.9
          .title
            display inline-block
            width 100%
            height px2rem(20)
            font-size px2rem(22)
            color #666
            text-align: center
          .center
            font-size px2rem(36)
            margin-top px2rem(20)
            font-weight bold
            text-align: center
          .bottom
            margin-top px2rem(20)
            font-size px2rem(23)
            text-align: center
</style>
