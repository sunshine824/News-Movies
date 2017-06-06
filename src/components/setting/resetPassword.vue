<template>
  <div class="form-group">
    <div class="input-group">
      <input v-if="isShow" type="text" placeholder="请输入旧密码" v-model="passwd">
      <input v-else type="password" placeholder="请输入旧密码" v-model="passwd">
      <span class="iconfont" :class="[isShow ? 'icon-yanjing' : 'icon-biyan']" @click="isShow=!isShow"></span>
    </div>
    <div class="input-group">
      <input v-if="isResetShow" type="text" placeholder="请输入新密码" v-model="resetPasswd">
      <input v-else type="password" placeholder="请输入新密码" v-model="resetPasswd">
      <span class="iconfont" :class="[isResetShow ? 'icon-yanjing' : 'icon-biyan']" @click="isResetShow=!isResetShow"></span>
    </div>
    <button class="sure">确定</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        isResetShow:true,
        isShow:true,
        resetPasswd:'',
        passwd:''
      }
    },
    methods:{

    }
  }
</script>
<style>
  .form-group{
    height: calc(100vh - .9rem);
    background: #f5f5f5;
    padding-top: .15rem;
  }
  .input-group{
    height: 0.9rem;
    width: 100%;
    background: #fff;
    margin-bottom: 0.2rem;
    position: relative;
  }
  .input-group input{
    height: 0.9rem;
    width: 100%;
    padding:0 0.4rem;
    outline: none;
    border: none;
    font-size: 0.28rem;
    color: #333;
  }
  .input-group span{
    font-size: 0.5rem;
    color: #9a9a9a;
    position: absolute;
    right: .4rem;
    top: .1rem;
  }
  .sure{
    height: .8rem;
    width: 100%;
    background: #2d8cf0;
    font-size: .3rem;
    line-height: .8rem;
    border: none;
    outline: none;
    color: #fff;
    margin-top: .3rem;
  }
</style>
