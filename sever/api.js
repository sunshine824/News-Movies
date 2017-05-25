/**
 * Created by Gatsby on 2017/5/12.
 */
var signInfo = require('./db')
var express = require('express');
var router=express.Router();

//创建接口

//注册接口
router.post('/api/register',(req,res)=>{
  var userName=req.body.userName
  var passwd=req.body.passwd
  var passwdCheck=req.body.passwdCheck
  //console.log(userName,passwd,passwdCheck)
  var jsonInfo={}

  try{
    if(userName=='' || passwd=='' || passwdCheck==''){
      throw new Error('用户名或密码不能为空')
    }else if(passwd.length>1 && passwd.length<6){
      throw new Error('密码不能少于6位')
    }
  }catch(e){
    jsonInfo.status=0;
    jsonInfo.msg=e.message;
    return res.json(jsonInfo)
  }

  var userInfo={userName:userName,passwd:passwd}

    signInfo.find({userName:userName})
      .then((result)=>{
        if(result.length){
          jsonInfo.status=0;
          jsonInfo.msg='用户名已注册';
          res.json(jsonInfo)
        }else{
          console.log(123)
          signInfo.create(userInfo)
            .then((data)=>{
              jsonInfo.status=1;
              jsonInfo.msg='注册成功';
              res.json(jsonInfo)
            })
        }
      })
})
//登录接口
router.post('/api/login',(req,res)=>{
  var userName=req.body.userName;
  var passwd=req.body.passwd;
  //console.log(userName,passwd)
  jsonInfo={}

  try{
    if(userName=='' || passwd==''){
      throw new Error('用户名或密码不能为空')
    }else if(passwd.length>0 && passwd.length<6){
      throw new Error('密码不能少于6位')
    }
  }
  catch(e){
    jsonInfo.status=0;
    jsonInfo.msg=e.message;
    return res.json(jsonInfo)
  }

  signInfo.find({userName:userName})
    .then((result)=>{
      if(result[0].passwd==passwd){
        jsonInfo.status=1;
        jsonInfo.msg='登录成功';
        res.json(jsonInfo)
      }else{
        jsonInfo.status=0;
        jsonInfo.msg='密码不正确';
        res.json(jsonInfo)
      }
    })
    .catch((e)=>{
      if(e.message.match('Cannot read property')){
        jsonInfo.status=0;
        jsonInfo.msg='没有此用户，请先注册'
        res.json(jsonInfo)
      }
    })
})

module.exports = router;
