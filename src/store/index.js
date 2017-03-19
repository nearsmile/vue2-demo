/**
 * Created by YangYusheng on 2017/03/19
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import event from './event'
// import theme from './theme'

export default new Vuex.Store({
	modules: {
		event,
		// theme
	}
})