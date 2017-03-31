

const home = r => require.ensure([], () => r(require('../page/home')), 'home');
const notepad = r => require.ensure([], () => r(require('../page/notepad')), 'notepad');
const daily = r => require.ensure([], () => r(require('../page/daily')), 'daily');

export default [
  {
    path: '/',
    redirect: '/home'
  },{
    path: '/home',
    name: 'home',
    component: home
  },{
    path: '/daily',
    name: 'daily',
    component: daily
  },{
    path: '/notepad',
    name: 'Notepad',
    component: notepad
  }
]

