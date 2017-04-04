/*
 * Created by YangYusheng on 2017-04-01
 */
const home = r => require.ensure([], () => r(require('../page/home')), 'home');

export default {
	path: '/home',
  name: 'home',
  component: home
}