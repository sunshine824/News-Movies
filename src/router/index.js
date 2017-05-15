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
]

export default new Router({
  base: "/",
  routes
})
