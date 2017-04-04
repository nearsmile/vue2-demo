/*
 * Created by YangYusheng on 2017-04-01
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from './home'
import Notepad from './notepad'
import Daily from './daily'

Vue.use(Router)

export default new Router({
	 routes: [
	  Home,
  	Notepad,
    Daily,
    {
    	path: '*',
    	redirect: '/home'
  	},
	]
});

