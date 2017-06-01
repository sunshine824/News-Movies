/**
 * Created by Gatsby on 2017/6/1.
 */
const getters={
  //评分处理
  convertToStarsArray(state){
    var num=state.stars.toString().substring(0,1)
    var array=[];
    for(var i=1;i<=5;i++){
      if(i<=num){
        array.push(1);
      }else{
        array.push(0)
      }
    }
    return array;
  }
}
export default getters;
