import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Index from '@/components/dashboard/Index'

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
    		}
    	]
    },{
    	path: '*',
    	redirect: '/'
    }
  ]
})
