<template>
  <router-link tag="div" :to="{path:'/movie/movie-details',query:{movieId:item.movieId}}" class="movie-item">
    <img class="movie-img" v-lazy="item.coverageUrl"/>
    <p class="movie-title">{{item.title}}</p>
    <Stars :item="item"></Stars>
  </router-link>
</template>
<script>
  import stars from './star.vue';
  export default {
    props:["item"],
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
    width: 26%;
    overflow: auto;
  }
  .movie-img{
    width: 100%;
    padding-bottom: .15rem;
  }
  .movie-title{
    margin-bottom: 0.1rem;
    font-size: 0.24rem;
  }
  @media screen and (max-width: 640px) {
    .movie-img{
      height: 2.4rem;
    }
    .movie-item{
      margin: 0 0.22rem;
    }
  }
  @media screen and (max-width: 750px) and (min-width: 641px) {
    .movie-img{
      height: 2.8rem;
    }
    .movie-item{
      margin: 0 0.26rem;
    }
  }
  @media screen and (max-width: 828px) and (min-width: 751px) {
    .movie-img{
      height: 3.08rem;
    }
    .movie-item{
      margin: 0 0.29rem;
    }
  }
</style>
