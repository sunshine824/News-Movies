<template>
  <div class="stars-container">
    <div class="stars">
      <img src="../../../static/images/star.png"/>
      <img src="../../../static/images/star.png"/>
      <img src="../../../static/images/star.png"/>
      <img src="../../../static/images/star.png"/>
      <img src="../../../static/images/star.png"/>
    </div>
    <p class="star-score">7.3分</p>
  </div>
</template>
<script>
  export default {
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
    margin-right: 0.2rem;
    margin-top: 0.06rem;
  }
  .stars img{
    padding-left: 3px;
    height: 0.2rem;
    width: 0.2rem;
  }
  .star-score{
    color: #1f3463;
    font-size:.25rem;
  }
</style>
