<template>
  <div class="news">
    <div class="type">
      <ul>
        <typeList v-for="(item,index) in $store.state.newInfo.newsType" :item="item" :key="index"></typeList>
      </ul>
    </div>
    <carousel></carousel>
    <newsItem></newsItem>
  </div>
</template>
<script>
  import typeList from "../public/type.vue";
  import carousel from "../public/carousel.vue";
  import newsItem from "./news-item.vue";
  export default {
    components:{
      typeList,
      carousel,
      newsItem
    },
    data(){
      return{
        autoplaySpeed:3000
      }
    }
  }
</script>
<style lang="less">
  .news{
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    background: #f2f7fc;
  }
  .news-head{
    height: 0.9rem;
    background: #277de2;
    width: 100%;
    color:#fff;
    position: relative;
    z-index:888;
    .back{
      font-size: 0.3rem;
      line-height: 0.9rem;
      margin-left: 10px;
      position: absolute;
      left: 0;
    }
    .title{
      font-size: 0.3rem;
      line-height: 0.9rem;
      text-align: center;
    }
  }


</style>
