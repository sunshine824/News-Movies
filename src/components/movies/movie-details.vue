<template>
  <div class="detail-container">
    <img class="head-img" :src="movie.movieImg"/>
    <div class="head-img-hover">
      <p class="main-title">{{movie.title}}</p>
      <p class="sub-title">{{movie.country + " · "+movie.year}}</p>
      <div class="like">
        <span class="highlight-font">
          {{movie.wishCount}}
        </span>
        <span class="plain-font">
          人喜欢
        </span>
        <span class="highlight-font">
          {{movie.commentCount}}
        </span>
        <span class="plain-font">
          条评论
        </span>
      </div>
    </div>
    <img class="movie-smimg" :src="movie.movieImg"/>
    <div class="summary">
      <div class="original-title">
        <p>{{movie.originalTitle}}</p>
      </div>
      <div class="flex-row">
        <p class="mark">评分</p>
        <Stars :item="movie"></Stars>
      </div>
      <div class="flex-row">
        <p class="mark">导演</p>
        <p>{{movie.director.name}}</p>
      </div>
      <div class="flex-row">
        <p class="mark">影人</p>
        <p>{{movie.casts}}</p>
      </div>
      <div class="flex-row">
        <p class="mark">类型</p>
        <p>{{movie.genres}}</p>
      </div>
    </div>
    <div class="hr"></div>
    <div class="synopsis">
      <p class="synopsis-font">剧情简介</p>
      <p class="summary-content">{{movie.summary}}</p>
    </div>
    <div class="hr"></div>
    <div class="cast">
      <p class="cast-font"> 影人</p>
      <div class="cast-container" v-for="(item,index) in movie.castsInfo" :key="index">
        <img class="cast-img" :src="item.img">
        <p class="cast-name">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import stars from './star.vue';
  export default {
    components:{
      Stars:stars
    },
    data(){
      return {
        movieId:this.$route.query.movieId,
        movie:{}
      }
    },
    created(){
      var detailUrl='/v2/movie/subject/'+this.movieId
      this.$store.dispatch('getAjax',detailUrl)
        .then(res=>{
          console.log(res)
          this.doGetData(res)
        })
        .catch(err=>{
          console.log(err)
        })
    },
    methods:{
      doGetData(data){
        if(!data){
          return;
        }
        var director={
          avatar:"",
          name:"",
          id:""
        }
        if (data.directors[0]!=null){
          if (data.directors[0].avatars!=null){
            director.avatar = data.directors[0].avatars.large
          }
          director.name = data.directors[0].name;
          director.id = data.directors[0].id;
        }

        var movie={
          movieImg:data.images ? data.images.large : "",
          country: data.countries[0],
          title:data.title,
          originalTitle:data.original_title,
          wishCount:data.wish_count,
          commentCount:data.comments_count,
          year:data.year,
          genres: data.genres.join("、"),
          stars: convertToStarsArray(data.rating.stars),
          average:data.rating.average,
          director: director,
          casts: convertToCastString(data.casts),
          castsInfo: converToCastInfos(data.casts),
          summary:data.summary
        }
        this.movie=movie
      }
    }
  }
</script>
<style>
  .detail-container{
    display:flex;
    flex-direction: column;
  }

  .head-img{
    width:100%;
    height: 320px;
    -webkit-filter:blur(10px); /*css3模糊属性*/
  }

  .head-img-hover{
    width: 100%;
    height: 320px;
    position:absolute;
    top:90px;
    left:0;
    display:flex;
    flex-direction: column;
  }

  .main-title{
    font-size: 0.3rem;
    color:#fff;
    font-weight:bold;
    margin-top: 50px;
    margin-left: 40px;
    letter-spacing: 2px;
  }

  .sub-title{
    font-size: 0.25rem;
    color:#fff;
    margin-left: 40px;
    margin-top: 30px;
  }

  .like{
    font-size: 0.22rem;
    display:flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 40px;
  }

  .highlight-font{
    color: #f21146;
    font-size:22px;
    margin-right: 10px;
  }

  .plain-font{
    color: #666;
    font-size:22px;
    margin-right: 30px;
  }


  .movie-smimg{
    height:238px;
    width: 175px;
    position: absolute;
    top:160px;
    right: 30px;
  }

  .summary{
    margin-left:40px;
    margin-top: 40px;
    color: #777777;
  }

  .original-title{
    color: #1f3463;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .flex-row{
    display:flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .mark{
    margin-right: 30px;
    white-space:nowrap;
    color: #999999;
  }

  .hr{
    margin-top:45px;
    height:1px;
    width: 100%;
    background-color: #d9d9d9;
  }

  .synopsis{
    margin-left:40px;
    display:flex;
    flex-direction: column;
    margin-top: 50px;
  }

  .synopsis-font{
    color:#999;
  }

  .summary-content{
    margin-top: 20px;
    margin-right: 40px;
    line-height:40px;
    letter-spacing: 1px;
  }

  .cast{
    margin-left:40px;
    display:flex;
    flex-direction: column;
    margin-top:50px;
  }

  .cast-font{
    color: #999;
    margin-bottom: 40px;
  }

  .cast-container{
    display:inline-flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-right: 40px;
    width: 170px;
    text-align:center;
    white-space: normal;
  }

  .cast-imgs{
    white-space: nowrap;
  }

  .cast-img{
    width: 170px;
    height: 210px;
  }
  .cast-name{
    margin: 10px auto 0;
  }
</style>
