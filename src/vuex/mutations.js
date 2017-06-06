/**
 * Created by Gatsby on 2017/5/26.
 */
const mutations={
  //获取对应id的数据
  getNewsInfoById(state,id){
    console.log(id)
    var obj=[]
    if(!id){
      return
    }
    obj.push(state.newInfo.newsMsg[id-1])
    return obj
  },

  //评分处理
  changeStars(state,stars){
    state.stars=stars
  },

  //切换pageName
  togglePageName(state,name){
    if(!name){
      return
    }
    state.pageName=name;
  },

  //切换loading显示
  toggleShowLoading(state,status){
    state.isLoading=status ? true : false
  },

  //文章点赞
  addLike(state,id){
    var state=state.newInfo.newsMsg[id]
    if(!state.isLike){
      state.like+=1;
      state.isLike=true;
    }else{
      state.like-=1;
      state.isLike=false;
    }
  },

  //评论点赞
  addOtherLike(state,obj){
    var state=state.newInfo.newsMsg[obj.id].comment[obj.pid]
    if(!state.isOtherLike){
      state.otherLike+=1;
      state.isOtherLike=true
    }else{
      state.otherLike-=1;
      state.isOtherLike=false
    }
  }
}

export default mutations
