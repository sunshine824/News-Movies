<template>
  <div id="app">
    <router-view name="sign"></router-view>

    <div class="news-head">
      <div class="back iconfont icon-back" @click="$router.back()" v-show="isBack">
        <span>返回</span>
      </div>
      <p class="title">新闻</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      isBack:false,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f2f7fc;
  width: 100vw;
  height: 100vh;
}
</style>
