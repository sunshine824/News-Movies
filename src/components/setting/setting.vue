<template>
  <div class="setting">
    <div class="item-group">
      <router-link tag="p" to="/setting/resetPassword" class="item">
        <span class="item-text">修改密码</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </router-link>
    </div>
    <div class="item-group">
      <p class="item">
        <span class="item-text">播放和下载</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </p>
      <p class="item">
        <span class="item-text">常用功能</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </p>
    </div>
    <div class="item-group">
      <p class="item">
        <span class="item-text">我的皮肤</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </p>
      <p class="item">
        <span class="item-text">消息推送</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </p>
    </div>
    <div class="item-group">
      <p class="item">
        <span class="item-text">清除缓存</span>
        <span class="iconfont icon-zuojiantou-copy"></span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style lang="less">
  .setting{
    background: #f5f5f5;
    padding-top: 0.15rem;
    height: calc(~'100vh - 1rem');
  }
  .item-group{
    margin-bottom: .25rem;
  }
  .item{
    height: .9rem;
    line-height: .9rem;
    font-size: .28rem;
    background: #fff;
    color: #333333;
    margin-bottom:1px;
    .item-text{
      float: left;
      padding-left: .2rem;
    }
    .iconfont{
      font-size: .3rem;
      color: #333;
      float: right;
      padding-right: .2rem;
    }
  }
</style>
