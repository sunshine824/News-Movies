/**
 * Created by Gatsby on 2017/5/12.
 */
var mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/my_blog')
var db=mongoose.connection

db.on('error',console.error.bind(console,'连接出错'));
db.once('open',function(){
  console.log('打开记录')
})//第一次打开记录

var MyTestSchema=new mongoose.Schema({
  userName:String,
  passwd:String,
  passwdCheck:String
})
var signInfo=db.model('signInfo',MyTestSchema,'signInfo');

module.exports=signInfo;
