<template>
  <div class="movies">
    <div class="type">
      <ul>
        <typeList v-for="(item,index) in $store.state.movieInfo.moviesType" :item="item" :key="index"></typeList>
      </ul>
    </div>
    <carousel></carousel>
    <div class="container">
      <movieList v-for="(item,index) in $store.state.movieInfo.moviesList" :item="item"></movieList>
    </div>
  </div>
</template>
<script>
  import typeList from "../public/type.vue";
  import carousel from "../public/carousel.vue";
  import movieList from "./movie-list.vue";

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
    created(){
          var p1=this.$store.dispatch('getAjax','/v2/movie/in_theaters?start=0&count=3')
          var p2=this.$store.dispatch('getAjax','/v2/movie/coming_soon?start=0&count=3')
          var p3=this.$store.dispatch('getAjax','/v2/movie/top250?start=0&count=3')

          Promise.all([p1,p2,p3]).then(res=>{
            this.doGetData(res)
          }).catch(err=>{
            console.log(err.message)
          })
    },
    methods:{
      doGetData(res){
        for(var index in res){
          var obj=res[index]
          var movies=[];
          for(var idx in obj.subjects){
            var subject = obj.subjects[idx]
            var title=subject.title;
            this.$store.commit('changeStars',subject.rating.stars)
            if(title.length >= 6){
              title=title.substring(0,6)+"..."
            }
            var temp={
              title:title,
              average:subject.rating.average,
              coverageUrl:subject.images.large,
              movieId:subject.id,
              stars: this.$store.getters.convertToStarsArray
            }
            movies.push(temp)
          }
          this.$store.state.movieInfo.moviesList[this.$store.state.movieInfo.movieList[index]]={
            subjectTitle:this.$store.state.movieInfo.movieListName[index],
            movies:movies
          }
        }
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
