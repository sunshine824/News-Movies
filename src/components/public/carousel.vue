<template>
  <Carousel autoplay v-model="value2" :autoplay-speed="autoplaySpeed">
    <Carousel-item>
      <div class="demo-carousel">
        <img src="../../../static/images/fanwu.jpg"/>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="../../../static/images/junshi.jpg"/>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="../../../static/images/meinv.jpg"/>
      </div>
    </Carousel-item>
    <Carousel-item>
      <div class="demo-carousel">
        <img src="../../../static/images/qiche.jpg"/>
      </div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {
    data(){
      return {
        autoplaySpeed:3000,
        value2:0,
      }
    }
  }
</script>
<style lang="less">
  .ivu-carousel{
    height: 3.5rem;
    background: #666;
    img{
      width: 100%;
      height: 3.5rem;
    }
  }
  .ivu-carousel-arrow{
    display: none;
  }
  .ivu-carousel-dots li button{
    background: #fff;
  }
</style>
