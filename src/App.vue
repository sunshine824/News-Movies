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
        <li>
          <span class="iconfont icon-xinwen1"></span>
          <span class="text">新闻</span>
        </li>
        <li>
          <span class="iconfont icon-dianying"></span>
          <span>电影</span>
        </li>
        <li>
          <span class="iconfont icon-shezhi"></span>
          <span>设置</span>
        </li>
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
      pageName:''

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

  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f7fc;
  width: 100vw;
  height: 100vh;
}
.tabBar{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 1rem;
  background: #277de2;
  ul{
    li{
      float: left;
      width: 33.3%;
      text-align: center;
      span{
        display: block;
        font-size: 0.25rem;
        color:#fff;
        &.iconfont{
          font-size: 0.4rem;
        }
      }
    }
  }
}
</style>
