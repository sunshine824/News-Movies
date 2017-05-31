/**
 * Created by Gatsby on 2017/5/26.
 */
import axios from 'axios'
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.baseURL = 'https://api.douban.com'
const actions={
  getMovieList({commit},url){
    commit('getMovieList',url)
  },
  //封装一个ajax方法
  getAjax({commit,state},url,data){
    var data=data || '';

    axios.post(url,data)
      .then((res)=>{
          console.log(res.data)
      })
      .catch((err)=>{
        console.log(err.message)
      })
  }
}

export default actions
