import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Index from '@/components/dashboard/Index'
import UserManage from '@/components/dashboard/UserManage'
import ArticleManage from '@/components/dashboard/ArticleManage'
import ShopManage from '@/components/dashboard/ShopManage'
import TopicManage from '@/components/dashboard/TopicManage'
import PicManage from '@/components/dashboard/PicManage'
import CreateArticle from '@/components/dashboard/CreateArticle'
import UploadProduct from '@/components/dashboard/UploadProduct'
import CreateTopic from '@/components/dashboard/CreateTopic'
import ViewContent from '@/components/dashboard/ViewContent'

import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(Router)
Vue.use(MavonEditor)

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
        },{
          path: '/topic',
          component: TopicManage
        },{
          path: '/picture',
          component: PicManage
        },{
          path: '/createActicle',
          component: CreateArticle
        },{
          path: '/uploadProduct',
          component: UploadProduct
        },{
          path: '/createTopic',
          component: CreateTopic
        },{
          path: '/viewContent',
          component: ViewContent
        }
    	]
    },{
    	path: '*',
    	redirect: '/'
    }
  ]
})
