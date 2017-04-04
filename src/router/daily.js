/*
 * Created by YangYusheng on 2017-04-01
 */


const daily = r => require.ensure([], () => r(require('../page/daily')), 'daily');
// const daily = require('../page/daily');
const dailyHome = r => require.ensure([], () => r(require('../page/daily/dailyHome')), 'dailyHome');
// const dailyHome = require('../page/daily/dailyHome');
const dailyDetail = r => require.ensure([], () => r(require('../page/daily/dailyDetail')), 'dailyDetail');

export default {
  path: '/daily',
  name: 'daily',
  component: daily,
  redirect: '/daily/home',
  children: [
  	{
  		path: 'home',
  		component: dailyHome,
  	},{
      path: 'detail',
      component: dailyDetail,
    }
  ]
}