import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import notepad from '@/pages/notepad/notepad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/notepad'
    },{
      path: '/notepad',
      name: 'Notepad',
      component: notepad
    }
  ]
})
