<template>
  <div class="move-list-container movies-template">
    <div class="inner-container">
      <div class="movie-head">
        <p class="slogan">{{item.subjectTitle}}</p>
        <router-link tag="div" :to="{path:'/movies/more-movies',query:{subjectTitle:item.subjectTitle}}" class="more">
          <span class="more-text">更多</span>
          <img class="more-img" src="../../../static/images/arrow-right.png" />
        </router-link>
      </div>
      <div class="movie-container">
        <movieItem v-for="(item,index) in item.movies" :item="item" :key="index"></movieItem>
      </div>
    </div>
  </div>
</template>
<script>
  import movieItem from './movie-item.vue';
  export default {
    props:["item"],
    components:{
      movieItem
    },
    data(){
      return{

      }
    }
  }
</script>
<style>
  .move-list-container{
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.3rem;
  }
  .movies-template{
    margin-bottom: 0.3rem;
  }
  .movie-head{
    padding: .3rem .2rem .22rem;
    overflow: auto;
    /*display: flex;
    flex-direction: row;
    justify-content: space-between;*/
  }
  .slogan{
    font-size: 0.24rem;
    float: left;
  }
  .more{
    float: right;
  }
  .more-text{
    vertical-align: middle;
    margin-right: .1rem;
    color: #1f4ba5;
    font-size: 0.24rem;
  }
  .more-img{
    width: 9px;
    height:16px;
    vertical-align: middle;
  }
  .movies-container{
    display: flex;
    flex-direction: row;
  }
  .inner-container{
    margin: 0 auto .2rem;
  }
  .movie-container{
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    display: -webkit-box;
  }
</style>
