<template>
  <Carousel autoplay :autoplay-speed="autoplaySpeed">
    <Carousel-item v-for="(item,index) in getCarouselImg" :key="index">
      <div class="demo-carousel">
        <img :src="item"/>
      </div>
    </Carousel-item>
  </Carousel>
</template>
<script>
  export default {
    data(){
      return {
        autoplaySpeed:3000,
        pageName:'',
      }
    },
    mounted:function(){
      this.pageName=this.$route.name
    },
    computed:{
      getCarouselImg(){
        return  this.pageName=='新闻' ? this.$store.state.newInfo.carousel : this.$store.state.movieInfo.carousel
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
