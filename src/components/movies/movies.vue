<template>
  <div class="movies">
    <div class="type">
      <ul @click="getMovieList()">
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
    },
    methods:{
      getMovieList(){
        //this.$store.dispatch('getAjax','/v2/movie/in_theaters')
        this.$ajax.post('/v2/movie/in_theaters')
          .then((res)=>{
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err.message)
          })
      }
    }
  }
</script>
<style>
  .movies{
    margin-bottom: 1.2rem;
    background: #f2f7fc;
  }
</style>
