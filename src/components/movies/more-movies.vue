<template>
  <div class="grid-container">
    <div class="single-view-container" v-for="(item,index) in moviesAll" :key="index">
      <movieItem :item="item"></movieItem>
    </div>
  </div>
</template>
<script>
  import movieItem from './movie-item.vue';
  export default {
    components:{
      movieItem
    },
    data(){
      return{
        moviesAll:[],
        dataUrl:''
      }
    },
    created(){
      var type=this.$route.query.subjectTitle
      this.$store.commit('togglePageName',type)

      console.log(type)
      switch (type){
        case "正在热映":
              this.dataUrl='/v2/movie/in_theaters'
              break;
        case "即将上映":
              this.dataUrl='/v2/movie/coming_soon'
              break;
        case "豆瓣TOP250":
              this.dataUrl='/v2/movie/top250'
              break;
      }
      this.$store.dispatch('getAjax',this.dataUrl)
        .then(res=>{
          //console.log(res)
          this.doGetData(res)
        })
        .catch(err=>{
          console.log(err)
        })
    },
    methods:{
      doGetData(res){
        console.log(res)
        for(var idx in res.subjects){
          var subject = res.subjects[idx]
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
          this.moviesAll.push(temp)
        }
      }
    }
  }

</script>
<style>
  .grid-container{
    margin: 40px 0 40px 6px;
  }
  .single-view-container{
    float: left;
    margin-bottom: 40px;
  }
</style>
