<template>
  <div class="grid-container">
    <movieItem :item="item" v-for="(item,index) in moviesAll" :key="index" class="fl"></movieItem>
  </div>
</template>
<script>
  import movieItem from './movie-item.vue';
  export default {
    components:{
      movieItem
    },
    data(){
      return{
        moviesAll:[],
        dataUrl:'',
        start:0, //从第一个开始获取
        count:20, //获取的总个数
        isCanPull:false
      }
    },
    created(){
      this.start=0;
      this.getMoviesByAjax()
    },
    methods:{
      getMoviesByAjax(){
        var type=this.$route.query.subjectTitle
        this.$store.commit('togglePageName',type)

        console.log(type)
        switch (type){
          case "正在热映":
            this.dataUrl='/v2/movie/in_theaters?start='+this.start+'&count='+this.count
            break;
          case "即将上映":
            this.dataUrl='/v2/movie/coming_soon?start='+this.start+'&count='+this.count
            break;
          case "豆瓣TOP250":
            this.dataUrl='/v2/movie/top250?start='+this.start+'&count='+this.count
            break;
        }
        this.$store.dispatch('getAjax',this.dataUrl)
          .then(res=>{

            //请求成功没数据处理
            if(res.subjects==''){
              //隐藏loading
              this.$store.commit('toggleShowLoading',false)
            }

            //console.log(res)
            this.doGetData(res)
          })
          .catch(err=>{
            console.log(err)
          })
      },
      doGetData(res){

        //如果是刷新先清空，在赋值
        if(this.isCanPull){
          this.moviesAll=[];
        }
        for(var idx in res.subjects){
          var subject = res.subjects[idx]
          var title=subject.title;
          this.$store.commit('changeStars',subject.rating.stars)
          if(title.length >= 6){
            title=title.substring(0,6)+"..."
          }
          var temp={
            title:title,
            average:subject.rating.average,
            coverageUrl:subject.images.large,
            movieId:subject.id,
            stars: this.$store.getters.convertToStarsArray
          }

          this.moviesAll.push(temp)

          //隐藏loading
          this.$store.commit('toggleShowLoading',false)

          if(this.isCanPull){
            document.querySelector('.grid-container').style.marginTop=1.3+'rem';
            this.isCanPull=false;
          }
        }
      },
      //滚动加载更多
      handleScroll(){
        var dom=document.querySelector('.grid-container')

        //es6解构
        var [scrollTop,clientHeight,scrollHeight]=[dom.scrollTop,dom.clientHeight,dom.scrollHeight]

        //console.log(scrollTop,clientHeight,scrollHeight)

        if(scrollTop+clientHeight>=scrollHeight){
          //显示loading
          this.$store.commit('toggleShowLoading',true)

          this.start+=20;

          this.getMoviesByAjax()
        }
      },
      //下拉刷新
      pullDown(){
        var startTy
        var dom=document.querySelector('.grid-container')
        //手指按下
        dom.addEventListener('touchstart',function(e){
          startTy=e.touches[0].clientY
        },false)

        //手指一动
        dom.addEventListener('touchmove',function(e){
          var scrollTop=dom.scrollTop
          var endTy= e.changedTouches[0].clientY,
            distance=endTy-startTy;
          if(distance>20 && scrollTop<20){ //下拉
            this.isCanPull=true;
            dom.style.marginTop=1.8+'rem'
          }
        }.bind(this))

        //手指抬起
        dom.addEventListener('touchend',function(e){
          //当前距离顶部距离
          var scrollTop=dom.scrollTop
          if(scrollTop<20){
            //显示loading
            this.$store.commit('toggleShowLoading',true)
            this.start=0;
            this.getMoviesByAjax()
          }

        }.bind(this))
      }
    },
    mounted(){
      this.pullDown();
      document.querySelector('.grid-container').addEventListener('scroll',this.handleScroll)
    }
  }

</script>
<style>
  .grid-container{
    margin: 1.3rem 0 .4rem 6px;
    overflow: auto;
    height: 100vh;
    transition:margin .6s
  }
  .single-view-container{
    float: left;
    margin-bottom: 40px;
  }
  .fl{
    float: left;
    margin-bottom: 16px;
  }
</style>
