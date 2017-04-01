/*
 * Created by YangYusheng on 2017-04-01
 */


const daily = r => require.ensure([], () => r(require('../page/daily')), 'daily');
const dailyHome = r => require.ensure([], () => r(require('../page/daily/dailyHome')), 'dailyHome');

export default {
  path: '/daily',
  name: 'daily',
  component: daily,
  redirect: '/daily/home',
  children: [
  	{
  		path: 'home',
  		component: dailyHome,
  	}
  ]
}