/**
 * Created by Gatsby on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import axios from 'axios'

Vue.use(Vuex)

const state={
  count:0,
  newInfo:{
    newsType:['娱乐','体育','军事','美女','娱乐','美食','科技'],
    newsMsg:[
      {
        text:'韩国拟对朝鲜实行“军硬民软”双轨战略，南北关',
        date:'2017-05-20',
        readCount:100,
        img:'../../assets/images/junjian.jpg',
        type:'军事',
        id:1
      },
      {
        text:'外交家顾维钧遗孀去世 复旦女神走完112岁传奇人生',
        date:'2017-05-21',
        readCount:150,
        type:'社会',
        id:2,
      },
      {
        text:'NBA-詹皇超乔丹改多项历史 骑士连续三年进总决赛',
        date:'2017-05-22',
        readCount:80,
        type:'体育',
        id:3
      },
      {
        text:'15岁少年被砍3刀，倒地后竟淡定玩手机！他也很无奈啊',
        date:'2017-05-23',
        readCount:180,
        type:'社会',
        id:4
      },
      {
        text:'我才是老大！特朗普一把推开黑山总理强势插队',
        date:'2017-05-24',
        readCount:230,
        type:'社会',
        id:5
      },
      {
        text:'“解冻民族资产”骗局：组织者被骗30余次仍深信',
        date:'2017-05-25',
        readCount:300,
        type:'体育',
        id:6
      }
    ]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
