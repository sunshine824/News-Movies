<template>
  <div class="news-detail">
    <div class="news-contaienr">
      <h3>{{item.text}}</h3>
      <div class="news-content">
        <span>发布日期：{{item.date}}</span>
        <span>作者：{{item.author}}</span>
      </div>
      <div class="news-img">
        <img :src="item.img">
      </div>
      <article class="news-info">
        <p>
          {{item.content}}
        </p>
      </article>
      <div class="like-share">
        <p class="like">
          <span class="iconfont icon-dianzan"></span>
          <span class="like-count">{{item.like}}</span>
        </p>
        <p class="share">
          <span class="iconfont icon-weixin" style="color: #00cd0c"></span>
          <span class="iconfont icon-qq" style="color: #3cb1ed;padding: 0 0.5rem"></span>
          <span class="iconfont icon-sina0" style="color: #cf4220"></span>
        </p>
      </div>
      <div class="comment">
        <span class="comment-title">全部评论</span>
        <ul class="comment-list">
          <li v-for="(item,index) in item.comment" :key="index">
            <p class="head-img">
              <img src="../../../static/images/head.jpg"/>
            </p>
            <div class="comment-info">
              <p class="name">{{item.name}}</p>
              <p class="date">{{item.commentDate}}</p>
              <p class="text">{{item.commentText}}</p>
            </div>
            <div class="other-like">
              <p class="like">
                <span class="iconfont icon-dianzan"></span>
                <span>{{item.otherLike}}</span>
              </p>
              <span class="iconfont icon-unie644"></span>
            </div>
          </li>
        </ul>
        <p class="no-more">已显示全部评论</p>
      </div>
    </div>
    <div class="input">
      <div class="input-group">
        <input type="text" placeholder="您想说点什么" class="input-text" v-model="commenText">
        <span class="iconfont icon-xiaolian" id="emoji"></span>
        <span class="btn" @click="sendMsg()">发表</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'  //在子组件中使用 import Vue from 'vue' 这样的写法引入vue后才能使用

  export default {
    data(){
      return {
        id:this.$route.query.id,
        item:this.$route.query.item,
        commenText:'',
        otherLike:0,
      }
    },
    //数据更新调用
    mounted:function(){
      //显示表情包
      $('#emoji').SinaEmotion($('.input-text'))
    },
    methods:{
      sendMsg(){
        if(this.commentText==''){
          return
        }
        //js异常处理 AnalyticEmotion方法代码有缺陷
        try{
          //解析表情
          this.commenText=AnalyticEmotion(this.commenText);
        }catch(err){
          this.commenText=this.commenText;
        }

        var nowDate=this.getNowFormatDate() //获取当前日期

        var html=Vue.extend({
          template:`<li>
                      <p class="head-img">
                        <img src="../../../static/images/head.jpg"/>
                      </p>
                       <div class="comment-info">
                        <p class="name">阳晨西下</p>
                        <p class="date">${nowDate}</p>
                        <p class="text">${this.commenText}</p>
                      </div>
                      <div class="other-like">
                        <p class="like">
                          <span class="iconfont icon-dianzan"></span>
                          <span>${this.otherLike}</span>
                        </p>
                        <span class="iconfont icon-unie644"></span>
                      </div>
                    </li>`
        })

        //挂载html节点
        var content=new html().$mount();

        document.querySelector('.comment-list').appendChild(content.$el)

        this.commenText=''
      },
      getNowFormatDate(){
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes()
          + seperator2 + date.getSeconds();
        return currentdate;
      }
    }
  }
</script>
<style lang="less">
  @import '../../assets/css/jquery.sinaEmotion.css';

  .news-detail{
    margin-bottom:1.5rem;
    .news-contaienr{
      padding:0.35rem;
    }
    h3{
      font-size: 0.38rem;
      text-align: justify;
    }
    .news-content{
      font-size: 0.26rem;
      float: right;
      color: #888;
      margin:0.1rem;
      span{
        margin-right: 0.2rem;
      }
    }
    .news-img{
      width: 100%;
      padding: 0.2rem;
    }
    .news-info{
      font-size: 0.3rem;
      display:inline-block;
      p{
        text-indent: 2em;
        margin: 0.1rem 0;
        text-align: justify;
        color: #666;
      }
    }
    .like-share{
      margin: 0.5rem 0;
      overflow:auto;
      .like{
        margin-top: 12px;
        float: left;
        width: 1.6rem;
        height: 0.6rem;
        border-radius: 0.3rem;
        border: 1px solid #f7855c;
        color: #f7855c;
        font-size: 0.25rem;
        text-align: center;
        line-height: 0.6rem;
        .icon-dianzan{
          font-size: 0.25rem;
        }
      }
      .share{
        float: right;
        margin-top: -13px;
        span{
          font-size: 0.7rem;
        }
      }
    }
    .input{
      position: fixed;
      width: 100%;
      bottom: 0;
      height: .9rem;
      background: #fff;
      border-top: 1px solid #999;
    }
    .input-group{
      width:90%;
      margin:0.15rem auto;
      .input-text{
        border: 1px solid #e5e5e5;
        width: 75%;
        outline: none;
        height: .55rem;
        border-radius: .1rem;
        font-size: .25rem;
        padding-left: .2rem;
      }
      .icon-xiaolian{
        font-size: .35rem;
        margin-left: .3rem;
        vertical-align: middle;
      }
      .btn{
        color: #037ae0;
        font-size: .25rem;
        vertical-align: middle;
        margin-left: .2rem;
      }
    }
    .comment{
      overflow: auto;
      .comment-title{
        font-size: 0.3rem;
        color: #242424;
        border-bottom: 3px solid #f55318;
        padding-bottom: 0.15rem;
        display: inline-block;
      }
      .no-more{
        color: #8f8f8f;
        text-align: center;
        font-size: .2rem;
      }
      .comment-list{
        overflow:auto;
        border-top: 1px solid #e5e5e5;
        li{
          padding-top: 0.4rem;
          overflow:auto;
          &:last-child:after{
            border: none;
           }
          &:after{
             content: '';
             width: 90%;
             display: block;
             overflow: auto;
             padding-top: .4rem;
             border-bottom: 1px solid #e5e5e5;
             margin: auto;
           }
          p.head-img{
            width: 15%;
            float: left;
          }
          p.head-img img{
            border-radius: 50%;
            width: .8rem;
            height: .8rem;
            display: block;
          }
          .comment-info{
            float: left;
            margin-left:0.3rem;
            width:50%;
            .name{
              font-size: 0.25rem;
              margin-bottom: .15rem;
              color: #8f8f8f;
            }
            .date{
              font-size: 0.2rem;
              margin-bottom: 0.1rem;
              color: #8f8f8f;
            }
            .text{
              font-size: 0.3rem;
              color: #242424;
              text-align: justify;
            }
          }
          .other-like{
            float: right;
            color: #666;
            font-size: 0.25rem;
            width:25%;
            text-align: right;
            .like{
              display: inline-block;
              font-size: 0.25rem;
              color: #666;
              margin-right: .3rem;
            }
            .iconfont{
              font-size: 0.3rem;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 640px){
      .comment-list .comment-info .text{
        font-size: 0.26rem !important;
      }
  }
  #emotions{
    left: 0;
    width: 100%;
    font-size: 12px;
    background: #fff;
    position: fixed;
    border: 1px solid #E8E8E8;
    z-index: 200;
    bottom: 90px;
  }
</style>
