<template>
  <div class="wrap">
    <div class="header">
      <span>为你推荐</span>
    </div>
    <a href="javascript:;" class="content">
      <img :src="recommendOne.picUrl" alt="">
      <div class="info">
        <div class="textone">
          <span class="one">{{recommendOne.title}}</span>
          <span class="two">{{recommendOne.priceInfo}}元起</span>
        </div>
        <div class="texttwo">{{recommendOne.subTitle}}</div>
      </div>
    </a>
    <a href="javascript:;" class="items">
      <div class="left">
        <div class="one">{{recommendTwo.title}}</div>
        <div class="two ellipsis">{{recommendTwo.subTitle}}</div>
      </div>
      <img :src="recommendTwo.picUrl" alt="" class="right">
      <span class="othertwo">{{recommendTwo.typeName}}</span>
    </a>
    <a href="javascript:;" class="items">
      <div class="left">
        <div class="one">{{recommendThree.title}}</div>
        <div class="two ellipsis">{{recommendThree.subTitle}}</div>
      </div>
      <img :src="recommendThree.picUrl" alt="" class="right">
      <span class="other">{{recommendThree.typeName}}</span>
    </a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['recommendOne','recommendTwo','recommendThree'])
    },
    mounted(){
      this.$store.dispatch('getRecommendOne')
      this.$store.dispatch('getRecommendTwo')
      this.$store.dispatch('getRecommendThree')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../../common/stylus/mixins.styl"
  .wrap
    width 100%
    padding 0 px2rem(30)
    box-sizing border-box
    .header
      width 100%
      height px2rem(119)
      text-align: center
      line-height px2rem(119)
      span
        font-size px2rem(30)
    .content
      display block
      width 100%
      height px2rem(586)
      margin-bottom px2rem(30)
      border: 1px solid #d9d9d9
      img
        width 100%
        height px2rem(383.5)
        display inline-block
        display flex
      .info
        width px2rem(688.5)
        height px2rem(201)
        box-sizing border-box
        padding px2rem(40) px2rem(40) px2rem(60)
        border: 1px solid #d9d9d9
        .textone
          overflow hidden
          margin-bottom px2rem(25)
          .one
            float left
            font-size px2rem(38)
            color #333
          .two
            float right
            font-size px2rem(30)
            color #333
        .texttwo
          font-size px2rem(28)
    .items
      display inline-block
      width 100%
      height px2rem(272)
      margin-bottom px2rem(30)
      position relative
      .left
        width px2rem(410)
        height 100%
        box-sizing border-box
        padding 0 px2rem(20)
        display flex
        justify-content: center
        flex-direction column
        float left
        border: 1px solid #9d9d9d
        .one
          font-size px2rem(36)
          color #333
          margin-bottom px2rem(20)
        .two
          font-size px2rem(28)
      .right
        width px2rem(278)
        height px2rem(270)
        display inline-block
        float right
        border: 1px solid #9d9d9d
      .other
        position absolute
        top px2rem(10)
        right px2rem(130)
        display inline-block
        color #333
        font-size px2rem(24)
        border-radius px2rem(10)
        background white
        padding 0 px2rem(10)
      .othertwo
        position absolute
        top px2rem(10)
        right px2rem(80)
        display inline-block
        color #333
        font-size px2rem(24)
        border-radius px2rem(10)
        background white
        padding 0 px2rem(10)
</style>
