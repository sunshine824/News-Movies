<template>
  <div id="app">
    <router-view name="sign"></router-view>

    <div class="news-head">
      <div class="back iconfont icon-back" @click="$router.back()" v-show="isBack">
        <span>返回</span>
      </div>
      <p class="title">{{pageName}}</p>
    </div>
    <router-view></router-view>
    <div class="tabBar">
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
      //console.log(to)
      const toDepth=to.path.split('/').length
      if(toDepth==2){
        this.pageName=to.name;
        this.isBack=false
      }else{
        this.isBack=true
      }
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
</style>
