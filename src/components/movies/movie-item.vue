<template>
  <div class="movie-item">
    <img  class="movie-img" src="../../../static/images/yourname.jpg"/>
    <p class="movie-title">你的名字</p>
    <Stars></Stars>
  </div>
</template>
<script>
  import stars from './star.vue';
  export default {
    components:{
      Stars:stars
    },
    data(){
      return{

      }
    }
  }
</script>
<style>
  .movie-item{
    display: flex;
    flex-direction: column;
    margin: 0 0.22rem;
    width: 2rem;
    overflow: auto;
  }
  .movie-img{
    width: 2rem;
    height: 2.7rem;
    padding-bottom: .15rem;
  }
  .movie-title{
    margin-bottom: 0.1rem;
    font-size: 0.24rem;
  }
</style>
