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
      path: '/hello',
      name: 'Hello',
      component: Hello
    },{
      path: '/notepad',
      name: 'Notepad',
      component: notepad
    }
  ]
})
