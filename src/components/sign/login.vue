<template>
  <div class="bg">
    <router-link tag="p" class="register" to="/register">注册</router-link>
    <div class="logo">
      <img src="../../assets/images/login_03.png"/>
    </div>
    <div class="form">
      <div class="form-group">
        <label for="username"><img src="../../assets/images/login_07.png"/></label>
        <input type="text" placeholder="请输入邮箱或用户名" id="username" class="username" v-model="userName">
      </div>
      <div class="form-group">
        <label for="passwd"><img src="../../assets/images/login_10.png"/></label>
        <input type="password" placeholder="请输入密码" id="passwd" class="passwd" v-model="passwd">
      </div>
      <p class="err-msg">{{msg}}</p>
    </div>
    <button class="login" @click="login()">登录</button>
    <p class="forget">忘记密码?</p>
    <div class="enter">
      <span class="enter-title">或使用第三方登录</span>
      <p class="icon">
        <span class="iconfont icon-weixin" style="color: #00cd0c"></span>
        <span class="iconfont icon-qq" style="color: #3cb1ed;padding: 0 0.3rem"></span>
        <span class="iconfont icon-sina0" style="color: #cf4220"></span>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        userName:'',
        passwd:'',
        msg:''
      }
    },
    methods:{
      login(){
        if(this.userName=='' || this.passwd==''){
          this.msg='用户名或密码不能为空';
          setTimeout(()=>{this.msg=''},3000)
        }else if(this.userName.length<2){
          this.msg='用户名不能小于2位字符';
          setTimeout(()=>{this.msg=''},3000)
        }else if(this.passwd.length<6){
          this.msg='密码不能小于6位字符';
          setTimeout(()=>{this.msg=''},3000)
        }else{
          this.$ajax({
            method:'post',
            url:'/api/login',
            data:{
              userName:this.userName,
              passwd:this.passwd,
            }
          }).then((result)=>{
            console.log(result.data)
            if(result.data.status==1){

              window.location.href=result.data.url
              //初始化
              this.userName=''
              this.passwd=''

            }else{
              this.msg=result.data.msg
              setTimeout(()=>{this.msg=''},3000)
            }

          }).catch((err)=>{
            console.log(err)
          })
        }
      }
    }
  }

</script>
<style lang="less">
  .bg{
    background: #85d2c5;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 999;
    .register{
      font-size: 0.3rem;
      color: #fff;
      float: right;
      margin: .3rem;
    }
    .logo{
      width: 2.54rem;
      height: 1rem;
      margin: 0 auto;
      padding: 3rem 0 2rem 0;
      img{
        width: 100%;
      }
    }
    .form{
      width: 4.56rem;
      margin: 0 auto;
      position:relative;
      .form-group{
        border-bottom: 1px solid #77bdb1;
        margin-bottom: 15px;
        position: relative;
        label{
          position: absolute;
          left: 0;
          top: 0.25rem;
          img{
            width: 0.38rem;
          }
        }
        input{
          outline: none;
          border: none;
          width: 100%;
          height: 0.8rem;
          background: rgba(0,0,0,0);
          padding-left: 0.8rem;
          font-size: 0.3rem;
          color: #fff;
        }
      }
    }
    .login{
      width: 3.3rem;
      height: 0.7rem;
      background: #705d76;
      border-radius: 30px;
      margin: 0.6rem auto 0.2rem auto;
      color: #fff;
      border: none;
      font-size: 0.3rem;
      outline: none;
      display: block;
    }
    .forget{
      font-size: 0.24rem;
      text-align: center;
      color: #fff;
    }
    .enter{
      width: 4rem;
      margin: 1.4rem auto 0 auto;
      .enter-title{
        font-size: 0.24rem;
        color: #fff;
        text-align: center;
        margin-bottom: 0.2rem;
        display: block;
      }
      .icon span{
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 640px){
    .bg .logo{
      padding: 2rem 0 2rem 0;
    }
  }
  .err-msg{
    font-size: 0.28rem;
    color: red;
    position: absolute;
    right: 10px;
  }
</style>
