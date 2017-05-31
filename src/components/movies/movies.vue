<template>
  <div class="movies">
    <div class="type">
      <ul>
        <typeList v-for="(item,index) in $store.state.movieInfo.moviesType" :item="item" :key="index"></typeList>
      </ul>
    </div>
    <carousel></carousel>
    <movieList></movieList>
    <movieList></movieList>
    <movieList></movieList>
  </div>
</template>
<script>
  import typeList from "../public/type.vue";
  import carousel from "../public/carousel.vue";
  import movieList from "./movie-list.vue"
  export default {
    components:{
      typeList,
      carousel,
      movieList
    },
    data(){
      return{

      }
    }
  }
</script>
<style>
  .movies{
    margin-bottom: 1.2rem;
  }
</style>
