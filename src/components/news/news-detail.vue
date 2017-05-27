<template>
  <div class="news-detail">
    <h3>{{item.text}}</h3>
    <div class="news-content">
      <span>发布日期：{{item.date}}</span>
      <span>作者：{{item.author}}</span>
    </div>
    <div class="news-img">
      <img src="../../assets/images/1.jpg">
    </div>
    <article class="news-info">
      <p>
        {{item.content}}
      </p>
    </article>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id:this.$route.query.id,
        item:this.$route.query.item
      }
    }
  }
</script>
<style lang="less">
  .news-detail{
    padding:0.35rem;
    margin-bottom:1.5rem;
    h3{
      font-size: 0.38rem;
      text-align: justify;
    }
    .news-content{
      font-size: 0.26rem;
      float: right;
      color: #888;
      span{
        margin-right: 0.2rem;
      }
    }
    .news-img{
      width: 100%;
      padding: 0.2rem;
    }
    .news-info{
      font-size: 0.3rem;
      display:inline-block;
      p{
        text-indent: 2em;
        margin: 0.1rem 0;
        text-align: justify;
      }
    }
  }
</style>
