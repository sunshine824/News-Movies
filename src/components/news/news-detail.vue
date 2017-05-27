<template>
  <div class="news-detail">
    <h3>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</h3>
    <div class="news-content">
      <span>发布日期：2017-05-12</span>
      <span>作者：李白</span>
    </div>
    <div class="news-img">
      <img src="../../assets/images/1.jpg">
    </div>
    <article class="news-info">
      <p>若申请被韩国统一部批准，访朝团最早将在6月10日开启对朝鲜为期4天的非正式访问。这也将是文在寅政府成立之后首次非官方南北接触。</p>
      <p>此前，韩国政府再次重申在强力反制朝鲜挑衅的同时，灵活放开韩朝民间交流的立场。韩国统一部发言人李德行22日表示，强有力地应对朝鲜挑衅的基本原则坚定不移，但鉴于韩朝关系长期僵持有其不可取的一面，韩方将在不损害国际社会一致对朝制裁大局的范围内灵活考虑开展韩朝民间交流，缓和半岛局势。</p>
      <p>他表示，坚持向朝鲜提供人道援助是韩国历届政府一贯坚持的方针。针对韩国新政府成立后，10多个对朝人道援助及社会文化交流团体陆续提出了访朝申请，韩国统一部或即将批准其中一些申请。政府还有可能通过世界粮食计划署（WFP）、世界卫生组织(WHO)等国际组织重新对朝提供援助。</p>
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
    background:#fff;
    margin-bottom:1rem;
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
      }
    }
  }
</style>
