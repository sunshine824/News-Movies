<template>
  <div class="news-list">
    <router-link tag="a" to="/news/news-detail" class="a-link" v-for="(item,index) in newsMsg" :key="item.id">
      <div class="news-text" @click="test">
        <strong>{{item.text}}</strong>
        <div class="info">
          <span class="date">{{item.date}}</span>
          <span class="read">{{item.readCount}}</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
<!--    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>
    <router-link tag="a" to="/news-detail" class="a-link">
      <div class="news-text">
        <strong>韩国拟对朝鲜实行“军硬民软”双轨战略，南北关</strong>
        <div class="info">
          <span class="date">1小时前</span>
          <span class="read">100</span>
        </div>
      </div>
      <p class="news-img">
        <img src="../../assets/images/junjian.jpg">
      </p>
    </router-link>-->
  </div>
</template>
<script>
 export default {
   data(){
    return {

    }
  },
  methods:{
    test(){
      this.$store.dispatch("myTest")
    }
  },
   computed:{
     newsMsg(){
       return this.$store.state.newInfo.newsMsg
     }
   }
 }
</script>
<style lang="less">
  .news-list{
    background: #fff;
    margin-top: 0.3rem;
  }
  .a-link{
    display: block;
    overflow: auto;
    position: relative;
    padding: 0.3rem 0.3rem;
    border-bottom: 1px solid #f2f7fc;
  }
  .news-text{
    float: left;
    width: 60%;
    padding-right:0.1rem;
    strong{
      font-size: 0.3rem;
      font-weight: normal;
      color: #333;
    }
    .info{
      font-size: 0.25rem;
      color: #888;
      position: absolute;
      bottom: 38px;
      span{
        margin-right: 0.1rem;
      }
      .read:before{
        content: '';
        background: url("../../assets/images/chat1.png") no-repeat;
        width: 0.23rem;
        height: 0.23rem;
        background-size: 100% auto;
        -webkit-background-size: 100% auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  .news-img{
    width: 40%;
    float: left;
  }
  .news-img img{
    width: 100%;
  }
</style>
