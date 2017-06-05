<template>
  <div class="stars-container">
    <div class="stars">
      <img  v-for="(item,index) in item.stars" :key="index" v-if="item" src="../../../static/images/star.png"/>
      <img v-else src="../../../static/images/none-star.png"/>
    </div>
    <p class="star-score">{{item.average}}</p>
  </div>
</template>
<script>
  export default {
    props:["item"],
    data(){
      return {

      }
    },
  }
</script>
<style>
  .stars-container{
    display: flex;
    flex-direction: row;
  }
  .stars{
    flex-direction: row;
    display: flex;
    height: 0.2rem;
    margin-right: 0.12rem;
    margin-top: 0.06rem;
  }
  .stars img{
    height: 0.2rem;
    width: 0.2rem;
  }
  .star-score{
    color: #666;
    font-size:.25rem;
  }
</style>
