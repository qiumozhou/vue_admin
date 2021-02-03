import Vue from 'vue'
import Router from 'vue-router'

import Login from "@/components/login/login.vue"
import Index from "@/components/index/index.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:"index",
      path: '/',
      component:Index

    },
        {
      name:"login",
      path: '/login',
      component: Login
    },
  ]
})
