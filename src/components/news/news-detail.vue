<template>
  <div class="news-detail">
    <h3>{{item.text}}</h3>
    <div class="news-content">
      <span>发布日期：{{item.date}}</span>
      <span>作者：{{item.author}}</span>
    </div>
    <div class="news-img">
      <img src="../../assets/images/1.jpg">
    </div>
    <article class="news-info">
      <p>
        {{item.content}}
      </p>
    </article>
    <div class="like-share">
      <p class="like">
        <span class="iconfont icon-dianzan"></span>
        <span class="like-count">100</span>
      </p>
      <p class="share">
        <span class="iconfont icon-weixin" style="color: #00cd0c"></span>
        <span class="iconfont icon-qq" style="color: #3cb1ed;padding: 0 0.5rem"></span>
        <span class="iconfont icon-sina0" style="color: #cf4220"></span>
      </p>
    </div>
    <div class="input-group">
      <input type="text" placeholder="您想说点什么" class="input-text">
      <span class="iconfont icon-xiaolian"></span>
      <span class="btn">发表</span>
    </div>
    <div class="comment">
      <span class="comment-title">全部评论</span>
      <ul class="comment-list">
        <li>
          <p class="head-img">
            <img src="../../assets/images/head.jpg"/>
          </p>
          <div class="comment-info">
            <p class="name">阳晨夕下</p>
            <p class="date">两小时前</p>
            <p class="text">中国强大，为中国感到自豪...</p>
          </div>
          <div class="other-like">
            <p class="like">
              <span class="iconfont icon-dianzan"></span>
              <span>10</span>
            </p>
            <span class="iconfont icon-unie644"></span>
          </div>
        </li>
        <li>
          <p class="head-img">
            <img src="../../assets/images/head.jpg"/>
          </p>
          <div class="comment-info">
            <p class="name">阳晨夕下</p>
            <p class="date">两小时前</p>
            <p class="text">中国强大，为中国感到自豪...</p>
          </div>
          <div class="other-like">
            <p class="like">
              <span class="iconfont icon-dianzan"></span>
              <span>10</span>
            </p>
            <span class="iconfont icon-unie644"></span>
          </div>
        </li>
        <li>
          <p class="head-img">
            <img src="../../assets/images/head.jpg"/>
          </p>
          <div class="comment-info">
            <p class="name">阳晨夕下</p>
            <p class="date">两小时前</p>
            <p class="text">中国强大，为中国感到自豪...</p>
          </div>
          <div class="other-like">
            <p class="like">
              <span class="iconfont icon-dianzan"></span>
              <span>10</span>
            </p>
            <span class="iconfont icon-unie644"></span>
          </div>
        </li>
        <li>
          <p class="head-img">
            <img src="../../assets/images/head.jpg"/>
          </p>
          <div class="comment-info">
            <p class="name">阳晨夕下</p>
            <p class="date">两小时前</p>
            <p class="text">中国强大，为中国感到自豪...</p>
          </div>
          <div class="other-like">
            <p class="like">
              <span class="iconfont icon-dianzan"></span>
              <span>10</span>
            </p>
            <span class="iconfont icon-unie644"></span>
          </div>
        </li>
        <li>
          <p class="head-img">
            <img src="../../assets/images/head.jpg"/>
          </p>
          <div class="comment-info">
            <p class="name">阳晨夕下</p>
            <p class="date">两小时前</p>
            <p class="text">中国强大，为中国感到自豪...</p>
          </div>
          <div class="other-like">
            <p class="like">
              <span class="iconfont icon-dianzan"></span>
              <span>10</span>
            </p>
            <span class="iconfont icon-unie644"></span>
          </div>
        </li>
      </ul>
      <p class="no-more">已显示全部评论</p>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        id:this.$route.query.id,
        item:this.$route.query.item
      }
    }
  }
</script>
<style lang="less">
  .news-detail{
    padding:0.35rem;
    margin-bottom:1.5rem;
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
    .input-group{
      margin:0 auto .4rem auto;
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
</style>
