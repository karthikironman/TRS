import Vue from 'vue'
import Router from 'vue-router'
import mainpage from "@/App1.vue"
import login from "@/components/login.vue"
import landing from "@/components/landing.vue"
Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [  // we will add all the link and respective pages
    {
        path: '/',
        name: 'landing',
        component: landing
      },
    {
      path: '/dashboard',
      name: 'mainPage',
      component: mainpage
    },
    {
        path: '/login',
        name: 'loginPage',
        component: login
      }
  ]
})