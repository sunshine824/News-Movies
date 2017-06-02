<template>
  <div id="app">
    <router-view name="sign"></router-view>

    <div class="news-head" :class="{'flx':isFlx}">
      <div class="back iconfont icon-back" @click="$router.back()" v-show="isBack">
        <span>返回</span>
      </div>
      <p class="title"><img src="../static/images/Loading.png" v-if="$store.state.isLoading"/>{{this.$store.state.pageName}}</p>
    </div>
    <router-view></router-view>
    <div class="tabBar" v-show="isShowBar">
      <ul>
        <router-link tag="li" :to="item.url" v-for="(item,index) in tabs" :key="index" @click.native="toggle(index)" :class="{active:active===index}">
          <span class="iconfont" :class="item.class"></span>
          <span class="text">{{item.type}}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isBack:false,
      pageName:'',
      active:0,
      isShowBar:true,
      isFlx:false,
      tabs:[
        {
          class:'icon-xinwen1',
          type:"新闻",
          url:"/news"
        },
        {
          class:'icon-dianying',
          type:"电影",
          url:'movies'
        },
        {
          class:'icon-shezhi',
          type:"设置",
          url:'/setting'
        }
      ]
    }
  },
  //监听$route切换pageName
  watch:{
    "$route" (to, from){
      console.log(to)
      const toDepth=to.path.split('/').length
      if(toDepth==2){
        this.$store.state.pageName=to.name;
        this.isBack=false;
        this.isShowBar=true
      }else{
        this.isShowBar=false
        this.isBack=true
      }

      to.path=='/movies/more-movies' ? this.isFlx=true : this.isFlx=false
    }
  },
  methods:{
    toggle(index){
      this.active=index
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  width: 100vw;
}
.tabBar{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 1rem;
  background: #fff;
  border-top:1px solid #666;
  z-index:300;
  ul{
    li{
      float: left;
      width: 33.3%;
      text-align: center;
      span{
        display: block;
        font-size: 0.25rem;
        color:#666;
        &.iconfont{
          font-size: 0.4rem;
        }
      }
      &.active{
        span{
          color: #277de2;
        }
       }
    }
  }
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
    img{
      width: 0.35rem;
      height: 0.35rem;
      animation: loading 1s infinite linear;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
.flx{
  position: fixed !important;
  top: 0;
}

@keyframes loading
{
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}
</style>
