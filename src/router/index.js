import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes=[
  {
    path: '/',
    name: "登录",
    components: {
      "sign": resolve => require(["../components/sign/login.vue"], resolve)
    }
  },
  {
    path:'/register',
    name:'注册',
    components: {
      "sign": resolve => require(["../components/sign/register.vue"], resolve)
    }
  },
  {
    path: '/news',
    name: "新闻",
    component: resolve => require(["../components/news/news.vue"], resolve)
  },
  {
    path: '/news/news-details',
    name: "",
    component: resolve => require(["../components/news/news-detail.vue"], resolve)
  },
  {
    path: '/movies',
    name: "电影",
    component: resolve => require(["../components/movies/movies.vue"], resolve)
  },
  {
    path: '/movies/more-movies',
    name: "",
    component: resolve => require(["../components/movies/more-movies.vue"], resolve)
  },
  {
    path: '/movie/movie-details',
    name: "",
    component: resolve => require(["../components/movies/movie-details.vue"], resolve)
  },
  {
    path: '/setting',
    name: "设置",
    component: resolve => require(["../components/setting/setting.vue"], resolve)
  },
  {
    path: '/setting/resetPassword',
    name: "",
    component: resolve => require(["../components/setting/resetPassword.vue"], resolve)
  },
]

export default new Router({
  base: "/",
  routes
})
