<template>
  <div class="movies">
    <div class="type">
      <ul>
        <typeList v-for="(item,index) in $store.state.movieInfo.moviesType" :item="item" :key="index"></typeList>
      </ul>
    </div>
    <carousel></carousel>
    <div class="container">
      <movieList :item="moviesList.inTheaters"></movieList>
      <movieList :item="moviesList.comingSoon"></movieList>
      <movieList :item="moviesList.Top250"></movieList>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import typeList from "../public/type.vue";
  import carousel from "../public/carousel.vue";
  import movieList from "./movie-list.vue";
  import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
  export default {
    components:{
      typeList,
      carousel,
      movieList
    },
    data(){
      return{
        movieList:['inTheaters','comingSoon','Top250'],
        movieListName:['正在热映','即将上映','豆瓣TOP250'],
        moviesList:{}
      }
    },
    created(){
          var p1=this.getAjax('/v2/movie/in_theaters?start=0&count=3')
          var p2=this.getAjax('/v2/movie/coming_soon?start=0&count=3')
          var p3=this.getAjax('/v2/movie/top250?start=0&count=3')

          Promise.all([p1,p2,p3]).then(res=>{
            this.doGetData(res)
          }).catch(err=>{
            console.log(err.message)
          })
    },
    computed:{
//      ...mapState({
//        moviesList:state=>state.movieInfo.moviesList
//      })
    },
    methods:{
      ...mapMutations(['changeStars']),

      ...mapActions(['getAjax']),

      doGetData(res){
        for(var index in res){
          var obj=res[index]
          var movies=[];
          for(var idx in obj.subjects){
            var subject = obj.subjects[idx]
            var title=subject.title;
            //this.$store.commit('changeStars',subject.rating.stars)
            this.changeStars(subject.rating.stars)
            if(title.length >= 6){
              title=title.substring(0,6)+"..."
            }
            var temp={
              title:title,
              average:subject.rating.average,
              coverageUrl:subject.images.large,
              movieId:subject.id,
              stars: this.$store.getters['convertToStarsArray']
            }
            //console.log(temp)
            movies.push(temp)
          }
          //console.log(movies)
          this.moviesList[this.movieList[index]]={
            subjectTitle:this.movieListName[index],
            movies:movies
          }
        }
        console.log(this.moviesList)
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
