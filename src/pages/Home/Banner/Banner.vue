<template>
    <div class="swiper-container" v-if="Pic.length" id="mazong">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item) in Pic">
          <img class="img" v-lazy="item.picUrl" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</template>
<script>
  import {reqBannerPic} from '../../../api'
  import Swiper from 'swiper'
  export default {
    data(){
      return{
        Pic:[]
      }
    },
    mounted(){
      reqBannerPic()
        .then(res=>{
          if(res.code===0){
            this.Pic = res.data
          }
        })
    },
    watch:{
      Pic(){
        this.$nextTick(()=>{
          new Swiper('#mazong',{
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .swiper-container
    padding-top px2rem(148)
  .img
    width 100%
    height px2rem(400)
</style>
