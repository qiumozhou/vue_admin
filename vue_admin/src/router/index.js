import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/components/login/login.vue"
import Index from "@/components/index/index.vue"
import Users from "@/components/users/users.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:"index",
      path: '/',
      component:Index,
      children:[
        {name:"uesrs",
        path: '/users',
        component:Users}
      ]
    },
        {
      name:"login",
      path: '/login',
      component: Login
    },
  ]
})
