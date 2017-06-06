<template>
  <div class="form-group">
    <div class="input-group">
      <input type="password" placeholder="请输入旧密码">
    </div>
    <div class="input-group">
      <input type="password" placeholder="请输入新密码">
    </div>
    <button class="sure">确定</button>
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
  .input-group label{
    font-size: 0.3rem;
    color: #333;
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
  }
</style>
