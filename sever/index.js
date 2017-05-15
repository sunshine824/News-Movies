/**
 * Created by Gatsby on 2017/5/12.
 */
// 引入编写好的api
var api = require('./api');
var path=require('path')
var express=require('express');
var bodyParser=require('body-parser')
var app=express()

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(api)

app.set('views',path.join(__dirname,'src'))

//app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'static')));


app.listen(8010)
