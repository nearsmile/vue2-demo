import Vue from 'vue'
import Router from 'vue-router'

const notepad = r => require.ensure([], () => r(require('../page/notepad')), 'notepad')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/notepad'
    },{
      path: '/notepad',
      name: 'notepad',
      component: notepad
    },{
      path: '/notepad',
      name: 'notepad',
      component: notepad
    }
  ]
})
