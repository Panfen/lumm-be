import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Index from '@/components/dashboard/Index'
import UserManage from '@/components/dashboard/UserManage'
import ArticleManage from '@/components/dashboard/ArticleManage'
import ShopManage from '@/components/dashboard/ShopManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
    	path: '/dashboard',
    	component: Dashboard,
    	children: [
    		{
    			path: '/index',
    			component: Index
    		},{
          path: '/user',
          component: UserManage
        },{
          path: '/article',
          component: ArticleManage
        },{
          path: '/shop',
          component: ShopManage
        }
    	]
    },{
    	path: '*',
    	redirect: '/'
    }
  ]
})
