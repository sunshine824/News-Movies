<template>
  <div class="bg">
    <h1 class="title">登录</h1>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <Form-item prop="userName">
        <Input type="text" v-model="formInline.userName" placeholder="用户名" size="large">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="passwd">
        <Input type="password" v-model="formInline.passwd" placeholder="密码" size="large">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="success" @click="handleSubmit('formInline')">登录</Button>
        <router-link tag="Button" :to="{path:'/register'}" class="ivu-btn-primary">注册</router-link>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  export default {
    data () {
    return {
      formInline: {
        userName: '',
        passwd: ''
      },
      ruleInline: {
        userName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请填写密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
        ]
      }
    }
  },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$ajax({
              method:'post',
              url:'/api/login',
              data:{
                userName:this.formInline.userName,
                passwd:this.formInline.passwd
              }
            }).then((result)=>{
              if(result.data.status==1){
                this.$Message.success(
                  result.data.msg
                );
              }else{
                this.$Message.error(
                  result.data.msg
                );
              }
              //初始化
              this.formInline.userName=''
              this.formInline.passwd=''

            }).catch((err)=>{
                console.log(err)
            })
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      }
    }
  }
</script>
<style lang="less">
  .ivu-form{
    width: 450px;
    margin: 30px auto;
    background: #fff;
    padding: 50px 50px 1px 50px;
    border-radius: 10px;
    .ivu-form-item{
      margin-bottom: 30px;
    }
    .ivu-btn{
      margin-left: 20px;
    }
  }
  .bg{
    width: 100vw;
    height: 100vh;
    background: #324157;
    .title{
      color: #fff;
      font-weight: normal;
      padding-top: 200px;
    }
  }
</style>
