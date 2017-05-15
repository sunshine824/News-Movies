<template>
  <div class="bg">
    <h1 class="title">注册</h1>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
      <Form-item prop="userName">
        <Input type="text" v-model="formCustom.userName" placeholder="用户名" size="large">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="passwd">
        <Input type="password" v-model="formCustom.passwd" placeholder="密码" size="large">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item prop="passwdCheck">
        <Input type="password" v-model="formCustom.passwdCheck" placeholder="确认密码" size="large">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </Form-item>
      <Form-item>
        <Button type="success" @click="handleSubmit('formCustom')">注册</Button>
        <router-link tag="Button" :to="{path:'/'}" class="ivu-btn-primary">登录</router-link>
      </Form-item>
    </Form>
  </div>
</template>
<script>

  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      formCustom: {
        userName:'',
        passwd: '',
        passwdCheck: '',
      },
      ruleCustom: {
        userName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        passwd: [
          { validator: validatePass, trigger: 'blur'},
          { min:6,message:'密码长度不能小于6位',type: 'string'}
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur'},
          { min:6,message:'密码长度不能小于6位',type: 'string'}
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
                url:'/api/register',
                data:{
                  userName:this.formCustom.userName,
                  passwd:this.formCustom.passwd,
                  passwdCheck:this.formCustom.passwdCheck
                }
              }).then((result)=>{
                //console.log(result.data)
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
                this.formCustom.userName=''
                this.formCustom.passwd=''
                this.formCustom.passwdCheck=''

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
